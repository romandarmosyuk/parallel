import React from "react";

import "./index.css"

const cultureItem = [
   "Adventurous",
   "Autonomous",
   "Bold",
   "Collaborative",
   "Curious",
   "Design Driven",
   "Ego-Free",
   "Empathetic",
   "Empowering",
   "Entrepreneurial",
   "Fast Paced",
   "Focused",
   "Forward Thinking",
   "Inclusive",
   "Purposeful"
]


const Culture = () => {
   return cultureItem.map( (value, index)=> (
            <div className="culture__box" key={index}>
                <p  className="culture__text"> {value}</p>
            </div>
         ))
}

export default Culture;