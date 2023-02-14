import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function Nav() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <nav ref={navRef}>
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
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </>
  );
}

export default Nav;
