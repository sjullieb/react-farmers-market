import React from "react";
import Header from "./Header";
import ProduceTable from "./ProduceTable";
import ScheduleTable from "./ScheduleTable";

function App(){
    
  return (
    <div>
      <Header/>
      <ScheduleTable/>
      <br/>
      <ProduceTable/>
    </div>
  );
}

export default App;