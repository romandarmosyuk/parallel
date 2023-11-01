import { Button } from "../Button";
import { topItems } from "./data";

import classes from "./index.module.css";
import button from '../Button/index.module.css';

export const Top = () => {
   return (
      <div className={ classes.catalog }>
         {
            topItems.map( ({ href, title, subtitle, position, employees })  => (
               <div className={ classes.card }>
                  <div className={ classes.imageContainer }>
                  <img  className={ classes.image } src={ href } />
                  </div>
                  <div className={ classes.container }>
                  <h3 className={ classes.title }>{ title }</h3>
                  <p className={ classes.subtitle }>{ subtitle }</p>
         
                  <p className={ classes.position }>
                     {position ? `${ position } Open position` : "No active positions"} 
                  </p>
         
                   <div className={ classes.employees }>
                     {employees.length ? (
                     <>
                        <>
                        {employees.slice(0,2).map(({href}) => {
                           return (
                              <div className="empl">
                                 <img
                                    src={href}
                                    alt=""
                                    style={{width: "20px", height: "20px", objectFit: "cover", borderRadius: "50%"}}
                                 />
                              </div>
                           );
                           })}
                           {employees.length > 2 && <span>+{employees.length - 2}</span>}
                     </>
                     Active employees
                     </>) : (
                     <>
                        <span> None employees</span>
                     </>)} 
                   </div>
                   <Button className={ button.shadow }>
                     <p className={ classes.text }>Browse Jobs</p>
                  </Button>
                  </div>
               </div>
            ))
         }
      </div>
   )       
};
