import { Link } from '../Link';
import { Button } from "../Button";
import { Wrapper } from "../Wrapper";
import { navItems } from './data';

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';
import button from '../Button/index.module.css';
import link from '../Link/index.module.css';

export const Header = () => {
   return (
      <section className={ classes.header }>
         <Wrapper className={ wrapper.header }>
            <nav className={ classes.nav }>
               {navItems.map( ({ id, href, title }) => (
                  <Link href= { href } className= { link.nav }  key= { id }>
                     { title }
                  </Link>
               ))}
            </nav>
            <div className={ classes.signup }>
                  <Link href= "#" className={ link.signup }>
                     Sign In
                  </Link>
                  <Button className={`${button.header} ${button.shadow}`}>
                     Sign up Free
                  </Button>
            </div>
         </Wrapper>
      </section>
   );
};