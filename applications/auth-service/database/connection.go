package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql" // Importa o driver do MySQL para usar com o SQL
	"github.com/joho/godotenv"
)

func CreateDatabaseConnection() (*sql.DB, error) {
	// Carrega as variáveis de ambiente do arquivo .env
	err := godotenv.Load()
	if err != nil {
		log.Printf("Aviso, Não foi possível carregar o arquivo .env: %v", err)
	}

	// Obtém as variáveis de ambiente
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	database := os.Getenv("DB_NAME")

	// Verifica se alguma variável de ambiente está vazia
	if host == "" || port == "" || username == "" || password == "" || database == "" {
		return nil, fmt.Errorf("uma ou mais variáveis de ambiente não estão configuradas corretamente")
	}

	// Cria a string de conexão com o banco de dados
	connStr := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", username, password, host, port, database)

	// Abre a conexão com o banco de dados
	db, err := sql.Open("mysql", connStr)
	if err != nil {
		return nil, fmt.Errorf("erro ao abrir conexão com o banco de dados: %v", err)
	}

	// Verifica se a conexão é válida
	err = db.Ping()
	if err != nil {
		return nil, fmt.Errorf("erro ao conectar ao banco de dados: %v", err)
	}

	// Retorna a conexão com o banco de dados
	return db, nil
}
