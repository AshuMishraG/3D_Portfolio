export const navLinks = [
   {
      id: 1,
      name: "Home 🏠",
      href: "#home",
   },
   {
      id: 2,
      name: "Myself 🧑🏻‍🔧",
      href: "#about",
   },
   {
      id: 3,
      name: "Work 👨🏻‍💻",
      href: "#work",
   },
   {
      id: 4,
      name: "Lets Connect! 🚀",
      href: "#contact",
   },
];

export const clientReviews = [
   {
      id: 1,
      name: "Emily Johnson",
      position: "Marketing Director at GreenLeaf",
      img: "assets/review1.webp",
      review:
         "Working with Ashutosh Mishra was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
   },
   {
      id: 2,
      name: "Mark Rogers",
      position: "Founder of TechGear Shop",
      img: "assets/review2.webp",
      review:
         "Ashutosh's expertise in software development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
   },
   {
      id: 3,
      name: "John Dohsas",
      position: "Project Manager at UrbanTech ",
      img: "assets/review3.webp",
      review:
         "I can't say enough good things about Ashu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
   },
   {
      id: 4,
      name: "Ether Smith",
      position: "CEO of BrightStar Enterprises",
      img: "assets/review4.webp",
      review:
         "Ashutosh Mishra was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
   },
];

export const myProjects = [
   {
      title: "AI ManavRachna Teacher",
      desc: "AI ManavRachna Teacher is an innovative educational platform that leverages Azure Cloud's Text-to-Speech and Three.js for creating interactive 3D avatars. It provides an immersive learning experience with AI-driven teaching assistants.",
      subdesc:
         "Utilizing cutting-edge technologies like Azure Cloud TTS, R3F, and Three.js, this project offers a unique approach to digital education, enhancing engagement and understanding through 3D visualizations.",
      href: "https://ai-manavrachna-teacher-pym9ym6ep-ashumishrags-projects.vercel.app",
      texture: "/textures/project/aiManavrachna.mp4",
      logo: "/assets/Nanami.webp",
      logoStyle: {
         backgroundColor: "#000000",
         border: "0.2px solid #CCCCCC",
         boxShadow: "0px 0px 60px 0px #AAAAAA4D",
      },
      spotlight: "/assets/spotlight1.webp",
      tags: [
         {
            id: 1,
            name: "Azure Cloud TTS",
            path: "/assets/Azure.webp",
         },
         {
            id: 2,
            name: "Three.js",
            path: "/assets/threejs.webp",
         },
         {
            id: 3,
            name: "R3F",
            path: "/assets/react.svg",
         },
         {
            id: 4,
            name: "NextJS",
            path: "/assets/nextjs.webp",
         },
         {
            id: 5,
            name: "Tailwind",
            path: "/assets/tailwindcss.webp",
         },
      ],
   },
   // {
   //   title: "Imaginify - AI Photo Manipulation App",
   //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
   //   subdesc:
   //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
   //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
   //   texture: "/textures/project/ImagifyDemo.mp4",
   //   logo: "/assets/project-logo5.png",
   //   logoStyle: {
   //     backgroundColor: "#1C1A43",
   //     border: "0.2px solid #252262",
   //     boxShadow: "0px 0px 60px 0px #635BFF4D",
   //   },
   //   spotlight: "/assets/spotlight5.png",
   //   tags: [
   //     {
   //       id: 1,
   //       name: "React.js",
   //       path: "/assets/react.svg",
   //     },
   //     {
   //       id: 2,
   //       name: "TailwindCSS",
   //       path: "assets/tailwindcss.png",
   //     },
   //     {
   //       id: 3,
   //       name: "TypeScript",
   //       path: "/assets/typescript.png",
   //     },
   //     {
   //       id: 4,
   //       name: "Framer Motion",
   //       path: "/assets/framer.png",
   //     },
   //   ],
   // },
   // {
   //   title: "Horizon - Online Banking Platform",
   //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
   //   subdesc:
   //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
   //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
   //   texture: "/textures/project/BankingSystemDemo.mp4",
   //   logo: "/assets/project-logo4.png",
   //   logoStyle: {
   //     backgroundColor: "#0E1F38",
   //     border: "0.2px solid #0E2D58",
   //     boxShadow: "0px 0px 60px 0px #2F67B64D",
   //   },
   //   spotlight: "/assets/spotlight4.png",
   //   tags: [
   //     {
   //       id: 1,
   //       name: "React.js",
   //       path: "/assets/react.svg",
   //     },
   //     {
   //       id: 2,
   //       name: "TailwindCSS",
   //       path: "assets/tailwindcss.png",
   //     },
   //     {
   //       id: 3,
   //       name: "TypeScript",
   //       path: "/assets/typescript.png",
   //     },
   //     {
   //       id: 4,
   //       name: "Framer Motion",
   //       path: "/assets/framer.png",
   //     },
   //   ],
   // },
   {
      title: "AriseGYM",
      desc: "AriseGYM is a dynamic gym website offering a comprehensive database of exercises, complete with tutorial videos powered by the YouTube API. It provides users with a seamless experience to explore and learn various fitness routines.",
      subdesc:
         "The platform is designed to cater to diverse fitness categories, ensuring users can easily navigate and understand workout techniques.",
      href: "http://arise-gym.surge.sh",
      texture: "/textures/project/AriseGymDemo.mp4",
      logo: "/assets/AriseGym.webp",
      logoStyle: {
         backgroundColor: "#000000",
         border: "0.2px solid #CCCCCC",
         boxShadow: "0px 0px 60px 0px #AAAAAA4D",
      },
      spotlight: "/assets/spotlight3.webp",
      tags: [
         {
            id: 1,
            name: "React.js",
            path: "/assets/react.svg",
         },
         {
            id: 2,
            name: "Node.js",
            path: "/assets/nodejs.webp",
         },
         {
            id: 3,
            name: "YouTube API",
            path: "/assets/youtube.webp",
         },
      ],
   },
   {
      title: "Forecastify",
      desc: "Forecastify is a sophisticated weather forecasting platform that provides users with precise meteorological data, including real-time updates and location-specific forecasts. It is designed to assist users in planning outdoor activities with confidence.",
      subdesc:
         "Leveraging Node.js and Vue.js, Forecastify integrates advanced APIs to deliver accurate weather predictions and severe weather alerts, ensuring users are always informed and prepared.",
      href: "http://forecastify.surge.sh",
      texture: "/textures/project/ForcastifyDemo.mp4",
      logo: "/assets/favicon.svg",
      logoStyle: {
         backgroundColor: "#000000",
         border: "0.2px solid #CCCCCC",
         boxShadow: "0px 0px 60px 0px #AAAAAA4D",
      },
      spotlight: "/assets/spotlight2.webp",
      tags: [
         {
            id: 1,
            name: "Node.js",
            path: "/assets/nodejs.webp",
         },
         {
            id: 2,
            name: "Vue.js",
            path: "/assets/Javascript.webp",
         },
         {
            id: 3,
            name: "OpenWeather API",
            path: "/assets/openweather.webp",
         },
      ],
   },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
   return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall
         ? [4, -5, 0]
         : isMobile
         ? [5, -5, 0]
         : isTablet
         ? [5, -5, 0]
         : [7, -5.5, 0],
      reactLogoPosition: isSmall
         ? [3, 4, 0]
         : isMobile
         ? [5, 4, 0]
         : isTablet
         ? [5, 4, 0]
         : [6, 3, 0],
      ringPosition: isSmall
         ? [-5, 7, 0]
         : isMobile
         ? [-10, 10, 0]
         : isTablet
         ? [-12, 10, 0]
         : [-14, 7, 0],
      targetPosition: isSmall
         ? [-5, -10, -10]
         : isMobile
         ? [-9, -10, -10]
         : isTablet
         ? [-11, -7, -10]
         : [-11, -11, -10],
   };
};

export const workExperiences = [
   {
      id: 1,
      name: "TheAgentic",
      pos: "AI Developer",
      duration: "Apr 2025 – Present",
      summary:
         "Leading multi-agent product squads delivering cybersecurity, logistics, and admissions copilots across TheAgentic's venture portfolio.",
      icon: "/assets/agentic.webp",
      link: "https://www.theagentic.ai/",
      animation: "salute",
      projects: [
         {
            name: "Value Aligners Cyber Risk Copilot",
            description:
               "Directed the Value Aligners stack end-to-end, orchestrating autonomous audit workflows and stakeholder reporting.",
            impact: [
               "Architected a multi-agent AI coordinator that automates intake-to-report pipelines, improving risk assessment precision by 50%.",
               "Streamlined the CortexON orchestrator with SDK upgrades and a real-time MCP monitoring dashboard, accelerating deployments by 40% and agent responses by 25%.",
            ],
            links: [
               {
                  label: "Value Aligners Live",
                  url: "https://value-aligners-staging.theagentic.ai/",
               },
            ],
            technologies: [
               "CortexON",
               "Multi-Agent Systems",
               "Prompt Engineering",
               "Next.js",
            ],
         },
         {
            name: "Nishe Admissions Copilot",
            description:
               "Built an AI admissions coach that matches students to universities and automates essay review cycles.",
            impact: [
               "Shipped the entire frontend, knowledge-graph powered backend, and chat interface, increasing match accuracy by 25%.",
            ],
            links: [
               {
                  label: "Nishe Preview",
                  url: "https://nishe.netlify.app/profile",
               },
            ],
            technologies: ["React", "Knowledge Graphs", "LLM Agents"],
         },
         {
            name: "FreightX Logistics Copilot",
            description:
               "Launched a logistics-focused agent that triages high-volume email threads and surfaces critical shipment insights.",
            impact: [
               "Engineered a high-throughput thread-based agent with an asynchronous Unipile integration, cutting critical email retrieval time by 40%.",
            ],
            links: [
               {
                  label: "FreightX Sandbox",
                  url: "https://freightx-sandbox.netlify.app/",
               },
            ],
            technologies: ["Node.js", "Unipile", "Async Workers"],
         },
      ],
   },
   {
      id: 2,
      name: "ibentosAI",
      pos: "AI Research",
      duration: "Sep 2024 – Mar 2025",
      summary:
         "Researched and productized conversational AI experiences powering immersive metaverse events and automation pipelines.",
      icon: "/assets/ibentos.webp",
      link: "https://www.ibentos.ai/",
      animation: "clapping",
      projects: [
         {
            name: "Metaverse Conversational Avatar",
            description:
               "Integrated fine-tuned conversational models into ibentosAI's metaverse booth experiences.",
            impact: [
               "Coordinated with the Metaverse team to blend 3D avatar gestures with contextual responses, boosting interaction quality by 20%.",
               "Crafted a plug-and-play iframe popup for client sites, enabling no-code deployment and lifting engagement by 35%.",
            ],
            technologies: ["Three.js", "LLM Fine-Tuning", "Web Components"],
         },
         {
            name: "Automation Reliability Initiative",
            description:
               "Hardened ibentosAI's internal automation platform for scale.",
            impact: [
               "Built AI-powered automation tools that optimized internal workflows and secured API communications, improving reliability by 25%.",
               "Refactored recursive callback flows into maintainable async/await loops, reducing response latency by 30%.",
            ],
            technologies: ["Node.js", "TypeScript", "Async Patterns"],
         },
      ],
   },
   {
      id: 3,
      name: "D2i Technology",
      pos: "Software Engineer",
      duration: "Jun 2024 – Sep 2024",
      summary:
         "Engineered industrial IoT telemetry and analytics tooling for Siemens-driven manufacturing floors.",
      icon: "/assets/d2iTechnology.webp",
      link: "https://d2itechnology.com",
      animation: "victory",
      projects: [
         {
            name: "Industrial IoT Telemetry Platform",
            description:
               "Delivered a full-stack telemetry system for Siemens S7-1200 PLCs on Raspberry Pi edge devices.",
            impact: [
               "Achieved 99.9% remote monitoring uptime by interfacing via Snap7 for industrial-grade data acquisition.",
               "Containerized MS SQL Server workloads in Docker, cutting high-concurrency query latency by 35%.",
            ],
            technologies: ["Raspberry Pi", "Snap7", "Docker", "MS SQL Server"],
         },
         {
            name: "Operations Insight Dashboard",
            description:
               "Unlocked real-time manufacturing analytics and alerts for cross-functional stakeholders.",
            impact: [
               "Built an interactive Grafana and Appsmith dashboard that increased user engagement by 50%.",
               "Devised a hybrid Twingate + edge network architecture that reduced latency by 30% while improving fault tolerance.",
            ],
            technologies: ["Grafana", "Appsmith", "Twingate", "Edge Computing"],
         },
      ],
   },
];
