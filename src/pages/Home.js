
import "../styles/Home.css";
import React from 'react'

import Header from "./Header";
import Posts from "./Posts";
import Branche from "./Branche";
import Footer from "./Footer";  
import Topbar from "./Topbar";
import SinglePost from "./SinglePost"
const options = [
  { label: "Option 1", text: "Electrical materials" },
  { label: "Option 2", text: "Plumbing materials" },
  { label: "Option 3", text: "Sanitaryware" },
  { label: "Option 4", text: "Paints" },
  { label: "Option 5", text: "Hardware" },
];

function Home() {


  return (
    <div className="App">

       <Topbar />
   

      <Header options={options} />

      <Posts />
<SinglePost></SinglePost>


     
      <Branche />
      <Footer />
    </div>
  );
}

export default Home;
