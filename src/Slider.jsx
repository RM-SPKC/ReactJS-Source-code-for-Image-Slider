import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [ 's1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg','s6.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);}, 3000);
      return () => clearInterval(timer); 
  }, []); 

  return (
    <div id="box">
      <img src={images[currentIndex]} alt="slider" />
    </div>
  );
};

export default Slider;
