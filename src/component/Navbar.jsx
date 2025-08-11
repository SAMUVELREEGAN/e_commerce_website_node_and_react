import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
// import CountryLanguageSelector from "./CountryLanguageSelector";
import "./css/Navbar.css";
import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <div className="navbar-top">
        <NavLink to="/" end>home</NavLink>
        <NavLink to="/about">{t("about")}</NavLink>
        <NavLink to="/settings">{t("settings")}</NavLink>
        {/* <CountryLanguageSelector /> */}
      </div>

      <div className="navbar-bottom">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          <FaHome />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaUser />
        </NavLink>
        <NavLink to="/setting" className={({ isActive }) => (isActive ? "active" : "")}>
        <IoMenu />
        </NavLink>
        <NavLink to="/setings" className={({ isActive }) => (isActive ? "active" : "")}>
       <BsCart2 />
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
          <FaCog />
        </NavLink>
      </div>
    </>
  );
}
