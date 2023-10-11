import React from "react";

import "./index.css"

import { Button } from "../Button";

const topItem = [
   {id: "1", href: "public/bg1.png", title: "Webflow", subtitle: "Manufacturing · San Francisco, CA", position: "2 Open Positions", employees: "Active Employees"},
   {id: "2", href: "ppublic/bg2.png", title: "Patreon", subtitle: "Manufacturing · San Francisco, CA", position: "13 Open Positions", employees: "Active Employees"},
   {id: "3", href: "public/bg3.png", title: "Faire", subtitle: "Manufacturing · San Francisco, CA", position: "15 Open Positions", employees: "Active Employees"},
   {id: "4", href: "public/bg4.png", title: "Breef", subtitle: "Manufacturing · New York, NY", position: "10 Open Positions", employees: "Active Employees"}
]



const TopCompanies = () => {
   return (
      <>
         {topItem.map( ({href, title, subtitle, position, employees})  => (
            <div className="top__card top">
                <div className="top__image">
                  <img  src={href} />
                </div>
                <h3 className="top__title">{title}</h3>
                <p className="top__subtitle">{subtitle}</p>
                <p className="top__position">{position}</p>
                <p className="top__employees">{employees}</p>
                <Button className="button-shadow">
                  <p className="button__text">Browse Jobs</p>
               </Button>
            </div>
         ))}
      </>
   )
}

export default TopCompanies;