import { advantageItems as items} from "./mock";
import { AdvantagesCard } from "./Card";

import classes from "./index.module.css";

export const Advantages = () => {
   return (
      <div className={ classes.advantages } > 
         {items.map(( item ) => (
            <AdvantagesCard { ...item }/> 
         ))}
      </div>
   );   
};

         