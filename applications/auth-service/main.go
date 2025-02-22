package main

import (
	"fmt"
	"log"

	"github.com/victorlirafront/ancora/applications/auth-service/database"
)

func main() {
	db, err := database.CreateDatabaseConnection()

	if err != nil {
		//log.Fatalf exibe uma mensagem de erro no log e finaliza o programa com os.Exit(1). No seu caso,
		// ele informa que houve um erro ao conectar ao banco de dados e encerra a execução.
		log.Fatalf("Erro ao conectar ao banco de dados: %v", err)
	}

	// "defer" garante que um código será executado no final, mesmo que tenha erros no me
	defer db.Close() // Fechará o banco de dados no final da função

	fmt.Println("Servidor rodando em localhost:8080")
}
