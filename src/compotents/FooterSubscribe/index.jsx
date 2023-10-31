import { Input } from "../Input";
import { Button } from "../Button";
import { contacts } from "./data";

import "./index.css"



export const FooterSubscribe = () => {
   return (
      <div className="footer__subscribe">
         <span className="footer__tm">Hire Different ™</span>
          <div className="footer__input">
               <Input className="input__footer"/>
               <Button className="button__footer">Join for free</Button>  
         </div>
               <div className="footer__contacts">
                  {contacts.map(({ src, id }) => (
                     <div className="footer__logos" key={ id }>
                        <img className="footer__logo" src={ src } alt=""/>
                     </div>
                  ))}
               </div>
            </div>                   
   )
}


