import PropTypes from "prop-types";
import { useState } from "react";

const Cooks = ({cookItems,deletePreparingItems}) => {
    const [currentCooking,setCurrentCooking]=useState([]);
   console.log(cookItems)
    const handleCurrentCooking=(currentId)=>{
           
           setCurrentCooking([...currentCooking,currentId])
           
           
    }
    console.log(currentCooking)
    return (
        <div className="">
            {/* want to cook section**********************************
             */}
            <h1 className="text-2xl font-bold text-center my-4">Want Cook: {cookItems.length}</h1>
            <hr className="my-2" />
            <div className="mr-5">
            <table className="table-fixed ">
                <thead >
                    <tr className="">
                    <th className="px-4 py-4"></th>
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Time</th>
                    <th className="px-4 py-4">Calories</th>
                    <th className="px-4 py-4"></th>

                    </tr>
                </thead>
                <tbody>
                    
                       { 
                    //    display the item when click want to cook
                         cookItems.map((cookItem,idx)=>(
                            <tr key={idx} className="bg-gray-50  border-collapse ">
                                <td className="p-4">{idx+1}</td>
                                <td className="p-4">{cookItem.recipe_name}</td>
                                <td className="p-4">{cookItem.preparing_time}</td>
                                <td className="p-4">{cookItem.calories}</td>
                                <td className="p-4 ">
                                    <button  
                                     onClick={()=>{
                                        handleCurrentCooking(cookItem)
                                        // delete the item which set to preparing
                                        deletePreparingItems(cookItem.recipe_id)
                                     }}
                                    className="bg-emerald-400 px-4 py-2 rounded-lg text-[#150B2B]">Preparing</button>
                                </td>
                            </tr>
                         ))
                       }
                   
                    
                   
                </tbody>
                </table>

            </div>
        {/* currently cooking section */}
            <h1 className="text-2xl font-bold text-center my-4">Currently Cooking:{currentCooking.length} </h1>
            <hr />
            <div className="mr-5">
            <table className="table-fixed ">
                <thead >
                    <tr className="">
                    <th className="px-4 py-4"></th>
                    <th className="px-4 py-4">Name</th>
                    <th className="px-4 py-4">Time</th>
                    <th className="px-4 py-4">Calories</th>
                    

                    </tr>
                </thead>
                <tbody>
                      {/* loop the the item which are set to be preparing  */}
                       {
                         currentCooking.map((cooking,idx)=>(
                            <tr key={idx} className="bg-gray-50  border-collapse ">
                                <td className="p-4">{idx+1}</td>
                                <td className="p-4">{cooking.recipe_name}</td>
                                <td className="p-4">{cooking.preparing_time}</td>
                                <td className="p-4">{cooking.calories}</td>
                             
                            </tr>
                         ))
                       }
                   
                    
                   
                </tbody>
                </table>

            </div>
        </div>
    );
};

Cooks.propTypes={
    cookItems: PropTypes.array.isRequired,
    deletePreparingItems: PropTypes.func
}
export default Cooks;