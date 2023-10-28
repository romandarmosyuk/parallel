import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { Advantages } from "../Advantages";

import "./index.css"

export const AboutProject = () => {
   return (
      <div className="main__hired hired">
         <Wrapper className="main__wrapper">
            <div className="hired__container">
               <h2 className="hired__title">Your new path to hired.</h2>
               <Button className="button-lime">
                  <p className="hired__button-text">Get started free</p>
               </Button>
            </div>
            <Advantages/>
         </Wrapper>    
      </div>
   )
}
