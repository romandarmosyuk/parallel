import { TrendingCard } from "../TrendingCard";
import { Wrapper } from "../Wrapper";

import "./index.css"

export const TrendingJobs = () => {
   return (
      <div className="main__trending trending">
         <Wrapper className="main__wrapper">
            <div className="trending__wrapper">
               <h3 className="trending__title"> Trending jobs</h3>
               <button className="trending__button">
                     <span>View all</span>
                     <img src="str.svg"/>
                  </button>
            </div>
            <div className="trending__catalog">
               <TrendingCard/>
            </div>
         </Wrapper>
      </div>
   );
};
