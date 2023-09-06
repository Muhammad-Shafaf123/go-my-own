package template

import (
	"fmt"
	db "gomyown/models"
	"html/template"
	"net/http"
)

func ServeTemplateData(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("static/index.html")

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	employees, err := db.GetEmployees()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	fmt.Println(employees)

	err = tmpl.Execute(w, employees)

	if err != nil {
		http.Error(w, "Internal Server Error!!!", http.StatusInternalServerError)
		return
	}
}
