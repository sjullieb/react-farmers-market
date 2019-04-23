import React from "react";

function DayOfWeek(props){
  var dayStyle={
    padding: "10px"
  }
  return(
    <div style={dayStyle}>
      <h3>{props.day}</h3>
      <hr/>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

export default DayOfWeek;