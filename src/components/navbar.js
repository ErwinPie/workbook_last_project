import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => (
    <nav className="nav">
        <h2 className="logo-link">{props.title}</h2>
        <ul className="nav-menu">
            <li><NavLink title="Click to go to the main page" className="nav-menu__link" activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink title="Click to go to the list of books" className="nav-menu__link" activeClassName="active" to="/books">Books</NavLink></li>
            <li><NavLink title="Click to go to the library page" className="nav-menu__link" activeClassName="active" to="/about">About</NavLink></li>
        </ul>
    </nav>
);

export default Navbar