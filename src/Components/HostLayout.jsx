import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../Pages/Host/Host.css'

function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  };

  return (
    <div className="host">
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
          to={"."}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
          to={"income"}
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          // end
          to={"vans"}
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
          to={"reviews"}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
