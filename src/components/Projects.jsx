import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import testImg from "/public/background.jpg";

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
        <div className="flex flex-col justify-between gap-3 p-5">
          <div>
            <h1 className="text-primary text-xl font-bold mb-2">{heading}</h1>
            <p>{text}</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-primary text-md font-bold mb-2">
                Technologie
              </h1>

              <div className="flex gap-3">
                {technologies.map((item) => {
                  return (
                    <>
                      <p key={item + heading} className="text-">
                        {item}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" flex gap-3">
              {website && (
                <a href={website} target="_blank">
                  <FontAwesomeIcon
                    key={"iconTwo" + heading + text}
                    icon={faGlobe}
                    className="text-2xl transition-all ease-in-out hover:text-primary "
                  />
                </a>
              )}
              {github && (
                <a href={github} target="_blank">
                  <FontAwesomeIcon
                    key={"icon" + heading + text}
                    icon={faGithub}
                    className="text-2xl transition-all ease-in-out hover:text-primary "
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

      <div className=" grid grid-cols-1 grid-rows-3 gap-8">
        <Project
          heading={text.projects.items[0].name}
          text={text.projects.items[0].text}
          technologies={text.projects.items[0].tech}
          website={text.projects.items[0].website}
          github={text.projects.items[0].github}
          image={testImg}
        />
        <Project
          heading={text.projects.items[1].name}
          text={text.projects.items[1].text}
          technologies={text.projects.items[1].tech}
          website={text.projects.items[1].website}
          github={text.projects.items[1].github}
          image={testImg}
        />
        <Project
          heading={text.projects.items[2].name}
          text={text.projects.items[2].text}
          technologies={text.projects.items[2].tech}
          website={text.projects.items[2].website}
          github={text.projects.items[2].github}
          image={testImg}
        />
      </div>
    </div>
  );
}
