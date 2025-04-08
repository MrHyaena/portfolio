import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Project({ heading, text, technologies, website, github, image }) {
  return (
    <>
      <div
        key={heading + text + "project"}
        className="bg-stone-900 rounded-md  text-textDarker  flex gap-4 hover:scale-105  ease-in-out transition-all"
      >
        <img
          src={image}
          className="h-full w-[200px] object-cover bg-stone-700 rounded-l-md hue-rotate-[360deg]"
        ></img>
        <div className="flex flex-col gap-3 p-5">
          <div>
            <h1 className="text-primary text-xl font-bold mb-2">{heading}</h1>
            <p>{text}</p>
          </div>
          <div className="flex justify-between ">
            <div className="flex gap-3">
              {technologies.map((item) => {
                return (
                  <>
                    <p key={item + heading}>{item}</p>
                  </>
                );
              })}
            </div>
            <div className=" flex gap-3">
              {github && (
                <a href={github}>
                  <FontAwesomeIcon
                    key={"icon" + heading + text}
                    icon={faGithub}
                    className="text-xl transition-all ease-in-out hover:text-primary "
                  />
                </a>
              )}
              {website && (
                <a href={website}>
                  <FontAwesomeIcon
                    key={"iconTwo" + heading + text}
                    icon={faGlobe}
                    className="text-xl transition-all ease-in-out hover:text-primary "
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Projects({ text }) {
  return (
    <div id="projects" key="projectsWesome">
      <h2 className=" text-3xl font-semibold mb-10">
        {text.projects.subheading}
      </h2>

      <div className=" grid grid-cols-1 grid-rows-6 gap-8">
        <Project
          heading={text.projects.items[0].name}
          text={text.projects.items[0].text}
          technologies={text.projects.items[0].tech}
          website={text.projects.items[0].website}
          github={text.projects.items[0].github}
          image={text.projects.items[0].image}
        />
        <Project
          heading={text.projects.items[1].name}
          text={text.projects.items[1].text}
          technologies={text.projects.items[1].tech}
          website={text.projects.items[1].website}
          github={text.projects.items[1].github}
          image={text.projects.items[1].image}
        />
        <Project
          heading={text.projects.items[2].name}
          text={text.projects.items[2].text}
          technologies={text.projects.items[2].tech}
          website={text.projects.items[2].website}
          github={text.projects.items[2].github}
          image={text.projects.items[2].image}
        />
        <Project
          heading={text.projects.items[3].name}
          text={text.projects.items[3].text}
          technologies={text.projects.items[3].tech}
          website={text.projects.items[3].website}
          github={text.projects.items[3].github}
          image={text.projects.items[3].image}
        />
        <Project
          heading={text.projects.items[4].name}
          text={text.projects.items[4].text}
          technologies={text.projects.items[4].tech}
          website={text.projects.items[4].website}
          github={text.projects.items[4].github}
          image={text.projects.items[4].image}
        />
        <Project
          heading={text.projects.items[5].name}
          text={text.projects.items[5].text}
          technologies={text.projects.items[5].tech}
          website={text.projects.items[5].website}
          github={text.projects.items[5].github}
          image={text.projects.items[5].image}
        />
      </div>
    </div>
  );
}
