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
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
