import React from "react";
import './index.css'

const cardItems = [
   {id: 1, src: "card-1.svg", title: "Preorder - Analog Starter Kit", subtitle: "(Grey)", price: "$79.00"},
   {id: 1, src: "card-1.svg", title: "Preorder - Analog Starter Kit", subtitle: "(Grey)", price: "$79.00"},
]

export const CatalogItems = function () {
   return (
      <div className="card">
         {cardItems.map(({id, src, title, subtitle, price}) => (
            <>
             <div className="card__image" key={id}>
               <img src={ src }/>
             </div>
            <div className="card__text">
               <div className="text__container">
                  <p className="card__title">{ title }</p>
                  <p className="card__subtitle">{ subtitle }</p>
               </div>
               <span>{ price }</span>
            </div>
            </>
           
         ))}
         
      </div>  
   )
};