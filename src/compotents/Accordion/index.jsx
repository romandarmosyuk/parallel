import { useState } from "react";
import { faq } from "./data.js";
import str from "../../image/str2.png";

import classes from "./index.module.css";

export const Accordion = () => {
   const [openId, setId] = useState();
   
   return <ul className={ classes.accordion}>
      {faq.map(({ id, question, answer }) => {
         return <li className={ classes.item } key={ id }>
            <button className={ classes.header }
               onClick={ () => (id === openId ? setId() : setId(id)) } 
            >
               <p className={ classes.text }>{ question }</p>
               <div className={ `${id === openId ? classes.transform : ""}` }>
                  <img  src={ str } alt=""/>
               </div>
            </button>
            <div className={ `${ classes.body } ${ id === openId ? classes.open : "" }` }>
               { answer }
            </div>
         </li>
      })}
   </ul>
};
