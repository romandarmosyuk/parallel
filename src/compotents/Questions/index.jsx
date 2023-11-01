import { Wrapper } from "../Wrapper";
import { Accordion } from "../Accordion";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';


export const Questions =() => {
   return (
      <div className={ classes.faq }>
            <Wrapper className={ wrapper.accordion }>
               <h3 className={ classes.title }>FAQs</h3>
               <div className={ classes.questions }>
                  <Accordion/>
               </div>
            </Wrapper>

         </div>
   )
}
