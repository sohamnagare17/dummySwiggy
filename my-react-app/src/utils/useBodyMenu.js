 import { useState,useEffect } from "react";
 const useBodyMenu = () =>
 {
         const [search, setsearch]= useState("");
          const [newlist ,setnewlist]=useState([]);
          const [fillist , setfillist]= useState([]);
          const [loading, setloading]=useState(true);
          const [offset, setOffset] = useState(0);
         
      
          async function getdata()
          {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6374444&lng=73.7617595&collection=80479&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
           // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6374444&lng=73.7617595&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
              const json = await data.json();
              console.log(json);
              const newdata=json?.data?.cards?.flatMap((card) => card.card?.card?.info ? [card] : []);
             //console.log(newdata);

             setnewlist((prevList) => [...prevList, ...newdata]); // Append new data
             setfillist((prevList) => [...prevList, ...newdata]); // Update filtered list
             setloading(false);
          }
      
          useEffect(()=>
              {
                  getdata();
              },[offset]);

              const loadMore = () => {
                setOffset((prevOffset) => prevOffset + 8); // Increase offset to fetch more items
            };

         return [newlist,setnewlist,fillist,setfillist,loading,setloading,search,setsearch,getdata,loadMore];     
 }

 export default useBodyMenu;