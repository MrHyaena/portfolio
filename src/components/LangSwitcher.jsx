import React, { useState } from "react";
import { textCz, textEng } from "./texts";

export default function LangSwitcher({ setText }) {
  const [lang, setLang] = useState("cz");

  return (
    <>
      <div
        onClick={() => {
          const cz = document.getElementById("cz");
          const eng = document.getElementById("eng");

          if (lang == "cz") {
            cz.style.backgroundColor = "transparent";
            eng.style.backgroundColor = "oklch(40.6% 0.145 163.225)";
            setLang("eng");
            setText(textEng);
            //setText({ ...textEng });
          }
          if (lang == "eng") {
            eng.style.backgroundColor = "transparent";
            cz.style.backgroundColor = "oklch(40.6% 0.145 163.225)";
            setLang("cz");
            setText(textCz);
            //setText({ ...textCz });
          }
        }}
        className="text-xl bg-stone-900 p-1 rounded-md flex gap-2 cursor-pointer border-2 border-stone-800 hover:scale-105 transition-all ease-in-out z-50"
      >
        <p
          id="cz"
          style={{ backgroundColor: "oklch(49.6% 0.145 163.225)" }}
          className="px-2 rounded-sm transition-all ease-in-out"
        >
          cz
        </p>
        <p
          id="eng"
          style={{ backgroundColor: "transparent" }}
          className="px-2 rounded-sm transition-all ease-in-out"
        >
          eng
        </p>
      </div>
    </>
  );
}
