import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constant';
import Shimmer from './Shimmer';
import usemenu from '../utils/usemenu';
import  {additem} from '../redux/cartslice'
import { useDispatch } from 'react-redux';
const Menu = () => {
    const para = useParams();
    const {id}=para;

    const{res,oldres} =usemenu(id);

    const dispatch = useDispatch();

    const addfooditem = (ele) =>
    {
       dispatch(additem(ele))
    }


  return res?.length==0? <Shimmer/>: (
    <>
      
       <h1>id:{id}</h1>
        <h1 className="text-center text-2xl font-bold text-slate-950 cursor-pointer hover:text-red-500 transition duration-300"
               >
                {oldres.name} 🍽️
            </h1>
       <img className="h-72 w-72 m-auto rounded-lg shadow-md" 
                 src={BASE_URL + oldres.cloudinaryImageId} 
                 alt="Restaurant" />

                  <div className="mt-4">
                    <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">MENU</h2>
                    
                    <div className="grid grid-cols-1 gap-4">
                        {res.map((ele, index) => (
                            <div key={index} className="bg-white  p-4 rounded-lg shadow-md hover:shadow-lg transition">
                                <div className='flex justify-evenly'>
                                <img 
                                    className="h-36 w-36 object-cover rounded-md" 
                                    src={BASE_URL + ele?.card?.info?.imageId} 
                                    alt={`Dish ${index}`} />
                                <h3 className="text-lg font-medium text-gray-900">{ele?.card?.info?.name}</h3>
                                <h4 className="text-lg font-medium text-gray-500">{ele?.card?.info?.description}</h4>
                                </div>
                                <div>
                              <button className='m-2 p-2 bg-orange-400 rounded-md' onClick={()=>addfooditem(ele?.card?.info)}>Add to Cart</button>
                                </div>
                                
                           </div>   
                           
                        ))}
                    </div>
                </div>
       
    </>
  )
}

export default Menu
