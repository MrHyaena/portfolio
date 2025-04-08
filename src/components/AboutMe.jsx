import React from "react";
import me from "/public/me.jpg";

export default function AboutMe({ text }) {
  return (
    <>
      <div id="about" className="text-lg font-semibold" key={"about"}>
        <h2 className="text-3xl mb-10 col-span-2">{text.about.subheading}</h2>
        <div className="grid grid-cols-[300px_1fr] items-start gap-10">
          <img
            src={me}
            className="object-cover w-[300px] h-[300px] bg-stone-700 rounded-md  hue-rotate-30 saturate-30"
          ></img>
          <div className="flex flex-col gap-3">
            <p>{text.about.textOne}</p>
            <p>{text.about.textTwo}</p>
            <p>{text.about.textThree}</p>
            <p>{text.about.textFour}</p>
          </div>
        </div>
      </div>
    </>
  );
}
