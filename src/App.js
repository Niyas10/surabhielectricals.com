
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery'


import PHOTO3 from "./assets/images/gallery/PHOTO3.jpg";
import PHOTO4 from "./assets/images/gallery/PHOTO4.jpg";
import PHOTO5 from "./assets/images/gallery/PHOTO5.jpg";
import PHOTO6 from "./assets/images/gallery/galleryOne.jpg";
import PHOTO7 from "./assets/images/gallery/galleryTwo.jpg";
import PHOTO8 from "./assets/images/gallery/galleryThree.jpg";

import PHOTO9 from "./assets/images/gallery/galleryFour.jpg";
import PHOTO11 from "./assets/images/gallery/galleryFive.jpg";
import PHOTO12 from "./assets/images/gallery/gallerySix.jpg";

const App = () => {
  const images = [
  PHOTO7,PHOTO8,PHOTO9,PHOTO11,PHOTO12,
    PHOTO3,PHOTO4,PHOTO5,  PHOTO6,
  
  ];
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
       <Route path="/contact" 
       element={<Contact />} />

<Route path="/Gallery" 
       element={ <Gallery images={images} />} />
  
      
      </Routes>
    </Router>
  );
};

export default App;
