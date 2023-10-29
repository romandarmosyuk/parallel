import React from "react";

import "./index.css";
import { Intro } from "../Intro";
import { Wrapper } from "../Wrapper";
import { Button } from "../Button";
import { TopCompanies } from "../TopCompanies";
import CollectionsCard from "../CollectionsCard";
import StartedList from "../StartedList";
import QuestionsList from "../Accordion";
import { AboutProject } from "../AboutProject";
import { TrendingJobs } from "../TrendingJobs";
import { Culture } from "../Culture";
import { Collections } from "../Collections";
import { Guide } from "../Guide";
import { Questions } from "../Questions";
import { Outro } from "../Outro";

const Main = () => {
   return (
      <div className="main">
         <Intro/>
         <AboutProject/>
         <TrendingJobs/>
         <TopCompanies/>
         <Culture/>
         <Collections/>
         <Guide/>
         <Questions/>
         <Outro/>
      </div>
   );
};

export default Main;