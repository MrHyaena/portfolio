import React from "react";

export default function WorkExperience({ text }) {
  return (
    <>
      <div id="work" key="work">
        <h2 className=" text-3xl font-semibold mb-10">
          {text.work.subheading}
        </h2>

        <div>
          {text.work.position.map((item) => {
            return (
              <>
                <div className="group xl:grid grid-cols-[1fr_10px_1fr] gap-5 flex flex-col xl:mb-0 mb-10">
                  <div className=" rounded-md xl:mb-40 flex flex-col gap-5 xl:mt-[-10px]">
                    <p className="text-xl font-semibold">{item.heading}</p>
                    <p>{item.text}</p>
                  </div>

                  <div className="w-[3px] bg-primary group-first:rounded-t-full group-last:rounded-b-full">
                    <div className="w-5 h-[3px] bg-primary rounded-r-md"></div>
                  </div>
                  <div>
                    <p className="xl:mt-[-10px]">{item.date}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
