// src/Gallery.js

import React, { useState } from 'react';
import '../styles/Gallery.css';
import Topbar from "./Topbar";    

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery">
        <Topbar />
      <div className="gallery-main">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={selectedImage === image ? 'selected' : ''}
          />
        ))}
      </div>
 
    </div>
  );
};

export default Gallery;
