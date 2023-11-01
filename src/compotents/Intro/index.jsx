import { Wrapper } from "../Wrapper";
import { Input } from "../Input";
import { Button } from "../Button";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';
import button from '../Button/index.module.css';
import input from '../Input/index.module.css';

export const Intro = () => {
   return (
      <Wrapper className={ wrapper.intro }>
         <div className={ classes.title }>
            <h1 className={ classes.titleFirst }>Land a job</h1>
            <h1 className={ classes.titleSecond }>the easy way</h1>
         </div>
         <p className={ classes.subtitle }>
            The best place to discover & apply to the coolest start up 
            jobs, without the black box.
         </p>
         <div className={ classes.input }>
            <Input className={ input.intro }/>
            <Button className={ button.lime }>
               <div className={ classes.container }>
                  <p className={ classes.text }>Explore</p>
                  <img src="str.svg" />
               </div>
            </Button>
         </div>
         </Wrapper>
   );
};