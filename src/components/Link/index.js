
export const Link = ({ children, className, href }) => {
   return (
      <a className= { `link ${className}` } href= { href }>
         { children }
      </a>
   );
};