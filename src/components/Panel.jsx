import React, { useEffect } from "react";
import LangSwitcher from "./LangSwitcher";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Panel({ text, children }) {
  function LiLink({ text, element, id }) {
    useEffect(() => {
      let item = document.getElementById(element);
      let linkDiv = document.getElementById(id + "div");
      let linkP = document.getElementById(id + "p");
      let linkLi = document.getElementById(id + "li");

      const topToTop = item.offsetTop - 300;
      const topToBottom = item.offsetTop + item.offsetHeight - 300;

      let data = window.scrollY;

      window.addEventListener("scroll", () => {
        let data = window.scrollY;
        if (data < topToBottom && data >= topToTop) {
          linkDiv.style.backgroundColor = "oklch(76.5% 0.177 163.223)";
          linkP.style.color = "oklch(76.5% 0.177 163.223)";
          linkDiv.style.width = "20%";
        } else {
          linkDiv.style.removeProperty("background-color");
          linkP.style.removeProperty("color");
          linkDiv.style.removeProperty("width");
        }
      });
    }, []);

    return (
      <>
        <li
          onClick={() => {
            const item = document.getElementById(element);
            console.log(item);
            window.scrollTo({
              top: item.offsetTop - 120,
              behavior: "smooth",
            });
          }}
          id={id + "li"}
          className="group flex gap-3 items-center  hover:text-primary   transition-all ease-in-out cursor-pointer"
        >
          <div
            id={id + "div"}
            className="h-[2px] group-hover:bg-primary w-[10%] group-hover:w-[20%] bg-white ease-in-out transition-all "
          ></div>
          <p id={id + "p"}>{text}</p>
        </li>
      </>
    );
  }

  return (
    <>
      <div
        className="xl:sticky top-[140px] flex flex-col justify-between xl:gap-20 gap-5"
        key="info"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            {children}
            <h2 className="text-xl font-semibold">{text.info.subheading}</h2>
            <p>{text.info.text}</p>
          </div>
          <ul className=" xl:flex hidden flex-col gap-3 w-full">
            <LiLink
              text={text.info.links[0]}
              element={"about"}
              id={"firstLink"}
            />
            <LiLink
              text={text.info.links[1]}
              element={"technologies"}
              id={"secondLink"}
            />
            <LiLink
              text={text.info.links[2]}
              element={"projects"}
              id={"thirdLink"}
            />
            <LiLink
              text={text.info.links[3]}
              element={"work"}
              id={"fourthLink"}
            />
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
            target="blank"
            href="https://github.com/MrHyaena"
            className="hover:text-primary transition-all ease-in-out hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/martin-dole%C5%BEal-970830263/"
            className="hover:text-primary transition-all ease-in-out hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}
