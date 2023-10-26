import { Link } from '../Link';
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";

import "./index.css";


const navItem = [
   { id: 1, href: "#", title: "Find Jobs"},
   { id: 2, href: "#", title: "For Companies"},
];


export const Header = () => {
   return (
      <div className="header">
         <Wrapper className="header__wrapper">
            <nav className="nav">
               {navItem.map( ({ id, href, title }) => (
                  <Link href= { href } className= "nav__link"  key= { id }>
                     { title }
                  </Link>
               ))}
            </nav>
            <div className="header__signup">
                  <Link href= "#" className= "signup__link">
                     Sign In
                  </Link>
                  <Button className="header__button button-shadow">
                     Sign up Free
                  </Button>
            </div>
         </Wrapper>
      </div>
   );
};