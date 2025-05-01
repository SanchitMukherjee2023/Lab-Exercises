import React from 'react';

const StyledButton2 = ({ children }) => {
  return (
    <>
      <style>
        {`
          .styled-button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 10px;
          }
          .styled-button:hover {
            background-color: #45a049;
          }
        `}
      </style>
      <button className="styled-button">
        {children}
      </button>
    </>
  );
};

export default StyledButton2;