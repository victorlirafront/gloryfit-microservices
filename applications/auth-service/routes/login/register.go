package routes

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/victorlirafront/ancora/applications/auth-service/models"
	"golang.org/x/crypto/bcrypt"
)

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

func Register(c *gin.Context) {
	db, exists := c.MustGet("db").(*sql.DB)
	if !exists {
		log.Println("Erro: banco de dados não encontrado no contexto")
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	username := c.PostForm("username")
	password := c.PostForm("password")

	if len(username) < 8 || len(password) < 8 {
		c.JSON(http.StatusNotAcceptable, gin.H{
			"error": "Username and password must be at least 8 characters long",
		})
		return
	}

	var user models.User
	err := db.QueryRow("SELECT id, username, hashedpassword FROM users WHERE username = ?", username).
		Scan(&user.ID, &user.Username, &user.HashedPassword)

	if err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "User already exists"})
		return
	} else if err != sql.ErrNoRows {
		log.Println("Erro ao verificar usuário existente:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
		return
	}

	hashedPassword, err := hashPassword(password)
	if err != nil {
		log.Println("Erro ao gerar hash da senha:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	_, err = db.Exec("INSERT INTO users (username, hashedpassword) VALUES (?, ?)", username, hashedPassword)
	if err != nil {
		log.Println("Erro ao registrar usuário:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to register user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User registered successfully"})
}
