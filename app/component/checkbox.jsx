import React from 'react';

const Checkbox = () => {
  return (
    <div className="relative w-7 h-[20px] cursor-pointer">
      <label htmlFor="burger" classNameName="block w-full h-full relative">
        <input type="checkbox" id="burger" classNameName="peer hidden" />
        <span classNameName="absolute left-0 top-0 w-full h-1 bg-black rounded-[9px] transition-transform duration-200 ease-in-out origin-left peer-checked:rotate-45 peer-checked:top-0 peer-checked:left-[5px]" />
        <span classNameName="absolute left-0 top-1/2 w-full h-1 bg-black rounded-[9px] transition-all duration-200 ease-in-out transform -translate-y-1/2 origin-left peer-checked:opacity-0 peer-checked:w-0" />
        <span classNameName="absolute left-0 top-full w-full h-1 bg-black rounded-[9px] transition-transform duration-200 ease-in-out transform -translate-y-full origin-left peer-checked:rotate-[-45deg] peer-checked:top-[28px] peer-checked:left-[5px]" />
      </label>
    </div>
  );
};

export default Checkbox;