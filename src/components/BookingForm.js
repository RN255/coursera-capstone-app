import React from "react";
import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please fill in the form");
    } else {
      setName("");
      console.log("form submitted!");
      console.log({ name });
      console.log({ date });
      console.log({ time });
      console.log({ guests });
      console.log({ occasion });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            id="res-date"
            type="date"
            name="res-date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            name="res-time"
            onChange={(e) => setTime(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
