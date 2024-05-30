
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import  components for each route
import Home from './pages/Home'
import About from './pages/About';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery'




import PHOTO1 from "./assets/images/gallery/PHOTO1.jpg";
import PHOTO2 from "./assets/images/gallery/PHOTO2.jpg";
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
        {/* Define your routes using the "Route" component */}
        {/* <Route path="/Banner" element={<Banner/>}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
       <Route path="/contact" 
       element={<Contact />} />

<Route path="/Gallery" 
       element={ <Gallery images={images} />} />
  
        {/* <Route path="/" element={<Topbar />} />
       <Route path="/Electricals" element={<Electricals />} />
        <Route path="/about" element={<About />} /> */}

        {/* ... other routes */}
      </Routes>
    </Router>
  );
};

export default App;
// import SWITCHES from "./assets/images/air-modular-range.jpg";
// import cables from "./assets/images/Cables.png";
// import fans from "./assets/images/Fans01.png";
// import pumps from "./assets/images/pumps.png";
// import Geyser from "./assets/images/Geyser.png";
// import * as React from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// export default function App() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <button type="button" onClick={() => setOpen(true)}>
//         Open Lightbox
//       </button>

//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={[
//           { src: SWITCHES },
//           { src: cables },
//           { src: fans },
//         ]}
//       />
//     </>
//   );
// }