import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import electricalImg from "../assets/images/mountain-industrial-pipe001.jpg";
import Switchgear from "../assets/images/Switch_gears.png";
import Lighting from "../assets/images/Lightings.png";
import SWITCHES from "../assets/images/air-modular-range.jpg";
import cables from "../assets/images/Cables.png";
import fans from "../assets/images/Fans01.png";
import pumps from "../assets/images/pumps.png";
import Geyser from "../assets/images/Geyser.png";
import "../styles/Branche.css";

const cardData = [
  { id: 'one', imgSrc: SWITCHES, title: "SWITCHES", description: "Flip, Rocker Switches, Push-Button Switches, Slider Switches, Touch Switches, Smart Switches, Dimmer Switches" },
  { id: 'two', imgSrc: Switchgear, title: "SWITCH GEARS", description: "MCB, RCCB, ISOLATOR, DISTRIBUTION BOARDS, PHASE SELECTOR DBS, ACCL" },
  { id: 'three', imgSrc: Lighting, title: "LIGHTINGS", description: "LED BULBS, LED TUBE LIGHTS, Recessed LED, FLOOD LIGHTS, TRACK LIGHTS, String LIGHTS, SMART BULBS" },
  { id: 'four', imgSrc: cables, title: "WIRES & CABLES", description: "NON-METALLIC SHEATHED CABLE, COAXIAL CABLE, TWISTED PAIR CABLE, SINGLE CONDUCTOR WIRE" },
  { id: 'five', imgSrc: fans, title: "FANS", description: "CEILING FAN, TABLE FAN, PEDESTAL FAN, WALL MOUNTED FAN" },
  { id: 'six', imgSrc: pumps, title: "PUMPS", description: "CENTRIFUGAL PUMPS, SUBMERSIBLE PUMPS, AXIAL-FLOW PUMPS, BOOSTER PUMPS, JET PUMPS" },
  { id: 'seven', imgSrc: Geyser, title: "GEYSERS", description: "CONVENTIONAL STORAGE, TANKLESS INSTANT, HEAT PUMP AND IMMERSION WATER HEATERS" },
  { id: 'eight', imgSrc: electricalImg, title: "CONDUITS", description: "RIGID METAL CONDUIT (RMC), INTERMEDIATE METAL CONDUIT (IMC), ELECTRICAL NON-METALLIC TUBING (ENT) AND PVC" },
];

export default function Branche() {
  const [isHovering, setIsHovering] = useState({});

  const handleMouseOver = (id) => {
    setIsHovering({ ...isHovering, [id]: true });
  };

  const handleMouseOut = (id) => {
    setIsHovering({ ...isHovering, [id]: false });
  };

  return (
    <div className="background-section">
      {cardData.map((card) => (
        <CardComponent
          key={card.id}
          isHovering={isHovering[card.id]}
          onMouseOver={() => handleMouseOver(card.id)}
          onMouseOut={() => handleMouseOut(card.id)}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

const CardComponent = ({ isHovering, onMouseOver, onMouseOut, imgSrc, title, description }) => (
  <Card
    className="custom-card"
    style={{ backgroundColor: isHovering ? "#333333" : "#ffffff" }}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    <div className="card-content">
      <img className="card-img" src={imgSrc} alt={title} />
      <div className="card-text">
        <h3 style={{ color: isHovering ? "#ffffff" : "#968375" }}>{title}</h3>
        <p style={{ color: isHovering ? "#ffffff" : "#968375" }}>{description}</p>
      </div>
    </div>
  </Card>
);
