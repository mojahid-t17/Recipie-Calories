
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import './App.css';
import Banner from './Components/Banner/Banner';
import Cooks from './Components/Cooks/Cooks';
import Header from './Components/Header';
import Recipies from './Components/Recipies/Recipies';

function App() {
  const [cookItems,setCookitems]=useState([]);
  const notify = () => toast.error('The Recipie is Already Exist.');
  const handleCooking=(recipe,id)=>{
    
      const matchingItem=cookItems.find(filtered=>filtered.recipe_id===id);
      console.log(matchingItem)
      if(!matchingItem){
        setCookitems([...cookItems,recipe])
      }
      else{
      
         notify()
         
     
           
      }
      
  }
  const deletePreparingItems=(id)=>{
    const RemaingIems=cookItems.filter(newItem=>newItem.recipe_id!==id);
    setCookitems(RemaingIems);
  }
  
  return (
     <div className='max-w-screen-2xl 2xl:mx-auto mx-5'>


      
     
      <Header className="mx-auto"></Header>
      <Banner></Banner>
      <div className="max-w-screen-lg md:mx-auto mx-3 my-5">
            <h2 className="text-[#150B2B] font-bold text-4xl text-center">Our Recipies</h2>
            <p className="text-[#150B2B99] text-base text-center mt-4">
            Our Recipes section offers a diverse collection of delicious dishes, each with easy-to-follow instructions and vibrant images. From hearty meals to light snacks, find the perfect recipe with detailed ingredients, preparation time, and calorie information to suit every taste and occasion.</p>
           </div>
       <div className='flex md:flex-row flex-col-reverse'>
       <Recipies handleCooking={handleCooking}
       
       ></Recipies>
       <Cooks cookItems={cookItems} deletePreparingItems={deletePreparingItems}></Cooks>
       <Toaster position="top-right"
  reverseOrder={false}/>


     
       </div>
     
    </div>
  )
}

export default App
