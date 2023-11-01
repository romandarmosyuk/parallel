import { Tag } from "../Tag";
import { Wrapper } from "../Wrapper";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';

export const Culture = () => {
   return (
      <div className={ classes.culture }>
            <Wrapper className={ wrapper.main }>
                  <h3 className={ classes.title }>Find your culture</h3>
                  <Tag/>
            </Wrapper>
         </div>
   );
};
