import React, { useEffect, useState } from 'react'
//import { list } from '../constant';
import { BASE_URL } from '../constant';
import Shimmer from './Shimmer';
import { list } from 'postcss';

const Card = (props)=>
    {
      const {name,cuisines,avgRating,cloudinaryImageId}=props.list.card.card.info;
    //   if (!props.list?.card?.card?.info) {
    //     return <p>Loading...</p>;
    //   }
      return <>
     <div className="bg-slate-200 border-b-emerald-950 ml-2 mr-2 mb-4 h-80 w-64 gap-3  mt-8">
     <img className="h-52 w-64 rounded-2xl"  src={BASE_URL+cloudinaryImageId}></img>
        <h2 className="text-gray-950 bold text-lg">{name}</h2>
        {/* <h3>{cuisines.join(",")}</h3> */}
        <p className="w-40 break-words text-gray-500">{cuisines.join(", ")}</p>
        <h4>{avgRating}⭐</h4>
    
    
     </div>
    
    
      </>
    }

     function filter(search,list)
    {
        const data = list.filter((ele)=>
        { 
            return ele.card.card.info.name.toLowerCase().includes(search.toLowerCase());
            //console.log(ele.card.card.info.name);
        })
         return data;

    }
  

  

const Body = () => {

    const [search, setsearch]= useState("");
    const [newlist ,setnewlist]=useState([]);
    const [fillist , setfillist]= useState([]);
    const [loading, setloading]=useState(true);

    async function getdata()
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5211&lng=73.8502&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const newdata=json?.data?.cards?.flatMap((card) => card.card?.card?.info ? [card] : []);
      // console.log(newdata);
       setnewlist(newdata);
       setfillist(newdata);
       setloading(false);
    }

    useEffect(()=>
        {
            getdata();
        },[]);

       
       

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
    
    {/* <Card list={list[0]}/>
     <Card list={list[1]}/>
     <Card list={list[2]}/> */}
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