import React from "react";
import { FaHome, FaPhoneAlt, FaEnvelope, FaPrint } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
 
  
          <div className="footerColumn">
            <h4 className="text-warning">SURABHI GROUP</h4>
            <p><FaHome /> Surabhi Electricals and Hardware</p>
            <p><FaPhoneAlt /> 04936 246 044</p>
            <p><FaEnvelope /> surabhieh@gmail.com</p>
            <p><FaPrint /> Working Hours: 8:30 am to 8:00 pm</p>
          </div>
        </div>
   
  );
};

export default Footer;
