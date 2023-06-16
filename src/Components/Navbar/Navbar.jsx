import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  
  const activeStyle = {
    fontWeight:'bold',
    color:'#161616',
    textDecoration: "underline",
  };

  return (
    <nav className="main-nav">
      <p className="name">
        <Link to={"/"}>#VANLIFE</Link>
      </p>
      <ul className="nav-items">
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to={"host"}
          >
            Host
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to={"about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            to={"vans"}
          >
            Vans
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
