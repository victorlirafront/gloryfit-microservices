package utils

import (
	"fmt"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
)

func generateJWT(userID, role string) (string, error) {
	secretKey := os.Getenv("JWT_SECRET_KEY")
	if secretKey == "" {
		return "", fmt.Errorf("chave secreta não configurada")
	}

	claims := jwt.MapClaims{
		"user_id": userID,
		"role":    role,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(secretKey))

	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func GenerateAdminToken(userID, role string) (string, error) {
	if userID == "" {
		return "", fmt.Errorf("userID não pode estar vazio")
	}

	token, err := generateJWT(userID, role)
	if err != nil {
		return "", fmt.Errorf("erro ao gerar token: %v", err)
	}

	return token, nil
}
