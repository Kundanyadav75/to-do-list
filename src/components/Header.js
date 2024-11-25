import React from "react";
import grid from "../assests/grid.png";


const Header = ({ toggleSidebar, toggleTheme, isDarkTheme, toggleRightbar }) => {
  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>To-Do App</h1>
      <button className="grid-btn" onClick={toggleRightbar}>
      <img className="grid-image" src={grid} alt="Logo" />
      </button>
      <button className="theme-btn" onClick={toggleTheme}>
        {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
};

export default Header;
