import "./index.css";

export const Wrapper = ( {children, className} )  => {
   return <div className={ `${className}` }> { children } </div>;
};