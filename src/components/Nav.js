import React from "react";
import Logo from "../assets/Logo.svg";

function Nav() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo"></img>
        <ul>
          <li>Home</li>
          <li>About</li>
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
