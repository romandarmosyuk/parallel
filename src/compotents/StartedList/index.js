import React from "react";

import "./index.css"

const startedItem = [
   { index: "1", text: "Build your new profile" },
   { index: "2", text: "Discover jobs you love" },
   { index: "3", text: "Apply direct to teams" },
   { index: "4", text: "Get quick feedback" },
   { index: "5", text: "Land interviews quicker"}
]

const StartedList = () => {
   return (
      <>
      {startedItem.map(({ index, text}) => (
         <div className="started__box">
            <div className="started__number">
               <span>{ index }</span>
            </div>
            <p className="started__text">{ text }</p>
         </div>
      ))}
      </>
   )
}

export default StartedList;