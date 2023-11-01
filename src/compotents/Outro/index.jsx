import { Button } from "../Button";

import classes from "./index.module.css";
import button from '../Button/index.module.css';

export const Outro = () => {
   return (
      <div className={ classes.outro }>
         <div className={ classes.container }>
            <div className={ classes.title }>Your one stop job shop.</div>
            <div className={ classes.subtitle }>Join to apply to 100’s of the best start up jobs.</div>
            <div className={ classes.box }>
               <Button className={ `${button.shadow} ${button.lime} ${button.outro}` }>Start for free</Button>
               <Button className={ `${button.shadow} ${button.outro}`}>Join as a company</Button>
            </div>
         </div>
      </div>
   );
};