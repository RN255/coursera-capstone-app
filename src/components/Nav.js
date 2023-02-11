import React from "react";
import Logo from "../assets/Logo.svg";
import { Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/underConstruction">Order Online</Link>
          </li>
          <li>
            <Link to="/underConstruction">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
