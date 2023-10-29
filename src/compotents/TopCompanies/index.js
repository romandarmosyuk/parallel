import { Top } from "../Top";
import { Wrapper } from "../Wrapper";

import "./index.css"

export const TopCompanies = () => {
   return (
      <div className="main__trending trending">
         <Wrapper className="main__wrapper">
         <div className="trending__wrapper">
   <h3 className="trending__title"> Top Companies</h3>
   <div className="trending__button">View all</div>
</div>
   <Top/>   
         </Wrapper>

</div>
   )
}
