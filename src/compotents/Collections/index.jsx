import { Wrapper } from "../Wrapper";
import { CollectionsCard } from "../CollectionsCard";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';

export const Collections = () => {
   return (
      <div className={ classes.collections }>
            <Wrapper className={ wrapper.main }>
               <div className={ classes.container }>
                  <h3 className={ classes.title }> Browse Collections</h3>
                  <button className={ classes.button }>
                     <span>View all</span>
                     <img src="str.svg"/>
                  </button>
               </div>
                     <CollectionsCard/>
            </Wrapper>  
         </div>
   )
}

