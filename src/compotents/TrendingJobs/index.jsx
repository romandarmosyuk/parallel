import { TrendingCard } from "../TrendingCard";
import { Wrapper } from "../Wrapper";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';

export const TrendingJobs = () => {
   return (
      <div className={ classes.jobs }>
         <Wrapper className={ wrapper.main }>
            <div className={ classes.container }>
               <h3 className={ classes.title }> Trending jobs</h3>
               <button className={ classes.button }>
                     <span>View all</span>
                     <img src="str.svg"/>
                  </button>
            </div>
            <TrendingCard/>
         </Wrapper>
      </div>
   );
};
