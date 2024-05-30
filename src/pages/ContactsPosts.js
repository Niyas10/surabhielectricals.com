import Post from "./ContactsPost";
import "../styles/Posts.css";
import React from 'react'
import Footer from "./Footer";
import Meenangadi from '../assets/images/Meenangadi.jpg'
import kambalakkad from '../assets/images/kambalakkad1.jpg'
import Pulpally from '../assets/images/Capital_Pulpally.png'
import Meenangadi_Capital from '../assets/images/Meenangadi_Capital.jpg'

export default function ContactsPosts() {

  return (
    
  <div>
  
    <div  className="contactBg"  style={{paddingBottom:"15%",}}>

 
<h1   style={{paddingLeft:"40%",color:"#666666" }}> Contact Us</h1>


<div className="ContactPosts" style={{paddingTop:"2%",}}>

      <Post  img={Meenangadi}
      id="1"
      Title="Meenangadi" 
      description ="Surabhi Electricals and Hardware Appad Road, Meenangadi, Wayanad 04936 246 044 surabhieh@gmail.com
      Working Hours: 8:30 am to 8:00 pm"
      />
        <Post img={kambalakkad}
          id="2"
       Title="kambalakkad" 
       description ="Surabhi Electricals and Hardware Near Bus Stand, Kambalakkad, Wayanad
       7306 633 235
       surabhiehk@gmail.com
       Working Hours: 8:30 am to 8:00 pm"/>


      <Post img={Pulpally}
        id="3"
       Title="Pulpally" 
       description ="Capital Electricals and Hardware Thazheyangadi, Pulpally, Wayanad
       9961 650 634 capitalehp@gmail.com
       Working Hours: 8:30 am to 8:00 pm" />
      <Post img={Meenangadi_Capital}
        id="4"
       Title="Meenangadi" 
       description ="Capital Hardware and Electricals. Panamaram Road, Meenangadi, Wayanad 04936 240 098
       capitalhem@gmail.com
       Working Hours: 8:30 am to 8:00 pm"
       />


</div>
 

<div
        className="leftSide"
       >



      </div>
      <div >
       
      

      </div>

    </div>
          < Footer /></div>

  );
}