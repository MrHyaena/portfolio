import React, { useEffect } from "react";
import me from "/public/me.jpg";

export default function AboutMe({ text }) {
  // useEffect(() => {
  //   const textOne = document.getElementById("textOne");
  //   const textArray = text.about.textOne.split("");
  //   let i = 0;
  //   const intervalId = setInterval(() => {
  //     textOne.textContent = textOne.textContent + textArray[i];
  //     i = i + 1;
  //     if (i == textArray.length) {
  //       clearInterval(intervalId);
  //     }
  //   }, 10);
  // }, []);

  return (
    <>
      <div id="about" className="text-lg font-semibold" key={"about"}>
        <h2 className="text-3xl mb-10 col-span-2">{text.about.subheading}</h2>
        <div className="xl:grid grid-cols-[300px_1fr] items-start gap-10">
          <img
            src={me}
            className="object-cover w-[300px] h-[300px] bg-stone-700 rounded-md  hue-rotate-30 saturate-30 mb-10"
          ></img>
          <div className="flex flex-col gap-3">
            <p id="textOne">{text.about.textOne}</p>
            <p>{text.about.textTwo}</p>
            <p>{text.about.textThree}</p>
            <p>{text.about.textFour}</p>
          </div>
        </div>
      </div>
    </>
  );
}
