import React from "react";
import ProjectItem from "./ProjectItem";
import DigitalClockImg from "../../assets/images/DC.png";
import RickAndMortyImg from "../../assets/images/RaM.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-center text-4xl font-bold text-indigo-800/90">
        Projects
      </h1>
      <p className="text-center py-8">
        This is the place where you can explore and view the projects I have
        completed. From web development, you'll find a diverse range of works
        that showcase my skills and passion for creating innovative solutions.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={RickAndMortyImg}
          title={"Rick and Morty API"}
          dev={
            "This project was made consuming a Rick And Morty API showing characteristics of each character in the series developed with React js"
          }
          hv={
            "https://s4rmi618.github.io/Rick-and-Morty-App-React/"
          } /* Hipervinculo vista */
          hc={
            "https://github.com/S4RMI618/Rick-and-Morty-App-React"
          } /* hipervinculo codigo */
        />
        <ProjectItem
          img={DigitalClockImg}
          title={"Custom Digital Clock"}
          dev={"This project is a digital clock with two additional functions that was made to meet a goal in basic knowledge of Vanilla made with this technology."}
          hv={"https://s4rmi618.github.io/Digital_Clock/"}
          hc={"https://github.com/S4RMI618/Digital_Clock"}
        />
      </div>
    </div>
  );
};

export default Projects;
