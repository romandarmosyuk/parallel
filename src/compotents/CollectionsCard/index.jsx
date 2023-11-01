import { useState } from "react";
import { CollectionsItems } from "./data";

import classes from "./index.module.css";

export const CollectionsCard = () => {
   // const [ subscribe, setSubscribe ] = useState();

   return (
      <div className={ classes.catalog }>
         {CollectionsItems.map(({ href, title, subtitle }) => (
            <div className={ classes.card }>
               <div className={ classes.image }>
                  <img src={ href }/>
               </div>
               <div className={ classes.container }>
                  <div className={ classes.info }>
                     <h4 className={ classes.title }>{ title }</h4>
                     <p className={ classes.subtitle }>{ subtitle }</p>
                  </div>
                  <div className={ classes.subscribe }>
                     <img src="pls.svg"/>
                  </div>
               </div>
            </div> 
         ))}
      </div>
   );
};
