import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggler;