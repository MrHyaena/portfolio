export const textCz = {
  info: {
    subheading: "Front-end vývojář",
    text: "Propojuji v sobě programování, investiční přemýšlení a zkušenosti z vlastního podnikání.",
    links: ["O mně", "Technologie", "Moje projekty", "Pracovní zkušenosti"],
  },
  about: {
    subheading: "O mně",
    textOne:
      "Jsem všestranný člověk, který se nebojí pustit do nových věcí. Je mi blízké ekonomické myšlení, které formovala škola a zájem o investice. Sám jsem se také pustil do několika projektů, u kterých jsem si v průběhu sáhl také na tvorbu contentu a marketing. Profesně jsem se v průběhu rozhodl skočit do salesu, protože ani sebelepší projekt se sám neprodá. ",
    textTwo:
      "A jak jsem se dostal k programování? V jednu chvíli mě prostě přestala bavit omezení plynoucí z no-code aplikací a pustil jsem se tak planou parou do webového vývoje. Po zhruba 5 měsících jsem měl první full-stack appku na tvorbu předplatných.",
    textThree:
      "Miluji sport, zvířata, hluboké debaty a lasagne. Rád se učím nové věci, jen se někdy stane, že kvůli nim nestíhám jíst nebo spát. Jsem celkem soutěživý typ, nicméně férovost a upřímnost je pro mě na prvním místě.",
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
    database: ["Databáze, nástroje a API", "Typy databází", "Nástroje", "API"],
  },
  projects: {
    subheading: "Moje projekty",
    items: [
      {
        name: "Bookingová služba Rentek",
        text: "Cílem bylo vytvořit bookingovou službu pro pronájem zahradní techniky. Hlavní body spočívaly v implementaci CMS Strapi pro content management s vlastními REST API cestami, vytvoření funkce kalendáře a rezervací, UI/UX eshopu a napojení business procesů do CRM systému, napojení platební brány.",
        tech: ["React", "TypeScript", "Strapi", "Pipedrive", "REST API"],
        website: "https:www.rentek.cz",
        github: "https://github.com/MrHyaena/grasston",
      },
      {
        name: "Shopr - Služba pro tvorbu předplatných (live)",
        text: "E-shopy standardně nemají možnost automatizovaných opakovaných objednávek. Cílem projektu bylo zákazníkům umožnit, aby si takové předplatné vytvořili. Jde o full-stack aplikaci, která v sobě propojuje kromě samotného systému i platební bránnu Stripe, CRM Pipedrive a emailing.",
        tech: ["React", "Express", "MongoDB", "Stripe", "Pipedrive"],
        github: "https://github.com/MrHyaena/shopr",
      },
    ],
  },
  work: {
    subheading: "Pracovní zkušenosti",
    position: [
      {
        heading: "Projektový manažer",
        text: "Ve firmě se ze mě stala všestranná posila týmu. Mým úkolem bylo spustit AI procesy, starat se o chod webu a API requesty týkající se propisování leadů, spravovat síť obchodních partnerů, rozběhnout emailingové kampaně a další větší či menší projekty.",
        date: "Září 2024 - Doposud",
      },
      {
        heading: "Full-Cycle Sales Representative",
        text: "Čistý prodej aplikace pro e-shopy. Řešil jsem celý cyklus akvizice klientů od nalezení kontaktu, přes prezentaci aplikaci a řešení podmínek, až k výslednému uzavření smlouvy a péči o klienta.",
        date: "Říjen 2023 - Srpen 2024",
      },
    ],
  },
};

export const textEng = {
  info: {
    subheading: "Front-end developer",
    text: "I combine programming skills with an investment-driven mindset and hands-on experience from running my own business.",
    links: ["About me", "Technologies", "My projects", "Work experience"],
  },
  about: {
    subheading: "About Me",
    textOne:
      "I'm a versatile individual not afraid to tackle new challenges. Economic thinking, shaped by my education and interest in investments, resonates with me. I've also embarked on several projects where I gained hands-on experience in content creation and marketing. Professionally, I decided to venture into sales, as even the best project won't sell itself.",
    textTwo:
      "So, how did I get into programming? At one point, I simply grew tired of the limitations of no-code applications and dove headfirst into web development. After about 5 months, I had my first full-stack subscription creation app.",
    textThree:
      "I love sports, animals, deep discussions, and lasagna. I enjoy learning new things; sometimes I get so engrossed that I forget to eat or sleep. I'm quite competitive, but fairness and honesty are always my top priorities.",
  },
  technologies: {
    subheading: "Technologie",
    frontend: [
      "Front-end",
      "Languages & Coding",
      "Frameworks & Other Tools",
      "Libraries",
    ],
    backend: ["Back-end", "Languages", "Frameworks & Other Tools", "Libraries"],
    database: [
      "Databases, Tools & APIs",
      "Types of Databases",
      "Tools",
      "APIs",
    ],
  },
  projects: {
    subheading: "My projects",

    items: [
      {
        name: "Booking service Rentek",
        text: "The goal was to create a booking service for renting garden equipment. Key points involved implementing Strapi CMS for content management with custom REST API routes, creating calendar and reservation functionalities, e-shop UI/UX, integrating business processes into a CRM system, and connecting a payment gateway.",
        tech: ["React", "TypeScript", "Strapi", "Pipedrive", "REST API"],
        website: "https:www.rentek.cz",
        github: "https://github.com/MrHyaena/grasston",
      },
      {
        name: "Shopr - Subscription creation service (live)",
        text: "E-shops typically don't have the option for automated recurring orders. The goal of this project was to enable customers to create such subscriptions. It's a full-stack application that connects the system itself with the Stripe payment gateway, Pipedrive CRM, and emailing.",
        tech: ["React", "Express", "MongoDB", "Stripe", "Pipedrive"],
        github: "https://github.com/MrHyaena/shopr",
      },
    ],
  },
  work: {
    subheading: "Work experience",
    position: [
      {
        heading: "Project manager",
        text: "In the company, I became a versatile team asset once again. My responsibilities included launching the AI-powered call center, managing the website and API requests related to lead handling, overseeing the network of business partners, running email marketing campaigns, and handling various other larger and smaller projects.",
        date: "September 2024 - Now",
      },
      {
        heading: "Full-Cycle Sales Representative",
        text: "I was responsible for the full sales cycle of an e-commerce application. This included lead generation, presenting the application, negotiating terms, closing contracts, and providing ongoing client support.",
        date: "October 2023 - August 2024",
      },
    ],
  },
};
