import React from 'react';
import localImage from '../images/logo192.png'; 

const ImageDisplay = () => {
  return (
    <div>
      <h2>Image from Public</h2>
      <img src="/images/logo192.png" alt="Public" width="200" />
      <h2>Image from SRC</h2>
      <img src={localImage} alt="Local" width="200" />
    </div>
  );
};

export default ImageDisplay;
