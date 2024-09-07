import React from "react";
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary bg-dark">
          <div className="container-fluid">
            <button data-mdb-button-init className="navbar-toggler" type="button" data-mdb-collapse-init
              data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item active ">
                  <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        

    )
}

export {Navbar}