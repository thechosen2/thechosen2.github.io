import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar-parent">
      <div className="navbar">
          <NavLink to="/blogs">blogs</NavLink>
          <NavLink to="/camera">camera</NavLink>
          <NavLink to="/me">me</NavLink>
      </div>
    </div>
  )
};

export default Navbar;
