import { Wrapper } from "../Wrapper";
import { Input } from "../Input";
import { Button } from "../Button";

import "./index.css"

export const Intro = () => {
   return (
      <Wrapper className="intro__wrapper">
         <div className="intro__title">
            <h1 className="intro__title-first">Land a job</h1>
            <h1 className="intro__title-second">the easy way</h1>
         </div>
         <p className="intro__subtitle">The best place to discover & apply to the coolest start up 
         jobs, without the black box.
         </p>
         <div className="intro__input">
            <Input/>
            <Button className="button-lime">
               <div className="button__container">
                  <p className="button__text_">Explore</p>
                  <img href="./public/str.svg" />
               </div>
            </Button>
         </div>
         </Wrapper>
   );
};