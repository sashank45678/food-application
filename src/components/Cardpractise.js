import React from "react";
import { useState } from "react";
import ControlledCard from "./ControlledCard";
const Cardpractise = () => {
  const [cardname, setcardname] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [carddate, setcarddate] = useState("");
  const cnf=(number)=>{
    setcardnumber(number)
  }
  const cnamef=(number)=>{
    setcardname(number)
  }
  const cdatef=(number)=>{
    setcarddate(number)
  }
  return (
    <div className="flex">
      <div className="bg-violet-500 mx-3 mt-6 w-[400px]  rounded-lg h-72">
        <p className="text-white   pl-20 py-16">Card number:{cardnumber}</p>
        <div className="flex justify-between">
          <p className="text-white px-3">Card name:{cardname}</p>
          <p className="text-white px-3">Card date:{carddate}</p>
        </div>
      </div>
      <div className="px-2 py-3 mt-2">
      <ControlledCard cnf={cnf} cnamef={cnamef} cdatef={cdatef}/>
      </div>
    </div>
  );
};

export default Cardpractise;
