import { Input } from "../Input";
import { Button } from "../Button";
import { contacts } from "./data.js";

import classes from "./index.module.css";
import button from '../Button/index.module.css';
import input from '../Input/index.module.css';

export const FooterSubscribe = () => {
   return (
      <div className={ classes.subscribe }>
         <span className={ classes.tm }>Hire Different ™</span>
          <div className={ classes.inputContainer }>
               <Input className={ input.footer }/>
               <Button className={ button.footer }>Join for free</Button>  
         </div>
               <div className={ classes.contacts }>
                  {contacts.map(({ src, id }) => (
                     <div className={ classes.logosContainer } key={ id }>
                        <img className={ classes.logo } src={ src } alt=""/>
                     </div>
                  ))}
               </div>
            </div>                   
   );
};


