import { FooterInfo } from "../FooterInfo";
import { FooterSubscribe } from "../FooterSubscribe";
import { Wrapper } from "../Wrapper";
import { Link } from "../Link";

import "./index.css"

export const Footer = () => {
   return (
      <section className="footer">
         <Wrapper className="footer__wrapper">
            <div className="footer__container">
               <FooterSubscribe/> 
               <FooterInfo/> 
            </div>
            <div 
               className="footer__image" 
               style={{backgroundImage: `url('paraller.png')`}}> 
            </div>
            <div className="footer__copyright">
               <p>2021 Parallel Group. All Rights Reserved,</p>
               <Link className='copyright__link'>Terms of Service</Link>
               <Link className='copyright__link'>Privacy Policy</Link>
            </div>
         </Wrapper>
      </section>
      
   )
}