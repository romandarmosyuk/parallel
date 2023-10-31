

import "./index.css"

const CollectionsItem = [
   {href: "collections1.png", title: "Women Led", subtitle: "5 Companies · 1 Jobs"},
   {href: "collections2.png", title: "Wellness", subtitle: "3 Companies · 1 Jobs"},
   {href: "collections3.png", title: "Web 3", subtitle: "2 Companies · 5 Jobs"},
   {href: "collections4.png", title: "Music Tech", subtitle: "5 Companies · 1 Jobs"},
   {href: "collections5.png", title: "Marketplaces", subtitle: "2 Companies · 17 Jobs"},
   {href: "collections6.png", title: "Giving Back", subtitle: "5 Companies · 1 Jobs"}
]


export const CollectionsCard = () => {
   return (
      <div className="collections__catalog">
         {CollectionsItem.map( ({href, title, subtitle}) => (
            <div className="collections__card">
               <div className="collections__image">
                  <img src={ href }/>
               </div>
               <div className="collections__container">
                  <div className="collections__info">
                     <h4 className="collections__name">{ title }</h4>
                     <p className="collections__subtitle">{ subtitle }</p>
                  </div>
                  <div className="collections__subscribe">
                     <img src="pls.svg"/>
                  </div>
               </div>
            </div> 
         ))}
      </div>
   );
};
