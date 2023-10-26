import { advantageItems as items} from "./mock";
import { AdvantagesCard } from "./Card";

import "./index.css";

export const Advantages = () => {
   return (
      <div className="hired__advantages" > 
         {items.map(( item ) => (
            <AdvantagesCard { ...item }/> 
         ))}
      </div>
   );   
};

         