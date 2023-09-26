package template

import (
	"fmt"
	// db "gomyown/models"
	"html/template"
	"net/http"
)

type Product struct {
	Id int
	Name string
	Price float64
	Rating float64
	Image string
	Platform string
	PlatformImage string
	Reveiw []Reveiw
}

type Reveiw struct {
	ReveiwOne   string
	ReveiwTwo   string
	ReveiwThree string
}


func ServeTemplateData(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("static/index.html")

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	// employees, err := db.GetEmployees()

	// if err != nil {
	// 	fmt.Println(err.Error())
	// 	return
	// }

	deven := Reveiw{"In publishing and graphic design, Lorem ipsum","In publishinIn publishing and graphic design, Lorem ipsum","Design, Lorem ipsum and graphic design, Lorem ipsum",}
	alex := Reveiw{"In publishing and graphic design","In publishinIn publishing and Lorem ipsum","Design, Lorem ipsum and m"}

	sampleReview := []Reveiw{deven, alex}

	// sampleReview := Reveiw{
	// 	reveiwOne : "In publishing and graphic design, Lorem ipsum",
	// 	reveiwTwo : "In publishinIn publishing and graphic design, Lorem ipsum",
	// 	reveiwThree : "Design, Lorem ipsum and graphic design, Lorem ipsum",
	// }



	// sampleProduct := Product{
	// 	id : 001,
	// 	name : "Mahindra Thar",
	// 	price : 16000,
	// 	rating : 4,
	// 	image :"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=340&impolicy=resize",
	// 	platform : "cardekho",
	// 	platformImage : "https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg",
	// 	reveiw : sampleReview,
	// }

	productOne := Product{
		Id : 001,
		Name : "Mahindra Thar",
		Price : 16000,
		Rating : 4,
		Image :"https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=340&impolicy=resize",
		Platform : "cardekho",
		PlatformImage : "https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg",
		Reveiw : sampleReview,
	}

	productTwo := Product{
		Id : 002,
		Name : "Maruti jimny",
		Price : 18000,
		Rating : 4.5,
		Image :"https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Jimny/6182/1686117643111/front-left-side-47.jpg?imwidth=340&impolicy=resize",
		Platform : "carwale",
		PlatformImage : "https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg",
		Reveiw : sampleReview,
	}

	allProduct := []Product{
		productOne,
		productTwo,
	}

	fmt.Println("Company is %v\\n", allProduct)

	// fmt.Println(employees)

	err = tmpl.Execute(w, allProduct)

	if err != nil {
		http.Error(w, "Internal Server Error!!!", http.StatusInternalServerError)
		return
	}
}
