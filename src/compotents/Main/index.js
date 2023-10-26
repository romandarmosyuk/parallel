import React from "react";

import "./index.css";
import { Intro } from "../Intro";
import { Wrapper } from "../Wrapper";
import Input from "../Input"
import { Button } from "../Button";
import {Advantages} from "../Advantages";
import TrendingCard from "../TrendingCard";
import TopCompanies from "../TopCompanies";
import Culture from "../Culture";
import CollectionsCard from "../CollectionsCard";
import StartedList from "../StartedList";
import QuestionsList from "../QuestionsList";

const Main = () => {
   return (
      <div className="main">
         <Intro/>
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
            <Wrapper>
                  <h3 className="culture__title">Find your culture</h3>
                  <div className="culture__container">
                     <Culture/>
                  </div>
            </Wrapper>
         </div>
         <div className="main__collections collections">
            <Wrapper>
               <div className="collections__wrapper">
                  <h3 className="collections__title"> Browse Collections</h3>
                  <div className="trending__button">View all</div>
               </div>
               <div className="collections__catalog">
                     <CollectionsCard/>
               </div>
            </Wrapper>  
         </div>
         <div className="main__started started">
            <Wrapper>
               <h4 className="started__title">It’s simple to get started</h4>
               <div className="started__container">
                  <div className="started__list">
                     <StartedList/>
                  </div>
                  <div className="started__info">
                  </div>
               </div>
            </Wrapper>
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