package routes

import (
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	// r.POST("/payment", controllers.ProcessPayment)
	return r
}
