import "./index.css"

export const MainWrapper = ( {children, className} )  => {
   return <div className={ `main__wrapper ${className}` }> { children } </div>;
};