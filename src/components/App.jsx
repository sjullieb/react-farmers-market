import React from "react";
import Navbar from "./Navbar";

function App(){

  var col = {
    display: 'grid',
    gridTemplateColumns: '33% 41% 25%',
    gridGap: '10px'
  };
    
  return (
    <div>
      <h1 style={{display: "inline-block"}}>Avery's Organics</h1>
      <Navbar/> 
    </div>
  );
}

export default App;