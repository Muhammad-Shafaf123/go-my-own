package db

import (
	"database/sql"
	"gomyown/employee"
)

var db *sql.DB

// function for intializing the database.
func InitDB(dns string) error {
	var err error

	db, err = sql.Open("mysql", dns)
	if err != nil {
		return err
	}

	return nil
}

// function for closing the database
func CloseDB() {
	if db != nil {
		db.Close()
	}
}

// function for getting all employees
func GetEmployees() ([]employee.Employee, error) {
	result, err := db.Query("select * from employee")

	if err != nil {
		return nil, err
	}

	var employees []employee.Employee

	for result.Next() {
		var emp employee.Employee
		err = result.Scan(&emp.Number, &emp.Name, &emp.Age, &emp.Region, &emp.Position, &emp.Company)
		if err != nil {
			return nil, err
		}
		employees = append(employees, emp)
	}

	return employees, nil
}
