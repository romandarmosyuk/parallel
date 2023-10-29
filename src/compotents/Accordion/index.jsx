import { useState } from "react";
import { faq } from "./data.js";
import str from "../../image/str2.png"

import "./index.css"

export const Accordion = () => {
   const [openId, setId] = useState(null);
   
   return <ul className="accordion">
      {faq.map(({ id, question, answer }) => {
         return <li className="accordion__item" key={ id }>
            <button 
               className="accordion__header" 
               onClick={ () => (id === openId ? setId(null) : setId(id)) } 
            >
               <p className="accordion__text">{ question }</p>
               <div className={`accordion__icon ${id === openId ? "transform" : ""}`}>
                  <img  src={ str } alt=""/>
               </div>
            </button>
            <div className={ `accordion__body ${ id === openId ? "open" : "" }` }>{ answer }</div>
               
         </li>
      })}
   </ul>
};
