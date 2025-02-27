import React, { useState } from "react";
import { useContext} from "react";
import context from "../utils/Usercontext"

const Section = ({ title, desc ,isvisi,setisvisi}) => {

 // const [isvisi, setisvisi]=useState(true);
  return (
    <>
      <div className=" border border-black ml-5 px-2 py-2">
        <h1 className="font-bold text-3xl ">{title}</h1>
        

        <button  className="bg-red-300 pt-2  rounded-md text-lg px-2"  onClick={()=>setisvisi(title)}>show more</button>
        <button  className="bg-red-300 pt-2  rounded-md text-lg px-2"  onClick={()=>setisvisi("")}>Hide</button>
        {isvisi===title && <h3 className="text-xl">{desc}</h3>}
      </div>
    </>
  );
};

const About = () => {
  const[isvisi, setisvisi]=useState("");
  const {user} = useContext(context)
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">instamart</h1>
      <h1 className="font-bold text-3xl p-2 m-2">thsi = {user.name}</h1>
      <Section
        title={"first section "}
        desc={
          "useContext is a React Hook that allows components to access shared data without passing props manually through every level It solves the problem of props drilling by providing a centralized way to share state using React. This makes the code cleaner, more efficient, and easier to maintain."
        }
        isvisi={isvisi}
        setisvisi={setisvisi}
        
      />

      <Section
        title={"second section "}
        desc={
          "useContext is a React Hook that allows components to access shared data without passing props manually through every level It solves the problem of props drilling by providing a centralized way to share state using React. This makes the code cleaner, more efficient, and easier to maintain."
        }
        isvisi={isvisi}
        setisvisi={setisvisi}
         
      />

      <Section
        title={"third section "}
        desc={
          "useContext is a React Hook that allows components to access shared data without passing props manually through every level It solves the problem of props drilling by providing a centralized way to share state using React. This makes the code cleaner, more efficient, and easier to maintain."
        }

        isvisi={isvisi}
        setisvisi={setisvisi}
      />
    </div>
  );
};

export default About;
