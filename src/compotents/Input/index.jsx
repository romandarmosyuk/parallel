import input from "./index.module.css";

export const Input = ({ className }) => {
   return <input type="text" name="myInput" className={`${ input.input } ${ className }`}/>
};
