import { Intro } from "../Intro";
import { TopCompanies } from "../TopCompanies";
import { AboutProject } from "../AboutProject";
import { TrendingJobs } from "../TrendingJobs";
import { Culture } from "../Culture";
import { Collections } from "../Collections";
import { Guide } from "../Guide";
import { Questions } from "../Questions";
import { Outro } from "../Outro";

import classes from "./index.module.css";

export const Main = () => {
   return (
      <section className={ classes.main }>
         <Intro/>
         <AboutProject/>
         <TrendingJobs/>
         <TopCompanies/>
         <Culture/>
         <Collections/>
         <Guide/>
         <Questions/>
         <Outro/>
      </section>
   );
};
