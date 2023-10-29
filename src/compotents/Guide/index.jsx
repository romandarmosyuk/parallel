import { Wrapper } from "../Wrapper";
import { StartedList } from "../StartedList";

import "./index.css"

export const Guide = () => {
   return (
      <div className="main__started started">
            <Wrapper className="main__wrapper">
               <h4 className="started__title">It’s simple to get started</h4>
               <div className="started__container">
                  <StartedList/>
               </div>
            </Wrapper>
         </div>
   )
}
