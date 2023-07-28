import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  /*   FaTwitter,
  FaFacebook,
  FaInstagram, */
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import ImgWallpaper from '../assets/images/fondo-estadio.jpg'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={ImgWallpaper}
        alt="Wallpaper-Portfolio"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-indigo-950">
            I'm Hugo Sarmiento
          </h1>
          <h2 className="flex sm:text-3xl text-2xl p-4 m-4 text-indigo-950">
            I'm a
            <TypeAnimation
              sequence={[
                "Coder",
                1000,
                "Front-end Trainee",
                1000,
                "Tech Enthusiast",
                1000,
                "Developer Junior",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "1vh" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-around pt-4 max-w-[120px] md:max-w-[200px] w-full">
            {/*  <a href="https://www.facebook.com/hugoesneider.sarmientobernal">
              <FaFacebook
                className="cursor-pointer hover:scale-110 hover:ring-2 ring-indigo-800 p-1 rounded-sm duration-200 hover:transform hover:-translate-y-2"
                size={30}
              />
            </a>
            <a href="https://www.instagram.com/sarmiento_618">
              <FaInstagram
                className="cursor-pointer hover:scale-110 hover:ring-2 ring-indigo-800 p-1 rounded-sm duration-200 hover:transform hover:-translate-y-2"
                size={30}
              />
            </a>
            <a href="https://twitter.com/HugoSar18/">
              <FaTwitter
                className="cursor-pointer hover:scale-110 hover:ring-2 ring-indigo-800 p-1 rounded-sm duration-200 hover:transform hover:-translate-y-2"
                size={30}
              /> 
            </a> */}
            <a href="https://linkedin.com/in/sarmientohugo618/">
              <FaLinkedinIn
                className="cursor-pointer hover:scale-110 hover:ring-2 ring-indigo-800 p-1 rounded-sm duration-200 hover:transform hover:-translate-y-2"
                size={30}
              />
            </a>
            <a href="https://github.com/S4RMI618">
              <FaGithub
                className="cursor-pointer hover:scale-110 hover:ring-2 ring-indigo-800 p-1 rounded-sm duration-200 hover:transform hover:-translate-y-2"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
