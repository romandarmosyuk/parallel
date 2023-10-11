import React from "react";

import "./index.css";
import like from "./like.svg";
import { Button } from "../Button";

const trendingItem = [
   {id: "1", href: "public/company1.png", title: "Product Manager (Operations)", subtitle: "Breef · New York or Remote", employees: "Active Employees"},
   {id: "2", href: "public/company2.png", title: "Senior Site Reliability Engineer", subtitle: "Faire · Brazil", employees: "Active Employees"},
   {id: "3", href: "public/company3.png", title: "Event Worker", subtitle: "Ghia · Los Angeles / New York City", employees: "Active Employees"},
   {id: "4", href: "public/company4.png", title: "Talent Acquisition/Recruiting", subtitle: "Mr. Beast · Greenville NC", employees: "Active Employees"}
]


const TrendingCard = () => {
   return (
      <>
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
                <p className="card__employees">{employees}</p>
                <Button className="button-shadow">
                  <p className="button__text">Apply Direct</p>
               </Button>
            </div>
         ))}
      </>
      
   )
}

export default TrendingCard