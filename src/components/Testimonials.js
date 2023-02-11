import React from "react";
import portraitOne from "../assets/portraitOne.jpg";
import portraitTwo from "../assets/portraitTwo.jpg";
import portraitThree from "../assets/portraitThree.jpg";
import portraitFour from "../assets/portraitFour.jpg";
import star from "../assets/star.png";

export default function Testimonials() {
  return (
    <>
      <article id="testimonials">
        <h2>Testimonials</h2>
        <div id="testimonailsContainer">
          <div className="ratingCard">
            <h4>Mark Jacks</h4>
            <div className="ratingContainer">
              <img
                className="testimonialPortrait"
                src={portraitOne}
                alt="a customer portrait"
              ></img>
              <div className="starContainer">
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
              </div>
            </div>
            <p>Wonderful, I loved it!</p>
          </div>
          <div className="ratingCard">
            <h4>Bill Rice</h4>
            <div className="ratingContainer">
              <img
                className="testimonialPortrait"
                src={portraitTwo}
                alt="a customer portrait"
              ></img>
              <div className="starContainer">
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
              </div>
            </div>
            <p>Well worth a visit!</p>
          </div>
          <div className="ratingCard">
            <h4>Sally Smith</h4>
            <div className="ratingContainer">
              <img
                className="testimonialPortrait"
                src={portraitThree}
                alt="a customer portrait"
              ></img>
              <div className="starContainer">
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
              </div>
            </div>
            <p>Wow, so delicious!</p>
          </div>
          <div className="ratingCard">
            <h4>Sandra Gates</h4>
            <div className="ratingContainer">
              <img
                className="testimonialPortrait"
                src={portraitFour}
                alt="a customer portrait"
              ></img>
              <div className="starContainer">
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
                <img src={star} alt="start"></img>
              </div>
            </div>
            <p>I will go back for seconds!</p>
          </div>
        </div>
      </article>
    </>
  );
}
