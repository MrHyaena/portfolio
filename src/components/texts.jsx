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
      "A jak jsem se dostal k programování? V jednu chvíli mě prostě přestala bavit omezení plynoucí z no-code aplikací a pustil jsem se tak planou parou do webového vývoje. Po zhruba 5 měsících jsem měl první full-stack appku na tvorbu předplatných, která stále běží.",
    textThree:
      "No a osobně - miluji sport, zvířata, hluboké debaty a lasagne. Rád se učím nové věci, jen se někdy stane, že kvůli nim nestíhám jíst nebo spát. Jsem celkem soutěživý typ, nicméně férovost a upřímnost je pro mě na prvním místě.",
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
        name: "Shopr - Služba pro tvorbu předplatných (live)",
        text: "E-shopy standardně nemají možnost automatizovaných opakovaných objednávek. Cílej projektu bylo zákazníkům umožnit, aby si takové předplatné vytvořili. Jde o full-stack aplikaci, která v sobě propojuje kromě samotného systému i platební bránnu Stripe, CRM Pipedrive a emailing.",
        tech: ["React", "Express", "MongoDB", "Stripe", "Pipedrive"],
        website: "https://www.shopr.cz",
        github: "https://github.com/MrHyaena/shopr",
      },
      {
        name: "Chatovací aplikace",
        text: "Cílem bylo naučit se pořádně pracovat s relační databází Postgres a websockety. Uživatelé aplikace mají vlastní účet, mohou vytvořit soukromé místnosti a pozvat do nich ostatní uživatele. Chat probíhá v živém režimu skrze websockety.",
        tech: ["React", "TypeScript", "Express", "Postgres", "Websockety"],
        github: "www.github.ct",
      },
      {
        name: "Content Delivery Network",
        text: "Cílem projektu bylo naučit se s Typescriptem a proniknout do kontejnerovacího systému Kubernetes. Samotné funkce aplikaci jsou jako u standardního CDN systému, tedy správa souborů, load balancing a odesílání odkazů na soubory skrze API requesty.",
        tech: ["React", "TypeScript", "Express", "Postgres"],
        github: "www.github.ct",
      },
    ],
  },
  work: {
    subheading: "Pracovní zkušenosti",
    position: [
      {
        heading: "Projektový manažer",
        text: "Ve firmě se ze mě stala znovu všestranná posila týmu. Mým úkolem bylo spustit AI callcentrum, starat se o chod webu a API requesty týkající se propisování leadů, spravovat síť obchodních partnerů, rozběhnout emailingové kampaně a další větší či menší projekty.",
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
    subheading: "About me",
    textOne:
      "I’d describe myself as a versatile individual with roots in the world of investments and finance. This background shaped my economic thinking, which naturally influences the way I approach projects, work, and everyday decisions. Around the same time, I also started writing articles for online media, where I honed my ability to craft compelling, story-driven copy.",
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
        name: "Shopr – A Live Platform for Building and Managing Subscription-Based Services",
        text: "E-commerce platforms typically lack built-in support for automated recurring orders. The goal of this project was to enable customers to easily create their own subscription plans. Shopr is a full-stack application that integrates not only the core subscription system but also payment processing via Stripe, customer relationship management through Pipedrive, and email automation.",
        tech: ["React", "Express", "MongoDB", "Stripe", "Pipedrive"],
        webpage: "https://www.shopr.cz",
        github: "https://github.com/MrHyaena/shopr",
      },
      {
        name: "Messaging Platform",
        text: "The goal of the project was to gain hands-on experience with relational databases (PostgreSQL) and real-time communication via WebSockets. Users can create their own accounts, set up private chat rooms, and invite others to join. All messaging is handled in real time through WebSocket connections.",
        tech: ["React", "Express", "Postgres", "Websockety"],
        webpage: "www.shopr.cz",
        github: "www.github.ct",
      },
      {
        name: "Content Delivery Network",
        text: "The goal of the project was to gain proficiency with TypeScript and explore containerization using Kubernetes. The core functionality of the application mirrors that of a standard CDN system, including file management, load balancing, and serving file links via API requests.",
        tech: ["Něco", "Jiného", "Tady"],
        webpage: "www.shopr.cz",
        github: "www.github.ct",
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
