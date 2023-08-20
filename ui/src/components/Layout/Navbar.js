import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
    <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/#">
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link"  exact to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/SignUp">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
    <Link className="btn btn-outline-light    " type="submit" exact to="/users/search">
              Search
            </Link>
            <Link className="btn btn-outline-light ml-" exact to="/users/addusers">add student</Link>
            <Link className="btn btn-outline-light    " type="login" exact to="login">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
