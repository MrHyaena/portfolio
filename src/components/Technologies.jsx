import React, { useEffect } from "react";

export default function Technologies({ text }) {
  useEffect(() => {
    let frontend = document.getElementById("frontend");
    let backend = document.getElementById("backend");
    let database = document.getElementById("database");

    let ofset = 300;
    let scale = "1.07";

    const frontendTopToTop = frontend.offsetTop - ofset;
    const frontendTopToBottom =
      frontend.offsetTop + frontend.offsetHeight - ofset;

    const backendTopToTop = backend.offsetTop - ofset;
    const backendTopToBottom = backend.offsetTop + backend.offsetHeight - ofset;

    const databaseTopToTop = database.offsetTop - ofset;
    const databaseTopToBottom =
      database.offsetTop + database.offsetHeight - ofset;

    window.addEventListener("scroll", () => {
      let data = window.scrollY;
      if (data < frontendTopToBottom && data >= frontendTopToTop) {
        frontend.style.scale = scale;
      } else {
        frontend.style.scale = "1";
      }

      if (data < backendTopToBottom && data >= backendTopToTop) {
        backend.style.scale = scale;
      } else {
        backend.style.scale = "1";
      }

      if (data < databaseTopToBottom && data >= databaseTopToTop) {
        database.style.scale = scale;
      } else {
        database.style.scale = "1";
      }
    });
  }, []);

  return (
    <>
      <div id="technologies" key={"technologies"}>
        <h2 className=" text-3xl font-semibold mb-10">
          {text.technologies.subheading}
        </h2>
        <div className="flex flex-col gap-5">
          <div
            id="frontend"
            className="w-full min-h-50 bg-stone-900 rounded-md p-5 transition-all ease-in-out"
          >
            <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
              {text.technologies.frontend[0]}
            </h3>
            <div className="w-full grid grid-cols-3 gap-10">
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.frontend[1]}
                </h4>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.frontend[2]}
                </h4>
                <ul>
                  <li>React</li>
                  <li>NextJS</li>
                  <li>CSS Modules</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {" "}
                  {text.technologies.frontend[3]}
                </h4>
                <ul>
                  <li>Tailwind</li>
                  <li>Font Awesome</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="backend"
            className="w-full min-h-50 bg-stone-800 rounded-md p-5 transition-all ease-in-out"
          >
            <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
              {text.technologies.backend[0]}
            </h3>
            <div className="w-full grid grid-cols-3 gap-10">
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.backend[1]}
                </h4>
                <ul>
                  <li>Javascript</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.backend[2]}
                </h4>
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.backend[3]}
                </h4>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="database"
            className="w-full min-h-50 bg-stone-900 rounded-md p-5 transition-all ease-in-out"
          >
            <h3 className="text-primary text-xl font-bold mb-2 border-l-2 pl-5">
              {text.technologies.database[0]}
            </h3>
            <div className="w-full grid grid-cols-3 gap-10">
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.database[1]}
                </h4>
                <ul>
                  <li>MongoDB - NoSQL</li>
                  <li>Postgres - SQL</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.database[2]}
                </h4>
                <ul>
                  <li>Prisma</li>
                  <li>Node-postgres</li>
                  <li>Mongoose</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 border-l-3 pl-5 border-stone-700">
                <h4 className="text-lg font-semibold">
                  {text.technologies.database[3]}
                </h4>
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
