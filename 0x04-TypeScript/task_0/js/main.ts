// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Eyob",
  lastName: "Bekele",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Mulu",
  age: 21,
  location: "Bahir Dar",
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create a table and render student info
const table = document.createElement("table");
const tableHeader = document.createElement("tr");

// Create table headers
const header1 = document.createElement("th");
header1.textContent = "First Name";

const header2 = document.createElement("th");
header2.textContent = "Location";

tableHeader.appendChild(header1);
tableHeader.appendChild(header2);
table.appendChild(tableHeader);

// Loop through the list and append rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Add table to document body
document.body.appendChild(table);
