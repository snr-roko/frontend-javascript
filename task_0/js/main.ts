interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "Silva",
  lastName: "Lea",
  age: 26,
  location: "Kumasi"
}

const student2: Student = {
  firstName: "Romeo", 
  lastName: "Dan",
  age: 32,
  location: "Accra"
}

const studentsList: Student[] = [student1, student2]

// get body of html
const body = document.querySelector("body")

// create table
const table = document.createElement("table")

// create table head
const head = document.createElement("thead")

// create table body 
const tableBody = document.createElement("tbody")

// append table to body
body.appendChild(table)

// append table head to table
table.appendChild(head)

// append table body to table
table.appendChild(tableBody)

// create table head row
const headRow = document.createElement("tr")

// append table head row to table head
head.appendChild(headRow)

// create table head cell
const firstNameHead = document.createElement("th")
const locationHead = document.createElement("th")

// append table head cell to table head row
headRow.appendChild(firstNameHead)
headRow.appendChild(locationHead)

// set table head cell text content
firstNameHead.textContent = "First Name"
locationHead.textContent = "Location"


// for each student, render a row in the table
studentsList.forEach((student) => {
  const row = document.createElement("tr")
  const firstNameCell = document.createElement("td")
  const locationCell = document.createElement("td")
  row.appendChild(firstNameCell)
  row.appendChild(locationCell)
  firstNameCell.textContent = student.firstName
  locationCell.textContent = student.location
  tableBody.appendChild(row)
})

