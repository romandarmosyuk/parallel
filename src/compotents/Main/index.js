import React from "react";

import "./index.css";
import { Wrapper } from "../Wrapper";
import Input from "../Input"
import { Button } from "../Button";

const Main = () => {
   return (
      <div className="main">
         <Wrapper>
         <div className="main__title">
            <h1 className="main__title-first">Land a job</h1>
            <h1 className="main__title-second">the easy way</h1>
         </div>
         <p className="main__subtitle">The best place to discover & apply to the coolest start up 
         jobs, without the black box.
         </p>
         <div className="main__input">
            <Input/>
            <Button className="button-lime">
               <div className="button__container">
                  <p className="button__text_">Explore</p>
                  <img href="./public/str.svg" />
               </div>
            </Button>
         </div>
         </Wrapper>
      </div>
   );
};

export default Main;