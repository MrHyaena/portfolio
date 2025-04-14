import { faBars, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function MobileHeader({ text }) {
  const [menuToggle, setMenuToggle] = useState(false);

  function LiLink({ text, element, id }) {
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
          <p id={id + "p"}>{text}</p>
        </li>
      </>
    );
  }

  return (
    <div className="w-full min-h-[70px] bg-stone-950/100 shadow-[0px_1px_8px_0px] shadow-emerald-700/45 z-100 fixed top-0 px-5 xl:hidden">
      <p
        className="h-full flex items-center justify-end text-xl font-semibold min-h-[70px]"
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      >
        Menu
      </p>
      {menuToggle && (
        <>
          <ul className="text-lg flex flex-col gap-4 items-center w-full font-semibold pb-10">
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
        </>
      )}
    </div>
  );
}
