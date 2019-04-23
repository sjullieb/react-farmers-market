import React from "react";

function Month(props){
  var monthStyle={
    paddingLeft: "30px"
  }
  return(
    <div>
      <h3 style={monthStyle}>{props.month}</h3>
      <ul>{props.selection.map((produce, index) =>
        <li key={index}>
          <p>{produce}</p>
        </li>
      )}
      </ul>
    </div>
  );
}

export default Month;