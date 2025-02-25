import React, { useEffect, useState } from 'react'
//import { list } from '../constant';
import { BASE_URL } from '../constant';
import Shimmer from './Shimmer';
import Card from './Card';
//import { list } from 'postcss';
import { Link } from 'react-router-dom';
import { filter } from '../utils/helper';
import useisonline from '../utils/useisonline';
import Offline from './Offline'
import useBodyMenu from '../utils/useBodyMenu';
 

const Body = () => {

  const [newlist,setnewlist,fillist,setfillist,loading,setloading,search,setsearch,getdata,loadmore]=useBodyMenu();

  const isonline = useisonline(); 
       if(!isonline)
       { 
          return <Offline/>
       }

    return (
        <>
     
          <div className='mx-auto my-4 mb-4 flex items-center bg-white justify-between shadow-md rounded-full px-4 py-2 w-full max-w-md border border-gray-300'>
            
            <input type='text' placeholder='Search for food or restaurants' className='w-full focus:outline-none text-gray-700 placeholder-gray-500' value={search}
            onChange={(e)=>
            {
                setsearch(e.target.value);
            }
            }/>
            <button  className='border-blue-950 pt-2 pl-2 pr-2 pb-2 bg-lime-500 rounded-lg ' onClick={()=>
                {
                    const data= filter(search,newlist);
                    setfillist(data);
                }
            }> 🔎</button>
          </div>

        {loading?(<Shimmer/>):<div>{fillist.length===0?(<h1 className=' text-bold text-xl text-slate-950 text-center'>NO MATCH FOUND HERE !</h1>):(<div className="  flex flex-wrap ml-4 mt-3 justify-center ">
  
     {
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
        {
             fillist.map((list)=>
                { 
                   return <Card list={list}/>
                })
        }
      </div>
       
     } 
     

    </div>)}</div>}

        <div className='flex justify-center'><button 
        onClick={loadmore} 
        disabled={loading}
        className="my-4 bg-purple-400 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
        {loading ? <Shimmer/> : "Load More"}
    </button></div>


        </>
      );
}

export default Body












// <div className="  flex flex-wrap ml-4 mt-3 justify-center ">
    
// {/* <Card list={list[0]}/>
//  <Card list={list[1]}/>
//  <Card list={list[2]}/> */}
//  {
//    fillist.map((list)=>
//    { 
//       return <Card list={list}/>
//    })
   
//  } 
// </div>