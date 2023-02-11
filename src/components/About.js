import React from "react";
import MarioAdrianA from "../assets/Mario-and-Adrian-A.jpg";
import MarioAdrianB from "../assets/Mario-and-Adrian-b.jpg";

export default function About() {
  return (
    <>
      <article id="about">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div id="aboutImgContainer">
          <img
            id="MarioAdrianA"
            src={MarioAdrianB}
            alt="Mario and Adrian the chefs"
          ></img>
          <img
            id="MarioAdrianB"
            src={MarioAdrianA}
            alt="Mario and Adrian the chefs"
          ></img>
        </div>
      </article>
    </>
  );
}
