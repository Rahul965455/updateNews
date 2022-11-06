import {React , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
News Blog
        </NavLink>
        <button
       className="navbar-toggler"
       type="button"
       data-bs-toogle="collapse"
       data-bs-target="#nabbarSupportcontent"
       aria-controls="navbarSupportContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
        >
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>

      <li className="nav-item">
          <NavLink className="nav-link" to="/News">News</NavLink>
        </li>

      <li className="nav-item">
        <NavLink className="nav-link " to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/contact">Contact</NavLink>
      </li>
 
    </ul>
<div className="buttons">
<div to="/login" className="btn btn-outline-dark fw-bold">
  <i className="fa fa-sign-in me-1">Login</i>
 
</div>
<div to="register" className="btn btn-outline-dark ms-2" > <i className="fa fa-user-plus me-1"></i> Register</div>
</div>
  </div>
</div>
</nav>
  </div>
)}

export default Header