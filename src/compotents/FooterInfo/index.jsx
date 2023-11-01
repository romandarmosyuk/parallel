import { Link } from "../Link/index.jsx";
import { footerItems as items } from "./data.js";

import classes from "./index.module.css";
import link from '../Link/index.module.css';

export const FooterInfo = () => {
   return (
      <div className={ classes.info }>
         {items.map(( item ) => (
            <div className={ classes.list } key={ item.id }>
               <span className={ classes.title }>{ item.title }</span>
               <Link className={ link.footer }>{ item.link1 }</Link>
               <Link className={ link.footer }>{ item.link2 }</Link>
               <Link className={ link.footer }>{ item.link3 }</Link>
            </div>
         ))}
      </div>
   );
};