package main

import (
	"database/sql"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/victorlirafront/ancora/applications/auth-service/database"
	"github.com/victorlirafront/ancora/applications/auth-service/middlewares"
	routes "github.com/victorlirafront/ancora/applications/auth-service/routes/login"
)

func main() {
	db, err := database.CreateDatabaseConnection()

	if err != nil {
		// log.Fatalf logs an error message and terminates the program using os.Exit(1).
		// In this case, it informs that there was an error connecting to the database and stops execution.
		log.Fatalf("Error connecting to the database: %v", err)
	}

	// "defer" ensures that the code will be executed at the end, even if errors occur.
	defer db.Close() // Closes the database connection at the end of the function.

	router := createRouter(db)
	router.Run(":8080")
}

func createRouter(db *sql.DB) *gin.Engine {
	router := gin.Default()
	router.Use(middlewares.DatabaseMiddleware(db))
	router.Use(middlewares.CORSMiddleware())
	registerRoutes(router, db)
	return router
}

func registerRoutes(router *gin.Engine, db *sql.DB) {
	router.POST("/register", routes.Register)
	router.POST("/login", routes.Login)
}
