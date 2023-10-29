import { Tag } from "../Tag"
import { Wrapper } from "../Wrapper"

import "./index.css"

export const Culture = () => {
   return (
      <div className="main__culture culture">
            <Wrapper className="main__wrapper">
                  <h3 className="culture__title">Find your culture</h3>
                  <div className="culture__container">
                     <Tag/>
                  </div>
            </Wrapper>
         </div>
   )
}
