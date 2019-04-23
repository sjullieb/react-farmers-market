import React from  'react';
import NavbarSection from "./NavbarSection";

function Navbar(){
  return(
    <div style={{float: "right"}}>
      <NavbarSection name="Home"/>
      <NavbarSection name="Events"/>
      <NavbarSection name="About"/>
    </div>
  );
}

export default Navbar;