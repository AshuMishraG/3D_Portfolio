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
      img: "assets/review1.jpg",
      review:
         "Working with Ashutosh Mishra was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
   },
   {
      id: 2,
      name: "Mark Rogers",
      position: "Founder of TechGear Shop",
      img: "assets/review2.jpg",
      review:
         "Ashutosh's expertise in software development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
   },
   {
      id: 3,
      name: "John Dohsas",
      position: "Project Manager at UrbanTech ",
      img: "assets/review3.jpg",
      review:
         "I can't say enough good things about Ashu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
   },
   {
      id: 4,
      name: "Ether Smith",
      position: "CEO of BrightStar Enterprises",
      img: "assets/review4.jpg",
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
      logo: "/assets/Nanami.jpg",
      logoStyle: {
         backgroundColor: "#000000",
         border: "0.2px solid #CCCCCC",
         boxShadow: "0px 0px 60px 0px #AAAAAA4D",
      },
      spotlight: "/assets/spotlight1.png",
      tags: [
         {
            id: 1,
            name: "Azure Cloud TTS",
            path: "/assets/Azure.png",
         },
         {
            id: 2,
            name: "Three.js",
            path: "/assets/threejs.png",
         },
         {
            id: 3,
            name: "R3F",
            path: "/assets/react.svg",
         },
         {
            id: 4,
            name: "NextJS",
            path: "/assets/nextjs.png",
         },
         {
            id: 5,
            name: "Tailwind",
            path: "/assets/tailwindcss.png",
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
      logo: "/assets/AriseGym.jpg",
      logoStyle: {
         backgroundColor: "#000000",
         border: "0.2px solid #CCCCCC",
         boxShadow: "0px 0px 60px 0px #AAAAAA4D",
      },
      spotlight: "/assets/spotlight3.png",
      tags: [
         {
            id: 1,
            name: "React.js",
            path: "/assets/react.svg",
         },
         {
            id: 2,
            name: "Node.js",
            path: "/assets/nodejs.png",
         },
         {
            id: 3,
            name: "YouTube API",
            path: "/assets/youtube.png",
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
      spotlight: "/assets/spotlight2.png",
      tags: [
         {
            id: 1,
            name: "Node.js",
            path: "/assets/nodejs.png",
         },
         {
            id: 2,
            name: "Vue.js",
            path: "/assets/Javascript.png",
         },
         {
            id: 3,
            name: "OpenWeather API",
            path: "/assets/openweather.png",
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
         "Architected and optimized agent lifecycle and plugin management in CortexON, enabling scalable multi-agent orchestration.",
         "Revamped the MCP UI and integrated the MCP client for seamless agent workflow and monitoring.",
         "Enhanced FreightX backend with LogFire-based error handling, improving reliability and observability for LLM pipelines.",
         "Developing a LinkedIn automation agent leveraging advanced AI agents for autonomous content posting, engagement, and workflow integration.",
      ],
      icon: "/assets/agentic.jpg",
      link: "https://www.theagentic.ai/",
      animation: "salute",
   },
   {
      id: 2,
      name: "ibentosAI",
      pos: "AI Researcher",
      duration: "Sep 2024 – March 2025",
      points: [
         "Fine-tuned conversational AI models using OpenAI's Assistant API, improving response accuracy by 20%.",
         "Collaborated with the Metaverse team to integrate AI-driven conversational agents into immersive 3D environments.",
         "Developed AI-powered automation tools to streamline internal workflows, optimize API communications, and enhance real-time data processing efficiency, thereby improving system reliability by 25%.",
         "Designed a lightweight, plug-and-play iframe popup for seamless client website integration, achieving a 35% uplift in user engagement through instant deployment with minimal code and full cross-platform compatibility.",
         "Refactored asynchronous event processing by replacing recursive callbacks with async/await loops and Promise-based delays, reducing response latency by 30% and improving code maintainability.",
      ],
      icon: "/assets/ibentos.jpg",
      link: "https://www.ibentos.ai/",
      animation: "clapping",
   },
   {
      id: 3,
      name: "D2i Technology",
      pos: "Software Engineer",
      duration: "June 2024 – Sep 2024",
      points: [
         "Engineered an IoT telemetry system on Raspberry Pi 4, communicating with Siemens S7-1200 PLCs via Snap7.",
         "Revamped secure multi-user data storage by deploying MS SQL Server containers in Docker, bolstering system scalability, ensuring robust data integrity, and reducing latency in high-demand scenarios.",
         "Crafted an interactive analytics dashboard with Grafana and Appsmith for real-time data visualization and analytics, enhancing operational insights and boosting user engagement by 50%.",
         "Devised a hybrid networking architecture by merging Twingate with edge computing on Raspberry Pi, cutting network latency by 30%, bolstering fault tolerance, and optimizing bandwidth for improved operational efficiency.",
      ],
      icon: "/assets/d2iTechnology.jpg",
      link: "https://d2itechnology.com",
      animation: "victory",
   },
];
