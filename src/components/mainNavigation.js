import React from 'react';
import {NavLink} from "react-router-dom";
import "./mainNavigation.css";
function MainNavigation(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#" style={{ marginLeft: "40px" }}>
            TITLE..
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto myNav"
              style={{ margin: "0 auto" }}
            >
              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/home/">Home</NavLink>
              </li>

              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/details">Details</NavLink>
              </li>
              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
            <div className="btnDiv">
              <NavLink to="/loginPage" className="btn  my-2 my-sm-0 myBtn">
                Login
              </NavLink>
              {/* <NavLink to="/signPage" className="btn  my-2 my-sm-0 myBtn">
                Sign in
              </NavLink> */}
            </div>
          </div>
        </nav>
      </div>
    );
}
export default MainNavigation;