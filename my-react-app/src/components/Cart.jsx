import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeitem} from "../redux/cartslice"
import { BASE_URL } from '../constant';
const Cart = () => {

   const cartitems = useSelector(state=>state.cart.items) 
   const dispatch = useDispatch()

  return (
    <div className="max-w-4xl mx-auto mt-5 p-5 bg-white shadow-lg rounded-lg">
       <h2 className="text-2xl font-bold border-b pb-3 ">Your Cart</h2>
       
       {
         cartitems.length===0 ?(
            <p className="text-center text-gray-500">Your cart is empty.</p>    
         ):(
            <div>
                <button 
                          onClick={() => dispatch(removeitem())}> REMOVE ALL ITEMS ❌
                       </button>
             {cartitems.map((ele)=>
                 <div key={ele.id} className="flex items-center justify-between border-b ">
                 <div> 
                     <div className='flex justify-end pt-3'>
                        <button 
                          onClick={() => dispatch(removeItem(item.id))}> ❌
                       </button>
                     </div>
                    <h1 className='text-xl font-medium text-center '>{ele.category}</h1>
                     <div className='flex mb-4'>
                        
                        <img className='h-24 w-24 rounded-md object-cover' src={BASE_URL+ele.imageId}/>
                        <div className='flex-col'>
                        <h3 className="text-lg ml-8 font-semibold">{ele.name}</h3>
                        <p className='ml-8'>{ele.description}</p>
                        </div>
                     </div>
                    
                 </div>
             </div>
            )}
            </div>
         )
       }
    </div>
    
  )
}

export default Cart