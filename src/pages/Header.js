import "../styles/header.css";
import video from "../assets/videos/bgvedio.mp4";
import React, { useState, useEffect } from 'react';

const Header = ({ options }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

  // Function to go to the next option
  const goToNextOption = () => {
    setCurrentOptionIndex((prevIndex) =>
      prevIndex === options.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Use useEffect to set up the automatic option transition
  useEffect(() => {
    const optionTimer = setInterval(goToNextOption, 3000); // Change option every 3 seconds

    // Cleanup the timer on component unmount
    return () => clearInterval(optionTimer);
  }, []); // The empty dependency array ensures the effect runs only once

  // Function to change the selected radio button based on text
  const handleTextChange = (text) => {
    const index = options.findIndex((option) => option.text === text);
    if (index !== -1) {
      setCurrentOptionIndex(index);
    }
  };

  return (
    <div className="header">

      <div>
        {options.map((option, index) => (
          <div key={index} style={{ display: index === currentOptionIndex ? 'block' : 'none' }}>
            <video className='vedioS' src={video} autoPlay loop muted></video>
            <div style={{ alignItems: "center", paddingLeft: "10%" }}>
              <p className='radio_Text'>{option.text}</p>
              {/* Your radio buttons go here */}
              <input className='radio_button' type="radio" id="radio1" checked={currentOptionIndex === 0} />
              <input className='radio_button' type="radio" id="radio2" checked={currentOptionIndex === 1} />
              <input className='radio_button' type="radio" id="radio3" checked={currentOptionIndex === 2} />
              <input className='radio_button' type="radio" id="radio4" checked={currentOptionIndex === 3} />
              <input className='radio_button' type="radio" id="radio5" checked={currentOptionIndex === 4} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
