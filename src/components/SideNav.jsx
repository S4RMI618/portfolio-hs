import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import ButtonNav from "./ButtonNav";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      console.log(setIsSmallScreen);
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    // Suscribirse al evento de cambio de tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpieza: eliminar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]);

  return (
    <div>
      <div
        className="absolute top-4 right-4 z-[99] md:hidden rounded bg-indigo-900 shadow-lg hover:shadow-indigo-500/50 hover:scale-110 p-4 cursor-pointer ease-in-out duration-300"
        onClick={handleNav}
      >
        <AiOutlineMenu style={{ color: "white" }} />
      </div>

      {nav ? (
        <div className="fixed w-full h-screen b-white/90 flex flex-col justify-center items-center z-[20]">
          <ButtonNav 
            name={"Home"}
            icon={<AiOutlineHome size={20} />}
            link={"#main"}
            handleNav={handleNav}
          />
          <ButtonNav
            name={"Work"}
            icon={<GrProjects size={20} />}
            link={"#work"}
            handleNav={handleNav}
          />
          <ButtonNav
            name={"Projects"}
            icon={<AiOutlineProject size={20} />}
            link={"#projects"}
            handleNav={handleNav}
          />
          <ButtonNav
            name={"Contact"}
            icon={<AiOutlineMail size={20} />}
            link={"#contact"}
            handleNav={handleNav}
          />
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <ButtonNav
            name={"Home"}
            icon={<AiOutlineHome size={20} />}
            link={"#main"} 
          />
          <ButtonNav
            name={"Work"}
            icon={<GrProjects size={20}  />}
            link={"#work"}
          />
          <ButtonNav
            name={"Projects"}
            icon={<AiOutlineProject size={20} />}
            link={"#projects"} 
          />
          {/* <ButtonNav
            name={"Resume"}
            icon={<BsPerson size={20} link={"#contact"} />}
          /> */}
          <ButtonNav
            name={"Contact"}
            icon={<AiOutlineMail size={20} />}
            link={"#contact"} 
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
