import { FooterInfo } from "../FooterInfo";
import { FooterSubscribe } from "../FooterSubscribe";
import { Wrapper } from "../Wrapper";
import { Link } from "../Link";

import classes from "./index.module.css";
import wrapper from '../Wrapper/index.module.css';
import link from '../Link/index.module.css';

export const Footer = () => {
   return (
      <section className={ classes.footer }>
         <Wrapper className={ wrapper.footer }>
            <div className={ classes.container }>
               <FooterSubscribe/> 
               <FooterInfo/> 
            </div>
            <div 
               className={ classes.image } 
               style={{backgroundImage: `url('paraller.png')`}}> 
            </div>
            <div className={ classes.copyright }>
               <p className={ classes.text }>2021 Parallel Group. All Rights Reserved,</p>
               <Link className={ link.copyright }>Terms of Service</Link>
               <Link className={ link.copyright }>Privacy Policy</Link>
            </div>
         </Wrapper>
      </section>
      
   )
}