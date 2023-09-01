package main

import (
	"fmt"
	"gomyown/template"
	"net/http"
)

func main() {
	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", template.ServeTemplateData)

	fmt.Println("Server is listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
