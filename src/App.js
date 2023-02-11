import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
