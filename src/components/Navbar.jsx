import React from  'react';
import NavbarSection from "./NavbarSection";

function Navbar(){
  return(
    <div style={{float: "right"}}>
      <NavbarSection link="/" name="Schedule"/>   
      <NavbarSection link="/produce" name="Monthly produce"/>
    </div>
  );
}

export default Navbar;