
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/SinglePost.css";

export default function SinglePost() {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } });

    tl.from(textRef.current, { opacity: 0, y: 50 }).to(textRef.current, { opacity: 1, y: 0 }, "+=1");

    // Return cleanup function
    return () => tl.kill();
  }, []);

  return (
    <div className="singlePost">
      <header>
        <h1 className="singlePostTitle" ref={textRef}>
          A VISION TO PROVIDE <br /> QUALITY PRODUCTS
        </h1>
        <p className="singlePostDesc">
          BUILD UP YOUR HOME WITH THE LATEST AND GREATEST PRODUCTS.
          <br />
          WE OFFER A WIDE RANGE OF PRODUCTS SUCH AS HARDWARE, PAINTS, ELECTRICAL
          ITEMS, SANITARY WARE, AND MORE. <br />
          OUR SELECTION INCLUDES EVERYTHING YOU NEED TO MAKE YOUR HOME MORE
          COMFORTABLE, AND SECURE.
        </p>
      </header>
    </div>
  );
}
