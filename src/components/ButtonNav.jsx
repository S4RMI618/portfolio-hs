import React from "react";

function ButtonNav({ name, icon, link , handleNav, nav}) {
  return (
    <a
      onClick={() => handleNav()}
      href={link}
      className={`flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 ${
        nav ? null : "w-[75%]"
      }`}
    >
      {icon}
      <span className="pl-4 md:hidden block">{name}</span>
    </a>
  );
}
  
  export default ButtonNav;