import React from "react";

function Month(props){
  var monthStyle={
    textAlign: "center",
  }

  var gridStyle={
    border: "solid black 1px",
  }

  var listStyle={
    listStyle: "none",
  }

  return(
    <div style={gridStyle}>
      <h3 style={monthStyle}>{props.month}</h3>
      <hr/>
      <ul style={listStyle}>{props.selection.map((produce, index) =>
        <li key={index}>
          {produce}
        </li>
      )}
      </ul>
    </div>
  );
}

export default Month;