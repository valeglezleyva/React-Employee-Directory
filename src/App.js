import React from 'react';
import './App.css';
import Table from "react-bootstrap/Table";
import EmployeeTable from "./TableComponent/EmployeeTable";
import employeeData from "./TableComponent/employeeData";
import Header from "./Header/Header";

function App() {
  const employeeComponents = employeeData.map(employee => <EmployeeTable key={employee.id} id={employee.id} firstName={employee.firstName} lastName={employee.lastName} title={employee.title} department={employee.department} />)
  
  return (
    <>
      <Header/>
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
  );
}

export default App;
