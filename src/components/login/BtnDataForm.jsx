import React from "react";

function BtnDataForm({ lable, backIcon, showPassIcon }) {
  return (
    <div className="relative w-full h-14 border-2 border-gray-300 rounded-lg mt-5">
      <input
        type="text"
        id={lable}
        placeholder=" "
        className="w-full h-full font-[Vazir] focus:outline-none peer text-right pr-12 bg-transparent"
      />
      <label
        htmlFor={lable}
        className="absolute px-3 top-5 right-8 cursor-text font-[Vazir] bg-white text-gray-400 text-sm transition-all duration-200 peer-focus:-top-3 peer-focus:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs"
      >
        {lable}
      </label>
      <span className="absolute top-4 right-3 text-gray-400">{backIcon}</span>
      <span>{showPassIcon}</span>
    </div>
  );
}

export default BtnDataForm;
