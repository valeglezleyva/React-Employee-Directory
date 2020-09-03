import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
    return (
        <Jumbotron fluid style={{textAlign: "center" }}>
                <h1>Welcome to Your Employee Directory</h1>
                <p>
                    You can sort employees by ID, First Name, Last Name, Title or Department.
                </p>
        </Jumbotron> 
    )
}

export default Header;