import React from "react";

import "./index.css";
import { Wrapper } from "../Wrapper";
import Input from "../Input"
import { Button } from "../Button";
import Advantages from "../Advantages";
import TrendingCard from "../TrendingCard";
import TopCompanies from "../TopCompanies";
import Culture from "../Culture";

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
         <div className="main__hired hired">
            <Wrapper>
            <div className="hired__container">
               <h2 className="hired__title">Your new path to hired.</h2>
               <Button className="button-lime">
                  <p className="hired__button-text">Get started free</p>
               </Button>
            </div>
            <div className="hired__advantages">
               <Advantages/>
            </div>
            </Wrapper>    
         </div>
         <div className="main__trending trending">
            <div className="trending__wrapper">
               <h3 className="trending__title"> Trending jobs</h3>
               <div className="trending__button">View all</div>
            </div>
            <div className="trending__catalog">
               <TrendingCard/>
            </div>
         </div>
         <div className="main__trending top">
            <div className="trending__wrapper">
               <h3 className="trending__title"> Top Companies</h3>
               <div className="trending__button">View all</div>
            </div>
            <div className="trending__catalog">
               <TopCompanies/>
            </div>
         </div>
         <div className="main__culture">
            <Culture/>
         </div>
      </div>
   );
};

export default Main;