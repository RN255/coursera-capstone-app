import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import BookingPage from "./components/BookingPage";
import UnderConstruction from "./components/UnderConstruction";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
