import React, { useState } from "react";

import "./index.css"

const startedItem = [
   { index: 1, text: "Build your new profile", info: "1" },
   { index: 2, text: "Discover jobs you love", info: "2" },
   { index: 3, text: "Apply direct to teams", info: "3" },
   { index: 4, text: "Get quick feedback", info: "4" },
   { index: 5, text: "Land interviews quicker", info: "5"}
]

const StartedList = () => {
   const [activeListItem, setActiveStateItem] = useState(startedItem[0]);
   return (
      <>
         <div className="started__list">
            {startedItem.map((item) => (
            <div className={`started__box ${activeListItem.index === item.index ? "active" : ''}`}
               onClick={() => setActiveStateItem(item) }
            >
               <div className="started__number">
                  <span>{ item.index }</span>
               </div>
               <p className="started__text">{ item.text }</p>
            </div>
         ))}
         </div>
         <div className="started__info">{activeListItem.info}</div>
      </>   
   )
}

export default StartedList;