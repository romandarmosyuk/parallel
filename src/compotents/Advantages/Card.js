import classes from "./index.module.css";

export const AdvantagesCard = ({ id, href, title, subtitle }) => {
   return (
      <div className={ classes.container } key={ id }>
         <div className={ classes.image } > 
            <img src={ href } alt=""/>
         </div>
         <h3 className={ classes.title }>{ title }</h3>
         <p className={ classes.subtitle }>{ subtitle }</p>
      </div>
   );
};