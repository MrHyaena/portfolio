import { useEffect, useState } from "react";

import testImg from "../public/background.jpg";

import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import Bubbles from "./components/Bubbles";
import AboutMe from "./components/AboutMe";
import Panel from "./components/Panel";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import LangSwitcher from "./components/LangSwitcher";

function App() {
  function MainContent() {
    const [text, setText] = useState({
      info: {
        subheading: "Front-end vývojář",
        text: "Jsem vojář, který se nebojí práce a má rád želvy, takže mi prosím pojďte pomoci.",
        links: ["O mně", "Technologie", "Moje projekty"],
      },
      about: {
        subheading: "O mně",
        text: "Jsem vojář, který se nebojí práce a má rád želvy, takže mi prosím pojďte pomoci.",
      },
      technologies: {
        subheading: "Technologie",
        frontend: [
          "Front-end",
          "Jazyky a kódování",
          "Frameworky a ostatní",
          "Knihovny",
        ],
        backend: ["Back-end", "Jazyky", "Frameworky a ostatní", "Knihovny"],
        database: ["Databáze a API", "Typy databází", "Nástroje", "Api"],
      },
      projects: {
        subheading: "Moje projekty",
        items: [
          {
            name: "Shopr - dSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
          {
            name: "Shopr - sSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
          {
            name: "Shopr - aSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
          {
            name: "Shopr - qSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
          {
            name: "Shopr - wSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
          {
            name: "Shopr - eSlužba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            website: "www.shopr.cz",
            github: "www.github.ct",
            image: testImg,
          },
        ],
      },
    });
    return (
      <>
        <div className="w-[1300px] min-h-screen mt-30 mb-50 grid grid-cols-[2fr_5fr] gap-20 z-30">
          <div>
            <Panel text={text}>
              <div className="flex items-center gap-10">
                <h1 className="text-3xl font-semibold">Martin Doležal</h1>
                <LangSwitcher setText={setText} />
              </div>
            </Panel>
          </div>
          <div className="flex flex-col gap-50">
            <AboutMe text={text} />
            <Technologies text={text} />
            <Projects text={text} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen bg-stone-950 flex flex-col items-center justify-center font-mono text-textLight relative">
        <Bubbles />
        <MainContent />
      </div>
    </>
  );
}

export default App;
