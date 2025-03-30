import React from "react";

function Input(props) {
  return (
    <input 
      className="w-full sm:w-80 px-5 py-3 text-lg border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
      type="text" 
      placeholder={props.placeholder} 
      value={props.value} 
      onChange={props.onChange} 
    />
  );
}

export default Input;
