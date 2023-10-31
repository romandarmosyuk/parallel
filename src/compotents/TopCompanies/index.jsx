import { Top } from "../Top";
import { Wrapper } from "../Wrapper";

import "./index.css"

export const TopCompanies = () => {
   return (
      <div className="main__trending trending">
         <Wrapper className="main__wrapper">
         <div className="trending__wrapper">
   <h3 className="trending__title"> Top Companies</h3>
   <button className="trending__button">
                     <span>View all</span>
                     <img src="str.svg"/>
                  </button>
</div>
   <Top/>   
         </Wrapper>

</div>
   )
}
