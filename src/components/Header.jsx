import React from  'react';
import Navbar from "./Navbar";

function Header() {
  var headerStyle={
    display: "inline-block",
    color: "blue",
  }
  return(
    <div>
      <h1 style={headerStyle}>Avery's Organics</h1>
      <Navbar/> 
    </div>
  );
}

export default Header;