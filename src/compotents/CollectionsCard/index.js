import React from "react";

import "./index.css"

const CollectionsItem = [
   {href: "public/collections1.png", title: "Women Led", subtitle: "5 Companies · 1 Jobs"},
   {href: "public/collections2.png", title: "Wellness", subtitle: "3 Companies · 1 Jobs"},
   {href: "public/collections3.png", title: "Web 3", subtitle: "2 Companies · 5 Jobs"},
   {href: "public/collections4.png", title: "Music Tech", subtitle: "5 Companies · 1 Jobs"},
   {href: "public/collections5.png", title: "Marketplaces", subtitle: "2 Companies · 17 Jobs"},
   {href: "public/collections6.png", title: "Giving Back", subtitle: "5 Companies · 1 Jobs"}
]


const CollectionsCard = () => {
   return (
      <>
         {CollectionsItem.map( ({href, title, subtitle}) => (
            <div className="collections__card">
               <div className="collections__image">
                  <img src={ href }/>
               </div>
               <div className="collections__container">
                  <div className="collections__info">
                     <h4 className="collections__name">{ title }</h4>
                     <p className="collections__subtitle">{ subtitle }</p>
                  </div>
                  <div className="collections__subscribe"></div>
               </div>
            </div> 
         ))}
      </>
   );
};

export default CollectionsCard;