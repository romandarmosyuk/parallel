import { Button } from "../Button";
import "./index.css"

export const Outro = () => {
   return (
      <div className="outro">
         <div className="outro__container">
            <div className="outro__title">Your one stop job shop.</div>
            <div className="outro__subtitle">Join to apply to 100’s of the best start up jobs.</div>
            <div className="outro__box">
               <Button className="button-shadow button-lime button__outro">Start for free</Button>
               <Button className="button-shadow button__outro">Join as a company</Button>
            </div>
         </div>
      </div>
   );
};