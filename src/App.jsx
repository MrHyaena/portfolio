import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import testImg from "../public/background.jpg";

function App() {
  function Header() {
    return (
      <>
        <div className="fixed top-0 p-5 w-full">
          <div className="h-[80px] bg-stone-900 rounded-xl"></div>
        </div>
      </>
    );
  }

  function Info() {
    function LiLink({ text, src }) {
      return (
        <>
          <a href={src}>
            <li className="group grid grid-cols-[1fr_100px] gap-3 items-center w-[50%] hover:w-[60%] hover:text-primary   transition-all ease-in-out">
              <div className="h-[2px] group-hover:bg-primary bg-white ease-in-out transition-all"></div>
              <p>{text}</p>
            </li>
          </a>
        </>
      );
    }

    return (
      <>
        <div className="sticky top-30 flex flex-col justify-between gap-30">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">Martin Doležal</h1>
              <h2 className="text-xl font-semibold">Front-end Engineer</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur provident possimus dignissimos.
              </p>
            </div>
            <ul className=" flex flex-col gap-3 w-full">
              <LiLink text={"About me"} src={"www.cz.cz"} />
              <LiLink text={"Technologies"} src={"www.cz.cz"} />
              <LiLink text={"My projects"} src={"www.cz.cz"} />
            </ul>
            <div className="flex flex-col gap-2">
              <a href="tel:602606331">Tel: +420 602 606 331</a>
              <a href="mailto:dolezalmartin131@gmail.com">
                dolezalmartin131@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-5 text-2xl">
            <a
              href="www.cz.cz"
              className="hover:text-primary transition-all ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="www.cz.cz"
              className="hover:text-primary transition-all ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="www.cz.cz"
              className="hover:text-primary transition-all ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </>
    );
  }

  function AboutMe() {
    return (
      <>
        <div className="text-lg font-semibold ">
          <h2 className="text-3xl mb-10 col-span-2">About me</h2>
          <div className="grid grid-cols-[300px_1fr] items-start gap-10">
            <img
              src={testImg}
              className="object-cover w-[300px] h-[300px] bg-stone-700 rounded-md rounded-tl-4xl rounded-br-4xl"
            ></img>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sequi, voluptatum temporibus nihil consectetur explicabo,
                ducimus adipisci delectus ex eius culpa. Quis aliquam distinctio
                dolorum incidunt, porro impedit molestias sint.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sequi, voluptatum temporibus nihil consectetur explicabo,
                ducimus adipisci delectus ex eius culpa. Quis aliquam distinctio
                dolorum incidunt, porro impedit molestias sint.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                sequi, voluptatum temporibus nihil consectetur explicabo,
                ducimus adipisci delectus ex eius culpa. Quis aliquam distinctio
                dolorum incidunt, porro impedit molestias sint.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  function Technologies() {
    return (
      <>
        <div>
          <h2 className=" text-3xl font-semibold mb-10">Technologies</h2>
          <div className="flex flex-col gap-5">
            <div className="w-full min-h-50 bg-stone-900 rounded-md p-5">
              <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
                Front-end
              </h3>
              <div className="w-full grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">
                    Languages and coding
                  </h4>
                  <ul>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">
                    Frameworks and other
                  </h4>
                  <ul>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>CSS Modules</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Libraries</h4>
                  <ul>
                    <li>Tailwind</li>
                    <li>Font Awesome</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full min-h-50 bg-stone-900 rounded-md p-5">
              <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
                Back-end
              </h3>
              <div className="w-full grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Languages</h4>
                  <ul>
                    <li>Javascript</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">
                    Frameworks and other
                  </h4>
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Libraries</h4>
                  <ul>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full min-h-50 bg-stone-900 rounded-md p-5">
              <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
                Databases and APIs
              </h3>
              <div className="w-full grid grid-cols-3 gap-10">
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Database types</h4>
                  <ul>
                    <li>MongoDB - NoSQL</li>
                    <li>Postgres - SQL</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Tools</h4>
                  <ul>
                    <li>Prisma</li>
                    <li>Node-postgres</li>
                    <li>Mongoose</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                  <h4 className="text-lg font-semibold">Service APIs</h4>
                  <ul>
                    <li>Pipedrive</li>
                    <li>Stripe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function Projects() {
    function Project() {
      return (
        <>
          <a
            href="www.cz.cz"
            className="bg-stone-900 rounded-md rounded-bl-3xl rounded-tr-3xl text-textDarker  flex gap-4 hover:scale-105  ease-in-out transition-all"
          >
            <img
              src={testImg}
              className="h-full w-[200px] object-cover bg-stone-700 rounded-l-md rounded-bl-3xl hue-rotate-[360deg]"
            ></img>
            <div className="flex flex-col gap-3 p-5">
              <div>
                <h1 className="text-primary text-xl font-bold mb-2">
                  Shopr - Subscription service for supplements
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                  cum, voluptates voluptatum minima architecto voluptatem
                  reiciendis suscipit.
                </p>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-3">
                  <p>Něco</p>
                  <p>Něco</p>
                  <p>Něco</p>
                </div>
                <div
                  href="www.ct.cz"
                  className=" transition-all ease-in-out hover:text-primary"
                >
                  {" "}
                  <FontAwesomeIcon icon={faLink} className="text-xl" />
                </div>
              </div>
            </div>
          </a>
        </>
      );
    }

    return (
      <div>
        <h2 className=" text-3xl font-semibold mb-10">My projects</h2>

        <div className=" grid grid-cols-1 grid-rows-6 gap-8">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    );
  }

  const backgroundElements = [];

  for (let i = 0; i < 50; i++) {
    let number = Math.floor(Math.random() * 100);
    backgroundElements.push(number);
  }

  return (
    <>
      <div className="w-full min-h-screen bg-stone-950 flex flex-col items-center justify-center font-mono text-textLight relative">
        <div className="bubbles justify-between flex w-full fixed top-0">
          {backgroundElements.map((item, index) => {
            return (
              <span
                key={index}
                style={{ "--i": item }}
                className="even:bg-emerald-900 odd:bg-emerald-600 shadow-[0px_0px_5px_5px] odd:shadow-emerald-600 even:shadow-emerald-900 rounded-[2px]"
              ></span>
            );
          })}
        </div>

        <div className="w-[1300px] min-h-screen mt-30 mb-50 grid grid-cols-[2fr_5fr] gap-20 z-30">
          <div>
            <Info />
          </div>
          <div className="flex flex-col gap-50">
            <AboutMe />
            <Technologies />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
