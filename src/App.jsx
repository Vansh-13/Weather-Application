import React, { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [city,setCity] =useState("");
  const [selecCity,setSelectCity] =useState("London");
  const [darkmode,setdarkmode]=useState(false);

  const handle =(e)=>{
    setCity(e.target.value);
  };

  const Search =()=> {
    if (city.trim()!== "") {
      setSelectCity(city);
    }
  };

  return (
    <div className={`flex items-center justify-center  min-h-screen px-4 my-2 transition-all duration-300 ${darkmode ? "bg-gray-900 text-white" : "bg-[#7fbde3] text-black"}`}>
      <div className="app-container w-full max-w-lg p-6 sm:p-8 rounded-lg shadow-lg text-center bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl  sm:text-4xl py-1 font-bold">🌤Weather App</h1>
          <button 
            className=" px-4 py-1 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 transition-all text-sm"
            onClick={() => setdarkmode(!darkmode)}
          >
            {darkmode ? "☀" : "🌙 "}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <Input placeholder="Enter City" value={city} onChange={handle} className="w-full sm:w-72" />
          <Button value="Search" onClick={Search} className="w-full sm:w-auto px-6" />
        </div>

        <Card city={selecCity} />
      </div>
    </div>
  );
}

export default App;
