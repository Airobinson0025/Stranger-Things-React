import React from "react";
import { Link } from 'react-router-dom'


const Heading = ({ user }) => {

    return (
      <header>
        <h1>
          Welcome {user?.username} to Stranger's Things
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
      </header>
    );  
};

export default Heading;