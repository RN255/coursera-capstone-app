import React from "react";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={Logo} alt="logo"></img>
        <ul>
            <li>Navigation</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul>
            <li>Contact</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <ul>
            <li>Social Media Links</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
      </footer>
    </>
  );
}
