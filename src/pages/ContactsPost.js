// import { Link } from "react-router-dom";
import "../styles/Post.css";
import React from 'react'
 import { useNavigate } from 'react-router-dom';
export default function ContactsPost(props) {
  const history = useNavigate(); // Initialize useHistory hook

  // Define click event handler
  const handleClick = () => {
    if(props.id==1)
    {
      history('/about');
    }

  };


  return (
    
    <div className="ContactPost" onClick={handleClick} >
      <img
        className="ContactPostImg"
        src={props.img}
        alt=""
      
      /> 

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          <h2 className="contactPostTitle">{props.Title}</h2>
        
          
          </span>
          <span className="postCat">
       
          </span>
        </div>
       
      </div>
      <p className="contactPostDesc">
       {props.description}
      </p>
    </div>
  );
}