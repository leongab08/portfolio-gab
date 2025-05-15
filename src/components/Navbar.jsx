import { useState } from "react";

export default function Navbar() {
  const [islistOpen, setIsListOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="logo">
        <span>Gabriel</span>
      </a>
      <ul className={`lists ${islistOpen ? "active" : ""}`} >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </ul>

      <i
        className="bx bx-menu"
        id="menu"
        onClick={() => {
          setIsListOpen(!islistOpen);
        }}
      ></i>

      <a href="#contact" className="btn">
        Contact Me
      </a>
    </nav>
  );
}
