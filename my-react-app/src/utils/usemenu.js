import { useState,useEffect } from "react";
 const usemenu = (id) =>
{
     const [res,setres]=useState([]);
     const [oldres, setoldres]=useState([]);


      useEffect(()=>
   {
      getdata();
   },[])
   
    async function getdata()
    {
       const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=${id}&catalog_qa=undefined&query=Burger&submitAction=ENTER"`);
       const json =  await data.json();
       
      // console.log(json);
       //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
       const newdata=json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards
        const olddata =json.data.cards[2].card.card.info;
       // console.log(newdata);
      
      // console.log(olddata);
       setres(newdata);
       setoldres(olddata);
   
    }
    return {res,oldres};
}
 export default usemenu;