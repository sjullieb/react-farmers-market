import React from  'react';
import DayOfWeek from "./DayOfWeek";

function ScheduleTable() {

  const marketSchedule = [  
    {  
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A"
    },
    {  
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C"
    },
    {  
      day: "Tuesday",
      location: "Hillsboro",
      hours: "5:00pm - 8:30pm",
      booth: "1F"
    },
    {  
      day: "Wednesday",
      location: "Shemanski Park",
      hours: "10:00am - 2:00pm",
      booth: "3E"
    },
    {  
      day: "Thursday",
      location: "Northwest Portland",
      hours: "2:00pm - 6:00pm",
      booth: "6D"
    },
    {  
      day: "Saturday",
      location: "Beaverton",
      hours: "10:00am - 1:30pm",
      booth: "9G"
    }
  ];

  var scheduleStyle = {
    border: "solid black 1px",
    width: "100%",
  };

  var grid = {
    display: 'grid',
    gridTemplateColumns: '16% 17% 16% 16% 17% 16%',
    // gridGap: '10px'
  };

  return(
    <div style={scheduleStyle}>
      <div style={grid}>
        {marketSchedule.map((dayOfWeek, index) =>
          <div key={index}>
            <DayOfWeek 
              day={dayOfWeek.day}
              location={dayOfWeek.location}
              hours={dayOfWeek.hours}
              booth={dayOfWeek.booth}
            />
          </div>
        )}
        
      </div>
    </div>
  );
}

export default ScheduleTable;