 import { useState,useEffect } from "react";

const useisonline = ()=>
{
   const [ isonline,setonline]=useState(navigator.onLine);

   useEffect(()=>
{
     window.addEventListener("online",()=> setonline(true));
     window.addEventListener("offline",()=> setonline(false));

      return ()=>
      {
         window.removeEventListener("online",setonline);
         window.removeEventListener("offline",setonline);
      }
},[])
return isonline;

}
 export  default useisonline