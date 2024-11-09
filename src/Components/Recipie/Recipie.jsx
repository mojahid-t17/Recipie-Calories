
import PropTypes from 'prop-types';
import { AiOutlineFire } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
const Recipie = ({recipie,handleCooking}) => {
    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipie;
    return (
        <div >
           <div className='w-3/4 card mb-5 bg-slate-50 rounded p-4'>
           <h1>Recipie</h1>
           <div className=''><img className='w-full h-48 rounded-2xl object-cover'  src={recipe_image} alt="" /></div>
           <h2 className='text-xl font-bold my-2'>{recipe_name}</h2>
           <p className='text-[#878787] my-6'>{short_description}</p>
           <hr />
           <div>
            <h2 className='mt-4 font-bold'>Ingredients:{ingredients.length}</h2>
            <ul className='list-disc ml-5'>
                {
                   ingredients.map((ingredient,idx)=><li className='text-[#878787]' key={idx}>{ingredient}</li>)
                }
            </ul>
           </div>

           <div className='flex items-center space-x-3 my-4'>
             <div className='flex items-center'>
             <span><BsClock /></span><p className='ms-3'>{preparing_time} minutes</p>
             </div>
             <div className='flex items-center'>
             <span><AiOutlineFire /></span><p>{calories} calories</p>
             </div>
           </div>
           <button onClick={()=>{
            handleCooking(recipie,recipie.recipe_id) 
           }}  className='bg-emerald-400 px-4 py-2 rounded-lg text-[#150B2B] text-xl'>Want to Cook</button>
           </div>
          
        </div>
        
    );
};
Recipie.propTypes={
    recipie: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}
export default Recipie;