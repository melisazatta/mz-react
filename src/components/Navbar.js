import React from "react";
import { Link } from "react-router-dom";
import useUser from "../Hooks/useUser";

const Navbar = () => {
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Gallery
        </Link>
        
        <div className="navbar" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/upload">
                Upload
              </Link>
            </li>
            <li className="nav-item">
              {isLogged ? (
                <Link className="nav-link active" to="#" onClick={handleClick}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
