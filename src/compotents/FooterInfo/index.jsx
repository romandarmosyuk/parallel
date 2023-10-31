import { Link } from "../Link/index.js"
import { footerItems as items } from "./data.js"

import "./index.css"

export const FooterInfo = () => {
   return (
      <div className="footer__info">
         {items.map((item) => (
            <div className="footer__list" key={ item.id }>
               <span className="footer__list-title">{ item.title }</span>
               <Link className='footer__link'>{ item.link1 }</Link>
               <Link className='footer__link'>{ item.link2 }</Link>
               <Link className='footer__link'>{ item.link3 }</Link>
            </div>
         ))}
      </div>
   )
}