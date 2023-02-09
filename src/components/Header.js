import React from "react";
import restaurantFood from "../assets/restaurantfood.jpg";

export default function Header() {
  return (
    <>
      <header>
        <div id="headerContainer">
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean resturany, focused on
              traditional recipes served with a modern twist.
            </p>
            <button>Reserve a Table</button>
          </div>
          <div id="headerImgContainer">
            <img src={restaurantFood} alt="some food"></img>
          </div>
        </div>
      </header>
    </>
  );
}
