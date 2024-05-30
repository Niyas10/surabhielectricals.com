import Post from "./Post";
import "../styles/Posts.css";
import React from 'react'
import electricalImg from '../assets/images/Image_Electricals.jpg'
import hardware from '../assets/images/Hardwares.jpg'
import pants from '../assets/images/Paints.jpg'
import pipe from '../assets/images/Pipe.png'
import sanitarty from '../assets/images/Sanitaryware.jpg'
import what  from '../assets/images/what.jpg'

export default function Posts() {

  return (
    
    <div>
  
    <div className='zone'>

    <h1 className='zoneHead' style={{paddingTop:"5%",justifyContent:"center",alignContent:"center",alignSelf:"center"}}>ZONES</h1>

<div className="posts">

      <Post  img={electricalImg}
      id="1"
      Title="Electricals" 
      description ="Electrification with quality materials is crucial for safety, efficiency, and 
      longevity. Usage of quality materials upfront can save money in the long run and ensure a safe 
      and reliable electrical system"
      />
        <Post img={pants}
          id="2"
       Title="Paints" 
       description ="Paint your dream to life. \n Transfrom your home's atmosphere with a fresh 
       coat of paint. It is a great way to get rid of any unwanted energy in your home and clear out any negative vibes"/>


      <Post img={pipe}
        id="3"
       Title="Plumbing and Fittings" 
       description ="Quality pipes and fitting are made from durable materials that can withstand harsh conditions and resist correosion
       , ensuring a long lifespan for you plumbing system." />
      <Post img={sanitarty}
        id="4"
       Title="Sanitarywares" 
       description ="Visit the world of dazzling bathroom fittings.
       Sanitaryware is an essential part of any home. By choosing the right sanitaryware for your needs, you can create a bathroom or
       kitchen that is both stylish and functional"
       />
    
      <Post img={hardware}
        id="5"
       Title="Hardware" 
       description ="Protect your home with quality fittings.By choosing the right hardware, you can transform your furniture into works of art,
       enhancing the style and comfort of your home"/>

         <Post img={what}
           id="6"
       Title="What Should You Need?"
       description ="Contact us and get a free quote for your home making needs. Bulid up your home with the 
       latest and greatest products! Order today and get fast and FREE delivery and excellent customer service" />
</div>
 
    </div>
    
    </div>
  );
}