import "./index.css";


export const AdvantagesCard = ({ id, href, title, subtitle }) => {
   return (
      <div className="advantage__container" key={ id }>
         <div className="advantage__image" > 
            <img src={ href } alt=""/>
         </div>
         <h3 className="advantage__title">{ title }</h3>
         <p className="advantage__subtitle">{ subtitle }</p>
      </div>
   );
};