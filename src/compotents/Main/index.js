import React from "react";

import "./index.css";
import { Wrapper } from "../Wrapper";
import { MainWrapper } from "../MainWrapper";
import Input from "../Input"
import { Button } from "../Button";
import Advantages from "../Advantages";
import TrendingCard from "../TrendingCard";
import TopCompanies from "../TopCompanies";
import Culture from "../Culture";
import CollectionsCard from "../CollectionsCard";
import StartedList from "../StartedList";
import QuestionsList from "../QuestionsList";

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
         <div className="main__trending trending">
            <div className="trending__wrapper">
               <h3 className="trending__title"> Top Companies</h3>
               <div className="trending__button">View all</div>
            </div>
            <div className="trending__catalog">
               <TopCompanies/>
            </div>
         </div>
         <div className="main__culture culture">
            <MainWrapper>
                  <h3 className="culture__title">Find your culture</h3>
                  <div className="culture__container">
                     <Culture/>
                  </div>
            </MainWrapper>
         </div>
         <div className="main__collections collections">
            <MainWrapper>
               <div className="collections__wrapper">
                  <h3 className="collections__title"> Browse Collections</h3>
                  <div className="trending__button">View all</div>
               </div>
               <div className="collections__catalog">
                     <CollectionsCard/>
               </div>
            </MainWrapper>  
         </div>
         <div className="main__started started">
            <MainWrapper>
               <h4 className="started__title">It’s simple to get started</h4>
               <div className="started__container">
                  <div className="started__list">
                     <StartedList/>
                  </div>
                  <div className="started__info">
                  </div>
               </div>
            </MainWrapper>
         </div>
         <div className="main__faq faq">
            <Wrapper>
               <h3 className="faq__title">FAQs</h3>
               <div className="faq__questions">
                  <QuestionsList/>
               </div>
            </Wrapper>

         </div>
      </div>
   );
};

export default Main;