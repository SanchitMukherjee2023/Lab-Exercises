import React from 'react';

const StyledButton1 = ({ children }) => {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px'
  };
  
  return (
    <button style={buttonStyle}>
      {children}
    </button>
  );
};

export default StyledButton1;