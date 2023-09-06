package main

import (
	"fmt"
	db "gomyown/models"
	"gomyown/template"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", template.ServeTemplateData)

	// open database connection.
	dsn := "root:password@/gomyown"
	err := db.InitDB(dsn)
	if err != nil {
		fmt.Println(err.Error())
		return
	}

	defer db.CloseDB()

	fmt.Println("Server is listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
