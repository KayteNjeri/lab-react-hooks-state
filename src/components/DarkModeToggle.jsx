import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      Toggle {darkMode ? "Light Mode" : "Dark Mode"}
       {/* TODO: Update this text from Dark to Light dynamically */}
       </button>
  );
}

export default DarkModeToggle
