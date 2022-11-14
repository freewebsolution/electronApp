import React from "react";
import AppButton from "./AppButton";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1 className="title">TODOLIST</h1>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Documentation</a>
            <div className="navbar-item has-dropdown is-hoverable"></div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
               <AppButton text='login'/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
