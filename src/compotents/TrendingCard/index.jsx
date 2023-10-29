import "./index.css";
import like from "./like.svg";
import { Button } from "../Button";

import { trendingItem } from "./mock.js";


export const TrendingCard = () => {
   return (
      <div className="trending__catalog">
         {trendingItem.map( ({href, title, subtitle, employees})  => (
            <div className="trending__card card">
                <div className="card__header">
                  <div className="card__logo">
                     <img  src={href} />
                  </div>
                  <div>
                     <img src={like}/>
                  </div>
                </div>
                <h3 className="card__title">{title}</h3>
                <p className="card__subtitle">{subtitle}</p>
                <div className="card__employees">
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
                <Button className="button-shadow">
                  <p className="button__text">Apply Direct</p>
               </Button>
            </div>
         ))}
      </div>
      
   )
}
