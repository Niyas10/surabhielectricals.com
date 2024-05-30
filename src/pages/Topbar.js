import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Topbar.css";
import imgLog from "../assets/images/logo.png";

export default function Topbar() {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`topbar ${isHidden ? "hidden" : ""}`}>
      <img className="logos" src={imgLog} alt="Logo" />

      <div className="topRights">
        <ul className="topLists">
          <li className="topListItems">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/brands">
              BRANDS
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/gallery">
              GALLERY
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}