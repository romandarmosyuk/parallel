import like from "./like.svg";
import { Button } from "../Button";
import { trendingItem } from "./mock.js";

import classes from "./index.module.css";
import button from '../Button/index.module.css';

export const TrendingCard = () => {
   return (
      <div className={ classes.catalog }>
         {trendingItem.map(({ href, title, subtitle, employees })  => (
            <div className={ classes.card }>
                <div className={ classes.header }>
                  <div className={ classes.logo }>
                     <img  src={ href } />
                  </div>
                  <div className={ classes.like }>
                     <img src={ like }/>
                  </div>
                </div>
                <h3 className={ classes.title }>{title}</h3>
                <p className={ classes.subtitle }>{subtitle}</p>
                <div className={ classes.employees}>
                  {employees.length ? (
                     <>
                        <>
                           {employees.slice(0,2).map(({href}) => {
                              return(
                                 <div className="empl_trending">
                                    <img
                                       src={href}
                                       alt=""
                                       style={{width:"20px", height:"20px", objectFit:"cover", borderRadius:"50%"}}
                                    />
                                 </div>
                              );
                           })}
                           {employees.length > 2 && <span>+{employees.length - 2}</span>}
                        </>
                        Active employees
                     </>) : (
                        <>
                           <span>None employees</span>
                        </>
                  )}
                 
                  </div>
                <Button className={ button.shadow }>
                  <p className={ classes.text }>Apply Direct</p>
               </Button>
            </div>
         ))}
      </div>
      
   )
}
