import React, { useState } from 'react';
import '../css/series.css'; // You can create a CSS file for styling

const Series = () => {
  const [currentBox, setCurrentBox] = useState(0);
  const totalBoxes = 3; // Adjust this based on the number of boxes you have

  const nextBox = () => {
    setCurrentBox((prevBox) => (prevBox + 1) % totalBoxes);
  };

  const prevBox = () => {
    setCurrentBox((prevBox) => (prevBox - 1 + totalBoxes) % totalBoxes);
  };

  return (
    <div className="seriers-container">
      <div className="series">
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <div
            key={index}
            className={`box ${index === currentBox ? 'active' : ''}`}
          >
            {/* Your box content goes here */}
            <h2>Box {index + 1}</h2>
            {/* Add your box content above */}
          </div>
        ))}
      </div>
      <button onClick={prevBox}>Previous</button>
      <button onClick={nextBox}>Next</button>
    </div>
  );
};

export default Series;
