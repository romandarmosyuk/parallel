import React from "react";
import { Wrapper } from "../Wrapper";
import { Link } from "../Link";
import './index.css';
import { CatalogItems } from "../CatalogItem";

const mainNav = [
   {id: 1, title: "New Arrivals", href: "#"},
   {id: 2, title: "Final Stock", href: "#"},
   {id: 3, title: "Best Sellers", href: "#"},
   {id: 4, title: "Clothing", href: "#"},
   {id: 5, title: "Objects", href: "#"},
   {id: 6, title: "Face Masks", href: "#"},
]

const Main = function () {
   return (
      <Wrapper className="main"> 
         <div className="main__nav">
         {mainNav.map(({ id, title, href } ) => (
               <Link href= { href } className={'main__link'} key={ id }>
                  {title}
               </Link>   
               ))} 
         </div>
         <div className="catalog">
         <CatalogItems/>
         </div>

      </Wrapper>
      
   );
};

export default Main;