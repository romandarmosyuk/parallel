import { Wrapper } from "../Wrapper";
import { CollectionsCard } from "../CollectionsCard";

import "./index.css"

export const Collections = () => {
   return (
      <div className="main__collections collections">
            <Wrapper className="main__wrapper">
               <div className="collections__wrapper">
                  <h3 className="collections__title"> Browse Collections</h3>
                  <button className="trending__button">
                     <span>View all</span>
                     <img src="str.svg"/>
                  </button>
               </div>
                     <CollectionsCard/>
            </Wrapper>  
         </div>
   )
}

