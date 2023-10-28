import React from "react";

import "./index.css";
import { Intro } from "../Intro";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import TopCompanies from "../TopCompanies";
import Culture from "../Culture";
import CollectionsCard from "../CollectionsCard";
import StartedList from "../StartedList";
import QuestionsList from "../QuestionsList";
import { AboutProject } from "../AboutProject";
import { TrendingJobs } from "../TrendingJobs";

const Main = () => {
   return (
      <div className="main">
         <Intro/>
         <AboutProject/>
         <TrendingJobs/>
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
                  <StartedList/>
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