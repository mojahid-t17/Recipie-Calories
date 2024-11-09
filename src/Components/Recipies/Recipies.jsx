import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Recipie from "../Recipie/Recipie";

const Recipies = ({handleCooking}) => {
    const [recipies,setRecipies]=useState([]);
    useEffect(()=>{
        fetch('recipies.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data.recipes))
      
    },[])
   
    return (
        <div className="md:w-3/4 ">
           
          <div className="grid md:grid-cols-2 grid-cols-1">
          {
            recipies.map(recipie=><Recipie 
              recipie={recipie}
               key={recipie.recipe_id}
              
               handleCooking={handleCooking}
               ></Recipie>)
           }
          </div>
          
          <div>
          
          </div>

        </div>

        
    );
};

Recipies.propTypes={
  handleCooking: PropTypes.func,
  
}
export default Recipies;