import React from "react";
import motorcycle from "../assets/motorcycle.png";
import bruchetta from "../assets/bruchetta.svg";
import greekSalad from "../assets/greek-salad.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

export default function Specials() {
  return (
    <>
      <article id="specials">
        <div id="specialsTitleContainer">
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </div>
        <div id="specialsDishesContainer">
          <div className="specialDishCard">
            <img
              className="specialsDishImage"
              src={greekSalad}
              alt="greek salad"
            ></img>
            <h3>
              Greek salad<span>$12.99</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Order a delivery
              <img
                className="motoIcon"
                src={motorcycle}
                alt="motorcycle icon"
              ></img>
            </p>
          </div>
          <div className="specialDishCard">
            <img
              className="specialsDishImage"
              src={bruchetta}
              alt="bruchetta"
            ></img>
            <h3>
              Bruchetta<span>$5.99</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Order a delivery
              <img
                className="motoIcon"
                src={motorcycle}
                alt="motorcycle icon"
              ></img>
            </p>
          </div>
          <div className="specialDishCard">
            <img
              className="specialsDishImage"
              src={lemonDessert}
              alt="lemon dessert"
            ></img>
            <h3>
              Lemon Dessert<span>$4.99</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Order a delivery
              <img
                className="motoIcon"
                src={motorcycle}
                alt="motorcycle icon"
              ></img>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
