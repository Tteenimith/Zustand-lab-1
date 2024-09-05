import React from "react";
import useStore from "../store/main-store";
import { useState } from "react";

const Todolist = () => {
  const { arr2, addArr2, delArr2 } = useStore((state) => ({
    arr2: state.arr2,
    addArr2: state.addArr2,
    delArr2: state.delArr2,
  }));
  const [txt, setTxt] = useState("");
  const hdlChange = (e) => {
    setTxt(e.target.value);
  };

  const hdlSubmit = () => {
    addArr2(txt);
  };

  const hdlDelete = (id) => {
    delArr2(id);
  };
  return (
    <div className="bg-green-100 h-[100vh]">
      <div className="w-full border  flex justify-between gap-5 items-center bg-green-500 text-black">
        <h1 className="text-4xl font-extrabold">Navbar</h1>

        <div className=" flex gap-4  m-5 ">
          <button className="btn btn-accent ">Home</button>
          <button className="btn btn-accent">About</button>
          <button className="btn btn-accent">Login</button>
        </div>
      </div>
      
      <div className=" text-3xl p-4">
        <h1 className="text-center text-black font-extrabold mt-4 mb-4">Todo List</h1>

        <div className="flex">

        <input type="text" onChange={hdlChange} className="w-full rounded-box bg-green-300"/>
        <button onClick={hdlSubmit} className="ml-4 btn btn-outline btn-error mt-6">
          Add
        </button>
        </div>
        <div>

        {arr2.map((item, idx) => (
          
          
          <li key={idx} className="flex justify-between text-black font-extrabold">
            {item.title} 
            <div>
            <button className="ml-4 btn btn-outline btn-error mt-6" onClick={() => hdlDelete(item.id)}>Del</button>
            </div>
          </li>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
