import { Wrapper } from "../Wrapper";
import { Accordion } from "../Accordion";

import "./index.css"


export const Questions =() => {
   return (
      <div className="main__faq faq">
            <Wrapper className="accordion__wrapper">
               <h3 className="faq__title">FAQs</h3>
               <div className="faq__questions">
                  <Accordion/>
               </div>
            </Wrapper>

         </div>
   )
}
