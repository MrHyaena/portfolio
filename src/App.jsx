import { useEffect, useState } from "react";

import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import Bubbles from "./components/Bubbles";
import AboutMe from "./components/AboutMe";
import Panel from "./components/Panel";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import LangSwitcher from "./components/LangSwitcher";
import { textCz } from "./components/texts";
import WorkExperience from "./components/WorkExperience";
import MobileHeader from "./components/MobileHeader";

function App() {
  function MainContent() {
    const [text, setText] = useState({
      info: {
        subheading: "Front-end vývojář",
        text: "Propojuji investiční přemýšlení, projektový management, vlastní podnikání a programování.",
        links: ["O mně", "Technologie", "Moje projekty", "Pracovní zkušenosti"],
      },
      about: {
        subheading: "O mně",
        textOne:
          "Sám o sobě bych řekl, že jsem poměrně všestranný člověk. Skrze svět investic se mi hlava nastavila na ekonomické přemýšlení, skrze které dnes hodnotím projekty, benefity, nákladovost a mnoho dalšího.",
        textTwo:
          "Chuť po vlastním projektu mě pak před lety přivedla k no-code platformám, se kterými jsem po stovkách hodin vytvořil aplikace. Na to si přidejte marketing a trochu práva kvůli komunikaci se zákazníky.",
        textThree:
          "V tuto chvíli je poslední fází plnohodnotné programování a projektový management. V jednu chvíli mě prostě přestala bavit omezení plynoucí z no-code aplikací a pustil jsem se tak planou parou do webového vývoje. Po zhruba 5 měsících jsem měl první full-stack appku na tvorbu předplatných, která stále běží.",
        textFour:
          "A ze skutečně osobního pohledu? Miluji sport, zvířata, různé výzvy ala čím náročnější a bolestivější tím lepší. Standardně si užívám každou akci, ale dostat mě tam je fuška. Představte si v zásadě zlatého retrývra a kromě kožichu se pravděpodobně dost trefíte.",
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
        database: [
          "Databáze, nástroje a API",
          "Typy databází",
          "Nástroje",
          "Api",
        ],
      },
      projects: {
        subheading: "Moje projekty",
        items: [
          {
            name: "Shopr - Služba pro tvorbu předplatných",
            text: "E-shopy standardně nemají možnost automatizovaných opakovaných objednávek. Cílej projektu bylo zákazníkům umožnit, aby si takové předplatné vytvořili. Jde o full-stack aplikaci, která v sobě propojuje kromě samotného systému i platební bránnu Stripe, CRM Pipedrive a emailing.",
            tech: ["React", "Express", "MongoDB", "Stripe", "Pipedrive"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
          {
            name: "Chatovací aplikace",
            text: "Cílem bylo naučit se pořádně pracovat s relační databází Postgres a websockety. Uživatelé aplikace mají vlastní účet, mohou vytvořit soukromé místnosti a pozvat do nich ostatní uživatele. Chat probíhá v živém režimu skrze websockety.",
            tech: ["React", "Express", "Postgres", "Websockety"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
          {
            name: "Shoprš - Služba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
          {
            name: "Shopr g- Služba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
          {
            name: "Shopr h- Služba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
          {
            name: "Shoprj - Služba pro tvorbu předplatných v e-shopech",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident possimus dignissimos.",
            tech: ["Něco", "Jiného", "Tady"],
            webpage: "www.shopr.cz",
            github: "www.github.ct",
          },
        ],
      },
      work: {
        subheading: "Pracovní zkušenosti",
        position: [
          {
            heading: "Projektový manažer",
            text: "Lorem dsa few fewq fewqfewqf wq fewqfewq fewqf eqwewq.",
            date: "01.01.2025 - Doposud",
          },
          {
            heading: "Sales Manager",
            text: "Lorem dsa few fewq fewqfewqf wq fewqfewq fewqf eqwewq.",
            date: "01.01.2025 - Doposud",
          },
        ],
      },
    });

    useEffect(() => {
      setText(textCz);
    }, []);

    const windowWidth = window.innerWidth;
    console.log(windowWidth);

    return (
      <>
        <MobileHeader text={text} />
        <div className="xl:w-[1300px] flex flex-col xl:gap-10 min-h-screen mt-30 mb-50 xl:grid grid-cols-[3fr_7fr] gap-20 z-30 p-5">
          <div>
            <Panel text={text}>
              <div className="flex items-center gap-5">
                <h1 className="text-3xl font-semibold">Martin Doležal</h1>
                <LangSwitcher setText={setText} />
              </div>
            </Panel>
          </div>
          <div className="flex flex-col xl:gap-50 gap-20">
            <AboutMe text={text} />
            <Technologies text={text} />
            <Projects text={text} />
            <WorkExperience text={text} />
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
