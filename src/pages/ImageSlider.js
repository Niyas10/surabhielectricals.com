// import React, { useState, useEffect } from 'react';

// const ImageSlider = ({ images, texts }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedRadio, setSelectedRadio] = useState(0);

//   // Function to go to the next slide
//   const goToNextSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === texts.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Use useEffect to set up the automatic slide transition
//   useEffect(() => {
//     const slideTimer = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

//     // Cleanup the timer on component unmount
//     return () => clearInterval(slideTimer);
//   }, []); // The empty dependency array ensures the effect runs only once


//   return (
//     <div className="image-slider">
//       {images.map((image, index) => (
//         <div key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
//           {/* <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} /> */}
//           <p>{texts[index]}</p>
         
         
          
    

//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageSlider;
