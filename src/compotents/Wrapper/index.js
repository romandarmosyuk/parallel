import "./index.css"

export const Wrapper = ( {children, className} )  => {
   return <div className={ `wrapper ${className}` }> { children } </div>;
};