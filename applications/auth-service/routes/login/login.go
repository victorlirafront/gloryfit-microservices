package routes

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/victorlirafront/ancora/applications/auth-service/models"
	"golang.org/x/crypto/bcrypt"
)

func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte([]byte(password)))
	return err == nil
}

func Login(c *gin.Context) {
	db := c.MustGet("db").(*sql.DB)

	username := c.PostForm("username")
	password := c.PostForm("password")

	if len(username) < 8 || len(password) < 8 {
		c.JSON(http.StatusNotAcceptable, gin.H{
			"error": "Username and password must be at least 8 characters long",
		})
		return
	}

	var user models.User
	result := db.QueryRow("SELECT id, username, hashed_password, role FROM users WHERE username = ?", username)
	//o Scan exige ponteiros como argumentos.

	err := result.Scan(&user.ID, &user.Username, &user.HashedPassword, &user.Role)

	if err == sql.ErrNoRows {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "Invalid username or password",
		})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Error while accessing database",
		})
		return
	}

	if !checkPasswordHash(password, user.HashedPassword) {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "Invalid username or password",
		})
		return
	}
}
