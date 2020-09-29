import React from 'react';
import { Link } from "react-router-dom";



function Menu() {
    return (
        <header className = 'menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/customers/">Customers</Link>
                </li>
                <li>
                    <Link to="/addcustomer/">Add customer</Link>
                </li>
                <li>
                    <Link to="/signout/">Sign Out</Link>
                </li>
            </ul>
        </header>
    )
}

export default Menu;