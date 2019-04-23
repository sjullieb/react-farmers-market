import React from "react";

function NavbarSection(props){
  return(
    <button style={{display: "inline-block", margin: "20px"}}>{props.name}</button>
  );
}

export default NavbarSection;