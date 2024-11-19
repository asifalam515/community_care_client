// src/ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // Import the CSS file for styling the toggle switch

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleChange = () => {
    toggleTheme();
  };

  return (
    <div>
      <Toggle
        checked={theme === "dark"}
        onChange={handleToggleChange}
        aria-label="Toggle theme"
      />
      <span>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
