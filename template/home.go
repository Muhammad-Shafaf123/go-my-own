package template

import (
	"gomyown/employee"
	"html/template"
	"net/http"
)

func ServeTemplateData(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("static/index.html")

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	empl01 := employee.Employee{
		Number:   1,
		Name:     "Shafaf",
		Age:      22,
		Region:   "India",
		Position: "Software Developer",
		Company:  "Zennode Technology",
	}
	empl02 := employee.Employee{
		Number:   2,
		Name:     "Jonh Deo",
		Age:      25,
		Region:   "Paris",
		Position: "Software Engineer",
		Company:  "Microsoft Corporation",
	}
	empl03 := employee.Employee{
		Number:   3,
		Name:     "Smith",
		Age:      35,
		Region:   "Europe",
		Position: "Computer Engineer",
		Company:  "Google",
	}
	empl04 := employee.Employee{
		Number:   4,
		Name:     "Herman",
		Age:      31,
		Region:   "Tokyo",
		Position: "Managing Director",
		Company:  "Apple",
	}

	employee := []employee.Employee{empl01, empl02, empl03, empl04}

	err = tmpl.Execute(w, employee)

	if err != nil {
		http.Error(w, "Internal Server Error!!!", http.StatusInternalServerError)
		return
	}
}
