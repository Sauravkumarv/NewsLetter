// Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar({ setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">📰 NewsletterHub</div>
          
          {/* 🔍 Search Input */}
          <input
            type="text"
            placeholder="Search article..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/newsletter">Newsletters</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/newsletter">Newsletters</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </nav>

      <div className="marquee-wrapper">
        <marquee behavior="scroll" direction="left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorum?
        </marquee>
      </div>
    </>
  );
}
