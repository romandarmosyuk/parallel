import React from "react";
import './index.css'
import { Link } from '../Link'

const logoItem = [
   {id: 1, src: "U.svg"},
   {id: 2, src: "G.svg"},
   {id: 3, src: "M.svg"},
   {id: 4, src: "O.svg"},
   {id: 5, src: "N.svg"},
   {id: 6, src: "K.svg"},
];

const navItem = [
   {id: 1, title: "Men", href: "#"},
   {id: 2, title: "Women", href: "#"},
   {id: 3, title: "Objects", href: "#"},
   {id: 4, title: "Analog", href: "#"},
   // {id: 5, title: "Journal", href: "#"},
   // {id: 6, title: "Search", href: "#"},
   // {id: 7, title: "Login", href: "#"},
];

const navItemAnother = navItem.filter(item => item.id > 4);


const Header = function () {
   return (
      <header className="header">
         <div className="header__wrapper">
            <div className="logo header__logo">
               {logoItem.map(({ src, id }) => (
                  <img src={ src } className="logo__item" key={ id } />
               ))}
            </div>

            <nav className="nav header__nav">
               <div className="nav__item">
               {navItem.map(({ id, title, href } ) => (
               <Link href= { href } className={'nav__link'} key={ id }>
                  {title}
               </Link>   
               ))} 
               </div>
               <div className="nav__another">
                  <div className="nav__container">
                  {navItemAnother.map(({ id, title, href } ) => (
               <Link href= { href } className={'nav__link'} key={ id }>
                  {title}
               </Link>   
               ))} 
                  </div>
                  {/* <Link href="#" className={"nav__link_another"}>
                     {"Journal"}
                  </Link>
                  <img src="line.svg"/>
                  <Link href="#" className={"nav__link_another"}>
                     {"Search"}
                  </Link> */}
               </div>
            </nav>
            
         </div>
            

      </header>
   );
};

export default Header;