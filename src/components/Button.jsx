import React from "react";

function Button(props) {
  return (
    <button 
      className="px-6 py-2 w-full sm:w-auto text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md transition-all"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Button;
