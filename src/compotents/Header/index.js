import React from "react";

import { Link } from '../Link';
import { Button } from "../Button";

import "./index.css";



const navItem = [
   { id: "1", href: "#", title: "Find Jobs"},
   { id: "2", href: "#", title: "For Companies"},
];


const Header = () => {
   return (
      <div className="header">
         <nav className="nav">
            {navItem.map( ({ id, href, title }) => (
               <Link href= { href } className={ "nav__link" } key= { id }>
                  { title }
               </Link>
             ) )}
         </nav>
         <div className="header__signup signup">
               <Link href= "#" className= "signup__link">
               Sign In
               </Link>
               <Button className="button-shadow">
                  <p className="button__text">Sign up Free</p>
               </Button>
         </div>
      </div>
   );
};

export default Header;