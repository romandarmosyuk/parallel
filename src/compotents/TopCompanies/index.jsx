import { Top } from "../Top";
import { Wrapper } from "../Wrapper";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';

export const TopCompanies = () => {
   return (
      <div className={ classes.top }>
         <Wrapper className={ wrapper.main }>
            <div className={ classes.container }>
               <h3 className= { classes.title }> Top Companies</h3>
               <button className= { classes.button }>
                  <span>View all</span>
                  <img src="str.svg"/>
               </button>
            </div>
            <Top/>   
         </Wrapper>
      </div>
   );
};
