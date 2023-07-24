import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2021,
    title: "Stop And Eat",
    duration: "Six Months",
    details:
      "My first experience in front-end development, a project for educational purposes for the final stage of grade 11. This project was a mini static website to meet the required goals",
  },
  {
    year: 2022,
    title: "Mision TIC",
    duration: "Eight Months",
    details: "Educational program carried out by the government, my first time really collaborating with people with objectives such as building web applications",
  },
  {
    year: 2023,
    title: "Memorable Website",
    duration: "Six months",
    details:
      "Memorable web store is a personalized wine company for sale to the public, people can fill out forms by completing the information required to make their purchase order, it was a dinamic website that I worked as a front-end developer",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-indigo-800/90 mb-8">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
