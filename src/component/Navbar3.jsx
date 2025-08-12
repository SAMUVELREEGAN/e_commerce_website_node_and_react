import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      {/* Top navbar - Text (desktop) */}
      <div className="navbar-top">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      {/* Spacer for top navbar (desktop only) */}
      <div className="navbar-top-spacer"></div>

      {/* Bottom navbar - Icons (mobile) */}
      <div className="navbar-bottom">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          <FaHome />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaUser />
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
          <IoMenu />
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          <BsCart2 />
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaCog />
        </NavLink>
      </div>
      {/* Spacer for bottom navbar (mobile only) */}
      <div className="navbar-bottom-spacer"></div>
    </>
  );
}