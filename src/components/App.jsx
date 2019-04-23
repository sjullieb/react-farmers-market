import React from "react";
import Header from "./Header";
import ProduceTable from "./ProduceTable";
import ScheduleTable from "./ScheduleTable";

function App(){

  var col = {
    display: 'grid',
    gridTemplateColumns: '33% 41% 25%',
    gridGap: '10px'
  };
    
  return (
    <div>
      <Header/>
      <ScheduleTable/>
      <ProduceTable/>
    </div>
  );
}

export default App;