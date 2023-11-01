import { cultureItems } from "./data"

import classes from "./index.module.css"

export const Tag = () => {
   return (
      <div className={ classes.container }>
         {cultureItems.map( (value, index)=> (
            <div className={ classes.box } key={ index }>
                <p  className={ classes.text }> { value }</p>
            </div>
         ))}
      </div>
   ); 
};
