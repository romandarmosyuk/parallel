import React from "react";

import "./index.css";


const advantageItem = [
   {id: "1", href: "../../advantage_1.png", title: "Apply to humans", subtitle: "72% of applications are never seen by a human! With parallel you skip the line and go direct to the hiring team."},
   {id: "2", href: "../../img2.png", title: "Instantly stand out", subtitle: "Showcase your projects, passions and work ethos with Parallel Profile to stand out from the crowd."},
   {id: "3", href: "../../img3.png", title: "Real time feedback", subtitle: "Don't get ghosted! Get feedback & notifications with every application, so that you’re never left wondering."}
];

const Advantages = () => {
   return (
      <>
      {advantageItem.map( ({id, href, title, subtitle}) => (
            <div className="advantage__container">
               <div className="advantage__image" > 
                  <img key={id} src={href} />
               </div>
               <h3 key={id}  className="advantage__title">{title}</h3>
               <p key={id}  className="advantage__subtitle">{subtitle}</p>
            </div>
         ))}
      </> 
   );
};

export default Advantages;