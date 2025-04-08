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
            className="object-cover w-[300px] h-[300px] bg-stone-700 rounded-md rounded-tl-4xl rounded-br-4xl hue-rotate-30 saturate-30"
          ></img>
          <div>
            <p>{text.about.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
