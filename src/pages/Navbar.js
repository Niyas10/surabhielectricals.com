// import { Link } from "react-router-dom";
//  import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import imgLog from "../assets/images/logo.png";
import { FaFacebook   } from "react-icons/fa6";
import { FaTwitter ,FaInstagramSquare} from "react-icons/fa";
export default function Navbar() {

  return (
    <div className="container">
    <div className="top">
      <div className="topLeft">
      <img className="logo" src={imgLog} alt="" />
      
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/home">
          HOME
            </Link>   {/* <Link className="link" to="/"> */}
              
            {/* </Link> */}
          </li>
          <li className="topListItem">    
          <Link className="link" to="/about">
          ABOUT
            </Link></li>
          <li className="topListItem">  <Link className="link" to="/brands">
          BRANDS
            </Link></li>

            <li className="topListItem">
          <Link className="link" to="/contact">
          CONTACT
            </Link></li>
            
          <li className="topListItem">PRODUCTS</li>
        
            
          <li className="topListItem">GALLERY</li>
          <li className="topListItem">CAREER</li>
          <li className="topListItem">
            {/* <Link className="link" to="/write">
              WRITE
            </Link> */}
          </li>
       
        </ul>
      </div>
      <div className="topRight">
       
        <i className="topIcon fab fa-facebook-square"><FaFacebook /></i>
        <i className="topIcon fab fa-instagram-square"><FaInstagramSquare /></i>
        <i className="topIcon fab fa-pinterest-square"> <FaTwitter /></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>    </div>
  );
}

// import React from 'react';


// const Navbar = () => {
//   return (
//     <div className="container">
//       {/* Top navigation */}
//       <div className="top_container">
//         <div className="top_Left">
//           <img src={imgLog} className="logo" alt="Logo" />
//         </div>
//         <div className="top_Center">
//           <div className="topList">
//             <Link to="/home" className="link">HOME</Link>
//             <Link to="/about" className="link">ABOUT</Link>
//             <span className="link">BRANDS</span>
//             {/* Add other links here */}
//           </div>
//         </div>
//         <div className="topRight">
//           <FaFacebook className="icon" />
//           <FaInstagramSquare className="icon" />
//           <FaTwitter className="icon" />
//         </div>
//       </div>

//       {/* Brands section */}
//       <div className="brands">
//         {/* Add your brand cards here */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
