import React from "react";

export default function Bubbles() {
  const backgroundElements = [];

  for (let i = 0; i < 50; i++) {
    let number = Math.floor(Math.random() * 100);
    backgroundElements.push(number);
  }
  return (
    <>
      <div className="bubbles justify-between flex w-full fixed top-0 ">
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
      <div className="bubblesTwo justify-between xl:flex w-full fixed top-0 hidden">
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
    </>
  );
}
