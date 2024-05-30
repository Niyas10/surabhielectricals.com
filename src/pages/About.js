import React from "react";

import "react-slideshow-image/dist/styles.css";

import "../styles/Navbar.css";
import imgLog from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import "../styles/About.css";
import Topbar from "./Topbar";
import image from "../assets/images/aboutImg.jpg";

function About() {
  return (
    <div>
      <Topbar />
      <div className="about">
        <div className="row">
          <div
            className="column"
            style={{
              background: `linear-gradient(to bottom, #80b3d8, #bcd7eb,#e9f2f8,#ebf4f9,#ffffff)`,
            }}
          >
            <img className="aboutImg" src={image} alt="" />
          </div>
          <div
            className="column"
            style={{
              background: `linear-gradient(to bottom, #80b3d8, #bcd7eb,#e9f2f8,#ebf4f9,#ffffff)`,
            }}
          >
            <p className="details">
              The Surabhi Group started its journey from Meenangadi a small town
              in Wayanad, Kerala on April 2012 with aims to cater to the diverse
              needs of its customers by providing them with reliable and durable
              products with a decent price. Surabhi offers a wide range of
              products, including electrical, hardware, paints, tools, sanitary
              ware, plumbing materials and more. Over the years, it has grown
              steadily and expanded its operations to meet the increasing demand
              for these products. With its commitment to customer satisfaction
              and high-quality products, the shop quickly gained a reputation
              for being a reliable source of paint, hardware, sanitary ware, and
              electrical, fancy lights, plumbing materials, cp fittings etc.
              This led to an increase in customer base and the need for
              expansion. As a result, the shop opened its first branch in
              Kambalakkad in 2016. The new branch allowed the shop to reach a
              wider customer base and provide better service to its existing
              customers. Encouraged by the success of the first branch, the shop
              continued to expand and opened three more branches in different
              locations over the years. Each branch was strategically located to
              cater to the needs of customers in that area. Today, with four
              branches spread across Wayanad. Surabhi Electricals and Hardware-
              Meenagadi, Surabhi Electricals and Hardware- Kambalakkad, Capital
              Electricals and Hardware- Pulpally and Capital Hardware and
              Electricals- Meenangadi. The shop continues to serve its customers
              with a wide range of products. It takes pride in offering
              high-quality products at competitive prices and providing
              excellent customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
