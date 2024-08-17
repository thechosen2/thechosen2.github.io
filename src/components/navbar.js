import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar-parent">
      <div className="navbar">
          <NavLink to="/stuff" style={({ isActive }) => isActive? {color: 'rgb(129, 179, 220)'} : { color: 'black'}}>stuff</NavLink>
          <NavLink to="/camera" style={({ isActive }) => isActive? {color: 'rgb(129, 179, 220)'} : { color: 'black'}}>camera</NavLink>
          <NavLink to="/me" style={({ isActive }) => isActive? {color: 'rgb(129, 179, 220)'} : { color: 'black'}}>me</NavLink>
          <NavLink to="/cart" style={({ isActive }) => isActive? {color: 'rgb(129, 179, 220)'} : { color: 'black'}}>cart</NavLink>
      </div>
    </div>
  )
};

export default Navbar;
