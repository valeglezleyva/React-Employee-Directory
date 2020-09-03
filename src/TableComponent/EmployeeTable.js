import React from "react";

function EmployeeTable(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.title}</td>
                <td>{props.department}</td>
            </tr>
        </>
    )
}

export default EmployeeTable;