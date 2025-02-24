 import { useState,useEffect } from "react";
 const useBodyMenu = () =>
 {
        const [search, setsearch]= useState("");
          const [newlist ,setnewlist]=useState([]);
          const [fillist , setfillist]= useState([]);
          const [loading, setloading]=useState(true);
      
         
      
          async function getdata()
          {
              const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5211&lng=73.8502&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
              const json = await data.json();
              console.log(json);
              const newdata=json?.data?.cards?.flatMap((card) => card.card?.card?.info ? [card] : []);
             //console.log(newdata);
             setnewlist(newdata);
             setfillist(newdata);
             setloading(false);
          }
      
          useEffect(()=>
              {
                  getdata();
              },[]);

         return [newlist,setnewlist,fillist,setfillist,loading,setloading,search,setsearch];     
 }

 export default useBodyMenu;