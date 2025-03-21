import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-student">Add Student</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;