import React from 'react'

export default function weatherCard({data, type, convertTemperature, unit, flexDirection, showIcon}) {
  const temp = data.main.temp.toFixed(0);
  console.log(data)

  // console.log("Unix Timestamp:", item.dt);
  const milliseconds = data.dt * 1000;
  
  const dateObject = new Date(milliseconds);
  const hours = dateObject.getHours();
  // console.log("Hours:", hours);

  const day = dateObject.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // console.log(day);
  const dayName = dayNames[day];
  
  const period = hours >= 12 ? 'PM' : 'AM';
  const formatTime = (hours % 12 || 12);
  return (
    <div style={{display:"flex", flexDirection, justifyContent:"space-between"}} className='text-center rounded-lg  flex w-full items-center gap-2 px-5 '>
      <p className='text-white text-lg font-semibold'>
        {type==="hourly"? `${formatTime} ${period.toLowerCase()}`: dayName}
      </p>
      <span className='text-3xl text-white'>{showIcon(data.weather[0].main)}</span>
      <p className='text-white text-lg font-semibold'>{convertTemperature(temp, unit)}&deg;</p>
    </div>
  )
}
