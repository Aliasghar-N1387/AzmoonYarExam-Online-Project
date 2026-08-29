import React from "react";

function BtnContents({ name, styleButton, icon , onClick }) {
  return (
    <div>
      <button
       onClick={onClick} className={`rounded-lg flex gap-4 text-sm font-bold cursor-pointer justify-center items-center px-5 py-2.5 transition-all duration-250 transform hover:scale-105 hover:shadow-lg active:scale-95 ${styleButton}`}
      >
        {name}
        {icon}
      </button>
    </div>
  );
}

export default BtnContents;
