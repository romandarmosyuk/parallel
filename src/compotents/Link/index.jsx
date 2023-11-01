import link from '../Link/index.module.css';

export const Link = ({ children, className, href }) => {
   return (
      <a className= { `${className} ${link.link}` } href= { href }>
         { children }
      </a>
   );
};