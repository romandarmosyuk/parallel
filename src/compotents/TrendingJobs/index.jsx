import { TrendingCard } from "../TrendingCard";

import "./index.css"

export const TrendingJobs = () => {
   return (
      <div className="main__trending trending">
            <div className="trending__wrapper">
               <h3 className="trending__title"> Trending jobs</h3>
               <div className="trending__button">View all</div>
            </div>
            <div className="trending__catalog">
               <TrendingCard/>
            </div>
      </div>
   );
};
