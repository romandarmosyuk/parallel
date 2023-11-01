import button from "./index.module.css";

export const Button = ({ children, className }) => {
   return (
      <button className= { `${button.button} ${className}` }>
         { children }
      </button>
   );
};