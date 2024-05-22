import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Navbar = () => {
  const { userInfo, handleSignOut } = useFirebase();
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          <div>
            <Link className="navbar-brand" to="/">
              <i
                className="fa-solid fa-mountain-sun"
                style={{ color: "#ff5e14" }}
              ></i>{" "}
              Hill Tour{" "}
              <i
                className="fa-solid fa-mountain-sun"
                style={{ color: "#ff5e14" }}
              ></i>
            </Link>
          </div>

          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              {userInfo.email ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/my-order">
                      My Order
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleSignOut}>
                      Logout
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/user-profile">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
