import { Wrapper } from "../Wrapper";
import { GuideList } from "../GuideList";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';

export const Guide = () => {
   return (
      <div className={ classes.guide }>
            <Wrapper className={ wrapper.main }>
               <h4 className={ classes.title }>It’s simple to get started</h4>
               <GuideList/>
            </Wrapper>
         </div>
   );
};
