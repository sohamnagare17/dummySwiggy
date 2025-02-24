import React, { useEffect, useState } from 'react'
//import { list } from '../constant';
import { BASE_URL } from '../constant';
import Shimmer from './Shimmer';
//import { list } from 'postcss';
import { Link } from 'react-router-dom';
import { filter } from '../utils/helper';
import useisonline from '../utils/useisonline';
import Offline from './Offline'
import useBodyMenu from '../utils/useBodyMenu';
 
const Card = (props)=>
    {
      const {name,cuisines,avgRating,cloudinaryImageId,id}=props.list.card.card.info;
   return <>
        <div className="bg-slate-200 border-b-emerald-950 ml-2 mr-2 mb-4 h-80 w-64 gap-3  mt-8">
        <img className="h-52 w-64 rounded-2xl"  src={BASE_URL+cloudinaryImageId}></img>
            <h2 className="text-gray-950 bold text-lg"><Link to={`/menu/${id}`}>{name}</Link></h2>
            {/* <h3>{cuisines.join(",")}</h3> */}
            <p className="w-40 break-words text-gray-500">{cuisines.join(", ")}</p>
            <h4>{avgRating}⭐</h4>
        </div>
    </>
    }
const Body = () => {

  const [newlist,setnewlist,fillist,setfillist,loading,setloading,search,setsearch]=useBodyMenu();

  const isonline = useisonline(); 
       if(!isonline)
       {
          return <Offline/>
       }

    return (
        <>
     
          <div className='ml-5 mt-3'>
            <input type='text' placeholder='serach' value={search}
            onChange={(e)=>
            {
                setsearch(e.target.value);
            }
            }/>
            <button  className='border-blue-950 pt-2 pl-2 pr-2 pb-2 bg-lime-500 rounded-md' onClick={()=>
                {
                    const data= filter(search,newlist);
                    setfillist(data);
                }
            }>search</button>
          </div>

        {loading?(<Shimmer/>):<div>{fillist.length===0?(<h1 className=' text-bold text-xl text-slate-950 text-center'>NO MATCH FOUND HERE !</h1>):(<div className="  flex flex-wrap ml-4 mt-3 justify-center ">
  
     {
       fillist.map((list)=>
       { 
          return <Card list={list}/>
       })
       
     } 
    </div>)}</div>}
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