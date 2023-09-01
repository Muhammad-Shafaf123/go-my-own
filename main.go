package main

import (
	"fmt"
	"html/template"
	"net/http"
)

type Employeee struct {
	Number   int
	Name     string
	Age      int
	Place    string
	Position string
	Company  string
}

func serveTemplate(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("static/index.html")

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	empl01 := Employeee{
		Number:   1,
		Name:     "Shafaf",
		Age:      22,
		Place:    "Kozhikode",
		Position: "Software Developer",
		Company:  "Zennode Technology",
	}
	empl02 := Employeee{
		Number:   2,
		Name:     "Jonh Deo",
		Age:      25,
		Place:    "Paris",
		Position: "Software Engineer",
		Company:  "Microsoft Corporation",
	}

	employee := []Employeee{empl01, empl02}

	err = tmpl.Execute(w, employee)

	if err != nil {
		http.Error(w, "Internal Server Error!!!", http.StatusInternalServerError)
		return
	}
}

func main() {
	// Serve static files from the "static" directory
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.HandleFunc("/", serveTemplate)

	fmt.Println("Server is listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
