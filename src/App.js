import React, {useState} from 'react';
import './App.css';
import Table from "react-bootstrap/Table";
import EmployeeTable from "./TableComponent/EmployeeTable";
import employeeData from "./TableComponent/employeeData";
import Header from "./Header/Header";
import Button from 'react-bootstrap/Button';

function sortByName(employeeA, employeeB) {
  return employeeA.firstName.localeCompare(employeeB.firstName);
}

function sortByLastName(employeeA, employeeB) {
  return employeeA.lastName.localeCompare(employeeB.lastName);
}


function App() {
  const [sortBy, setSortBy] = useState("fName");

  function changeSorting(event) {
    setSortBy(event.target.value);
  }

  // eslint-disable-next-line no-unused-vars
  let sortedEmployees;

  if (sortBy === "fName") {
    sortedEmployees = [...employeeData]
      .sort(sortByName);
  } else if (sortBy === "lName") {
    sortedEmployees = [...employeeData]
      .sort(sortByLastName);
  }
  const employeeComponents = employeeData.map(employee => <EmployeeTable key={employee.id} id={employee.id} firstName={employee.firstName} lastName={employee.lastName} title={employee.title} department={employee.department} />)
  
  return (
    <>
      <Header/>
      <select onChange={changeSorting}>
        <option value="fName">First Name</option>
        <option value="lName">Last Name</option>
        <option value="title">Title</option>
        <option value="department">Department</option>
      </select>
      <Table striped bordered hover variant="dark">
        <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
        </thead>
        <tbody>
            {employeeComponents}
        </tbody>
      </Table>
    </>
  )  
}

export default App;
