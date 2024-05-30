import React from "react";
import Card from "react-bootstrap/Card";
import apar from "../assets/images/Apar.png";
import asianpaints from "../assets/images/Asian Paints.png";
import bathx from "../assets/images/BathX.png";
import birlaWhite from "../assets/images/Birla.png";
import brooker from "../assets/images/Brooke.png";
import aaa from "../assets/images/AAA.png";
import capstone from "../assets/images/Capstone.png";
import aquatech from "../assets/images/Aquatech.png";
import cri from "../assets/images/CRI Pumps.png";
import cona from "../assets/images/Corsa.png";
import corza from "../assets/images/Corza.png";
import crompoton from "../assets/images/Crompton.png";
import debel from "../assets/images/Debel.png";
import finolex from "../assets/images/Finolex.png";
import fovit from "../assets/images/Fovit.png";
import esdee from "../assets/images/Esdee.png";
import fixit from "../assets/images/Dr_Fixit.png";
import grohe from "../assets/images/Grohe.png";
import Topbar from "../pages/Topbar";

import "../styles/Brands.css";

const brands = [
  apar, aquatech, asianpaints, bathx, birlaWhite,
  brooker, capstone, aaa, cona, cri,
  corza, crompoton, debel, esdee, finolex,
  fovit, fixit, grohe
];

export default function Brands() {
  return (
    <div>
      <Topbar />
      <div className="BrandsContainer">
        <h1 className="BrandsHeader">BRANDS</h1>
        <div className="BrandsCards">
          {brands.map((brand, index) => (
            <Card className="BrandCard" key={index}>
              <img className="BrandImage" src={brand} alt={`Brand ${index + 1}`} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
