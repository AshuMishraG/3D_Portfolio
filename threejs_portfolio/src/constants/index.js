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
      points: [
         "Directed the Value Aligners (Cybersecurity) stack by architecting a multi-agent AI coordinator, enabling fully automated intake-to-report pipelines and improving risk assessment precision by 50% via implementing a web deepresearch agent.",
         "Advanced college application matching accuracy by 25% by leading end-to-end development of the Nische (EdTech) platform's full frontend, its complementary knowledge graph-based backend, and an integrated chatbot interface.",
         "Accelerated critical email data retrieval by 40% for the FreightX (Logistics) platform by architecting a high-throughput, thread-based agent system utilizing a novel asynchronous Unipile integration for enhanced email processing.",
         "Upgraded the agent platform by streamlining CortexON orchestrator with new SDKs and refactored prompts, engineering a real-time MCP UI monitoring dashboard, accelerating agent deployment by 40% and response times by 25%.",
      ],
      icon: "/assets/agentic.webp",
      link: "https://www.theagentic.ai/",
      animation: "salute",
   },
   {
      id: 2,
      name: "ibentosAI",
      pos: "AI Research Intern",
      duration: "Sep 2024 – Mar 2025",
      points: [
         "Augmented 3D user interaction and boosted AI response accuracy by 20% by fine-tuning conversational models and collaborating with the Metaverse team to seamlessly integrate them into immersive virtual environments.",
         "Elevated overall reliability by 25% by developing sophisticated AI-powered automation tools that optimized complex internal workflows, secured API communications, and streamlined real-time data processing.",
         "Lifted user engagement by 35% by designing a lightweight, plug-and-play iframe popup for seamless client website integration, enabling instant, no-code deployment for non-technical users and simplifying onboarding.",
         "Reduced critical response latency by 30% by refactoring complex asynchronous event processing from legacy recursive callbacks to modern, maintainable async/await loops, improving code readability and performance.",
      ],
      icon: "/assets/ibentos.webp",
      link: "https://www.ibentos.ai/",
      animation: "clapping",
   },
   {
      id: 3,
      name: "D2i Technology",
      pos: "Software Engineer Intern",
      duration: "Jun 2024 – Sep 2024",
      points: [
         "Achieved 99.9% real-time remote monitoring uptime for Siemens S7-1200 PLCs by engineering a complete IoT telemetry system on a Raspberry Pi 4, interfacing via the Snap7 protocol for industrial-grade data acquisition.",
         "Bolstered system scalability and data integrity by deploying containerized MS SQL Server instances in Docker, significantly reducing query latency by 35% in high-demand, high-concurrency industrial scenarios.",
         "Boosted user engagement by 50% and amplified operational insights by creating a fully interactive, real-time analytics dashboard, leveraging Grafana and Appsmith for a superior and more intuitive user experience.",
         "Cut network latency by 30% and enhanced system fault tolerance by devising an innovative hybrid network architecture that securely merged the Twingate zero-trust network with localized edge computing.",
      ],
      icon: "/assets/d2iTechnology.webp",
      link: "https://d2itechnology.com",
      animation: "victory",
   },
];
