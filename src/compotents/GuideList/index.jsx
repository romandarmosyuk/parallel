import React, { useState } from "react";
import { startedItems } from "./data";

import classes from "./index.module.css"

export const GuideList = () => {
   const [activeListItem, setActiveStateItem] = useState(startedItems[0]);
   return (
      <div className={ classes.container }>
         <div className={classes.list }>
            {startedItems.map(( item ) => (
            <div className={`${ classes.box } ${ activeListItem.index === item.index ? classes.active : ''}`}
               onClick={() => setActiveStateItem( item ) }
            >
               <div className={ classes.number }>
                  <span className={ classes.title }>{ item.index }</span>
               </div>
               <p className={ classes.text }>{ item.text }</p>
            </div>
         ))}
         </div>
         <div className={ classes.info } style={{backgroundImage: `url(${activeListItem.info})`}}>
            </div>
      </div>   
   );
};
