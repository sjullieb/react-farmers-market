import React from "react";

function NavbarSection(props){
  var navbarStyle={
    display: "inline-block", margin: "20px"
  }
  return(
    <button style={{navbarStyle}}>{props.name}</button>
  );
}

export default NavbarSection;