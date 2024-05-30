import React, { useState, useEffect } from 'react';
import "../styles/AutoRadioButtonTextSlider.css";
import video from "../assets/videos/bgvedio.mp4";

const AutoRadioButtonTextSlider = ({ options }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

 
  const goToNextOption = () => {
    setCurrentOptionIndex((prevIndex) =>
      prevIndex === options.length - 1 ? 0 : prevIndex + 1
    );
  };


  useEffect(() => {
    const optionTimer = setInterval(goToNextOption, 3000); 

    
    return () => clearInterval(optionTimer);
  }, []); 
 
  const handleTextChange = (text) => {
    const index = options.findIndex((option) => option.text === text);
    if (index !== -1) {
      setCurrentOptionIndex(index);
    }
  };

  return (

    <div className='bgImg_Container'>
   
<div className='over_lay'>


<video className='video_'  src={video} autoPlay loop muted >
   
</video>
    <div className="auto-slider">
      {options.map((option, index) => (
        <div key={index} style={{ display: index === currentOptionIndex ? 'block' : 'none' }}>
        
        <p className='radio_Text' >{option.text}</p>
   
      <input className='radio' type="radio" id="radio1" checked={currentOptionIndex === 0} />
      <input className='radio' type="radio" id="radio2" checked={currentOptionIndex === 1} />
      <input className='radio' type="radio" id="radio3"  checked={currentOptionIndex === 2}/>
      <input className='radio' type="radio" id="radio4"  checked={currentOptionIndex === 3}/>
      <input className='radio' type="radio" id="radio5"  checked={currentOptionIndex === 4}/>
   
        </div>
      ))}

    </div>
    
    </div>

    </div>




  );
};

export default AutoRadioButtonTextSlider;