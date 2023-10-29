

import "./index.css"

import { Button } from "../Button";

const topItem = [
   {
      id: 1, 
      href: "bg1.png", 
      title: "Webflow", 
      subtitle: "Manufacturing · San Francisco, CA", 
      position: 2, 
      employees: [
         { id: 1, href: "bg1.png" },
         { id: 2, href: "bg1.png" },
         { id: 3, href: "bg1.png" },
         { id: 4, href: "bg1.png" },
         { id: 5, href: "bg1.png" },
      ]
   },
   {
      id: 2, 
      href: "bg2.png", 
      title: "Patreon", 
      subtitle: "Manufacturing · San Francisco, CA", 
      position: 13, 
      employees: [
         { id: 1, href: "bg1.png" },
         { id: 2, href: "bg1.png" },
         { id: 3, href: "bg1.png" },
         { id: 4, href: "bg1.png" },
         { id: 5, href: "bg1.png" },
      ]
   },
   {
      id: 3, 
      href: "bg3.png", 
      title: "Faire", 
      subtitle: "Manufacturing · San Francisco, CA", 
      position: 15, 
      employees: [
         { id: 1, href: "bg1.png" },
         { id: 2, href: "bg1.png" },
         { id: 3, href: "bg1.png" },
         { id: 4, href: "bg1.png" },
         { id: 5, href: "bg1.png" },
      ]
   },
   {
      id: 4, 
      href: "bg4.png", 
      title: "Breef", 
      subtitle: "Manufacturing · New York, NY", 
      position: 0, 
      employees: [
         // { id: 1, href: "bg1.png" },
         // { id: 2, href: "bg1.png" },
         // { id: 3, href: "bg1.png" },
         // { id: 4, href: "bg1.png" },
         // { id: 5, href: "bg1.png" },
      ]
   }
]



export const Top = () => {
   return (
      <div className="trending__catalog">
         {
            topItem.map( ({href, title, subtitle, position, employees})  => (
               <div className="top__card top">
                  <div className="top__image">
                  <img  className="top__img" src={href} />
                  </div>
                  <div className="top__container">
                  <h3 className="top__title">{title}</h3>
                  <p className="top__subtitle">{subtitle}</p>
         
                  <p className="top__position">
                     {position ? `${ position } Open position` : "No active positions"} 
                  </p>
         
                   <div className="top__employees">
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
         
                   <Button className="button-shadow">
                     <p className="button__text">Browse Jobs</p>
                  </Button>
                  </div>
                  
               </div>
            ))
         }

      </div>
   )
         
}
