import { Code, Lightbulb, Palette, } from "lucide-react"


 export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#skills", label: "Skills" },
];

export const SPONSER_LOGO = [
    { img:"/sponser/cloud9.svg", name:"Cloud9"},
    { img:"/sponser/codecademy.svg", name:"codecademy"},
    { img:"/sponser/discord.svg", name:"discord"},
    { img:"/sponser/git.svg", name:"git"},
    { img:"/sponser/linkedin.svg", name:"linkedin"},
    { img:"/sponser/loom.svg", name:"loom"},
    { img:"/sponser/microsoft.svg", name:"microsoft"},
    { img:"/sponser/postman.svg", name:"postman"},
    { img:"/sponser/sentry.svg", name:"sentry"},
]


export  const SERVICES = [
    {
      title: "UI/UX Design",
      image: "/empty.jpg",
    },
    {
      title: "Web Design",
      image: "/design.jpg",
    },
    {
      title: "Web Development",
      image: "/dev.jpg",
    },
  ]

  export const SKILLS = {
    language: [
      { img: "/skill/javascript.svg", skill: "JavaScript", desc: "Versatile language for building dynamic web applications." },
      { img: "/skill/typescript.svg", skill: "TypeScript", desc: "Strongly typed JavaScript for scalable and maintainable code." },
      { img: "/skill/nodejs.svg", skill: "Node.js", desc: "Backend runtime for building fast and scalable server applications." },
    ],
    framework: [
      { img: "/skill/nextjs.svg", skill: "Next.js", desc: "React framework for optimized and server-side rendered web apps." },
      { img: "/skill/expressjs.svg", skill: "Express.js", desc: "Minimalist web framework for building Node.js server applications." },
    ],
    libarary: [
      { img: "/skill/react.svg", skill: "React", desc: "Library for building interactive and reusable UI components." },
      { img: "/skill/redux.svg", skill: "Redux", desc: "State management library for predictable app behavior." },
      { img: "/skill/prisma.svg", skill: "Prisma", desc: "Next-generation ORM for working with databases in TypeScript and JavaScript." },
      { img: "/skill/webrtc.svg", skill: "WebRTC", desc: "Real-time communication technology for audio, video, and data sharing between peers." },
      { img: "/skill/socket-io.svg", skill: "Socket.IO", desc: "Library for real-time communication between clients and servers using WebSockets." }, 
      { img: "/skill/react-query.png", skill: "React Query", desc: "Data fetching and state management library for asynchronous operations in React applications."}
    ],
    ai: [
      { img: "/skill/chatgpt.svg", skill: "ChatGPT", desc: "AI-powered conversational assistant for automation and development." },
      { img: "/skill/gemini.svg", skill: "Gemini", desc: "Google's AI model for text generation, analysis, and automation." },
    ],
    database: [
      { img: "/skill/mongodb.svg", skill: "MongoDB", desc: "NoSQL database for flexible and scalable data storage." },
      { img: "/skill/firebase.svg", skill: "Firebase", desc: "Backend-as-a-service for authentication, database, and hosting." },
      { img: "/skill/supabase.svg", skill: "Supabase", desc: "Open-source Firebase alternative for authentication, database, and APIs." },
      { img: "/skill/sql.svg", skill: "SQL", desc: "Structured query language for managing relational databases." },
      { img: "/skill/nosql.svg", skill: "NoSQL", desc: "Schema-less databases designed for scalability and flexibility." },
    ],
    tools: [
      { img: "/skill/github.svg", skill: "GitHub", desc: "A cloud-based platform for version control and collaborative software development." },
      { img: "/skill/figma.svg", skill: "Figma", desc: "Collaborative UI/UX design tool for creating interactive prototypes." },
    ],
  };
  
  export const Reviews = [
    {
      name: "Robert J.",
      role: "CEO at XCorp",
      avatar: "/people/person.jpg",
      content:
        "Sajib's expertise in UI/UX and development transformed our platform. His keen eye for design and attention to detail ensured a seamless user experience. Highly recommend!",
    },
    {
      name: "Janica Z.",
      role: "Designer",
      avatar: "/people/person2.jpg",
      content:
        "Working with Sajib was a fantastic experience! His ability to balance aesthetics with functionality is truly commendable. Looking forward to more collaborations.",
    },
    {
      name: "Justin B.",
      role: "Developer",
      avatar: "/people/person3.jpg",
      content:
        "Sajib is an exceptional developer who delivers high-quality code and intuitive designs. His problem-solving skills and efficiency make him a valuable asset to any project.",
    },
  ];
  




    export const STEPS = [
      {
        number: "01",
        title: "Concept",
        description: " I build high-performance, user-friendly web solutions with Next.js and React, focusing on seamless UI/UX, scalability, and efficiency to create modern, engaging digital experiences. 🚀",
        color: "#A855F7",
        icon: Lightbulb,
        img:"/idea.svg"
      },
      {
        number: "02",
        title: "Design",
        description: "I create intuitive, visually appealing designs that enhance user experience and align with brand identity, ensuring seamless functionality and engagement. 🎨✨",
        color: "#22C55E",
        icon: Palette,
        img:"/web-design.svg"
      },
      {
        number: "03",
        title: "Development",
        description: "I build fast, scalable, and user-friendly web applications with clean code and modern technologies, ensuring seamless performance and functionality. 💻",
        color: "#3B82F6",
        icon: Code,
        img:"/devlopment.svg"
      },
    ]
    
    interface PROJECTPROPS{
      title:string;
      des:string;
      img:string,
      href:string,
    }

    export const PROJECT: PROJECTPROPS[] = [
      {
        title: "Car Maintenance & Service Platform",
        des: "Car Gerate is an innovative platform that simplifies vehicle maintenance by offering real-time diagnostics and service scheduling",
        img: "/portfolio/project.jpg",
        href: "https://motocare.vercel.app",
      },
      {
        title: "My Life Chronicles",
        des: "A personal journey through experiences, lessons, and moments that define my story.",
        img: "/portfolio/project1.jpg",
        href: "",
      },
      {
        title: "Delicious Food Recipes",
        des: "Explore mouthwatering recipes that bring flavors to life, from quick meals to gourmet delights.",
        img: "/portfolio/project2.jpg",
        href: "https://restaurant-beige-psi.vercel.app",
      },
      {
        title: "Adventurer’s Hiking Guide",
        des: "Discover breathtaking trails, essential gear tips, and survival hacks for your next hiking adventure.",
        img: "/portfolio/project3.jpg",
        href: "",
      },
      {
        title: "Mastering Dance Moves",
        des: "Learn expressive and stylish dance steps across different genres to boost confidence and rhythm.",
        img: "/portfolio/project4.jpg",
        href: "",
      },
    
      

    ];
    