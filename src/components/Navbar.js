import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
// import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="navbar" id={isOpen ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {/* <ReorderIcon /> */} Menu
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/experience">Experiências</Link>
      </div>
    </div>
  );
}

export default Navbar;
