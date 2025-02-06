import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.myuser.user);
 
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  fixed-top shadow ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            E-SHOP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5 gap-10px mx-auto">
              <li className="nav-item ">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link active text-light" to="/Cart">
                  Cart
                </Link>
              </li>
            <li>
              <Link className="nav-link active text-light" to="/place">
              PLACE OREDER
              </Link>
            </li>
            <li>
              <Link className="nav-link active text-light" to="/userprofile">
              USER PROFILE
              </Link>
            </li>

            </ul>



            <Link to="/register" >
              <button className="btn btn-outline-light mx-2">Register</button>
            </Link>
            {user.token ? (
              <Link to="/logout">
                <button className="btn btn-outline-light mx-2 ">Logout</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-light mx-2 " >Login</button>
                
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
