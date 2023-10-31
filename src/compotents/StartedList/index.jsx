import React, { useState } from "react";

import "./index.css"

const startedItem = [
   { index: 1, text: "Build your new profile", info: "collections1.png" },
   { index: 2, text: "Discover jobs you love", info: "collections2.png" },
   { index: 3, text: "Apply direct to teams", info: "collections3.png" },
   { index: 4, text: "Get quick feedback", info: "collections4.png" },
   { index: 5, text: "Land interviews quicker", info: "collections5.png"}
]

export const StartedList = () => {
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
         <div className="started__info" style={{backgroundImage: `url(${activeListItem.info})`}}>
            </div>
      </>   
   )
}
