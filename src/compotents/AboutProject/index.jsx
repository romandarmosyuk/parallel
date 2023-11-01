import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { Advantages } from "../Advantages";

import classes from "./index.module.css";
import button from '../Button/index.module.css';
import wrapper from '../Wrapper/index.module.css';

export const AboutProject = () => {
   return (
      <div className={ classes.about }>
         <Wrapper className={ wrapper.about }>
            <div className={ classes.container }>
               <h2 className={ classes.title }>Your new path to hired.</h2>
               <Button className={ button.lime }>
                  <p className={ classes.text }>Get started free</p>
               </Button>
            </div>
            <Advantages/>
         </Wrapper>    
      </div>
   )
}
