import React from 'react';
import './StyledButton.css';

const StyledButton3 = ({ children }) => {
  return (
    <button className="styled-button">
      {children}
    </button>
  );
};

export default StyledButton3;