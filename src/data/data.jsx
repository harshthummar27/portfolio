import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GiMaterialsScience, GiSandsOfTime } from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineProject,
  AiOutlinePicture,
  AiOutlineMail,
} from "react-icons/ai";
// import { IoBagHandleOutline } from "react-icons/io5";
import adiance from "../assets/portfolio/adiance.png";
import arcis from "../assets/portfolio/arcisai.png";
import zomatoclone from "../assets/portfolio/zomatoclon.png";

import { BsGlobeCentralSouthAsia } from "react-icons/bs";

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Next JS", icon: <RiNextjsFill className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      {
        name: "Material UI",
        icon: <GiMaterialsScience className="text-blue-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    ],
  },
];

export const navItems = [
  { id: "home", label: "Home", path: "/home", icon: <AiFillHome /> },
  { id: "about", label: "About", path: "/about", icon: <AiOutlineUser /> },
  { id: "skills", label: "Skills", path: "/skills", icon: <AiOutlineCode /> },
  {
    id: "experience",
    label: "Experience",
    path: "/experience",
    icon: <AiOutlineProject />,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    path: "/portfolio",
    icon: <AiOutlinePicture />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    icon: <AiOutlineMail />,
  },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      '"Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    content:
      '"Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "David Wilson",
    position: "Founder, StartupHub",
    content:
      '"Imam\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "Adiance Tecnology Website",
    category: "React JS",
    image: adiance,
  },
  {
    title: "Arcis AI VMS",
    category: "Frontend Development",
    image: arcis,
  },
  {
    title: "Zomato Clone",
    category: "Web Development",
    image: zomatoclone,
  },
];
// experience data
export const experiences = [
  {
    id: 1,
    company: "Vmukti solutions Pvt Ltd",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Javascript Developer",
    period: "June 2024 - Nov 2024",
    description:
      "At VMukti Solutions, I contributed to the development of scalable and high-performing web applications with a strong focus on JavaScript, React.js, and modern frontend frameworks. My role involved building dynamic user interfaces, optimizing performance, and ensuring responsive, cross-browser-compatible designs.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 2,
    company: "Desire Infotech",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "React JS Developer(trainee)",
    period: "3 Months",
    description:
      "Successfully completed an intensive 3-month training program focused on modern frontend development with React.js. The course covered building responsive user interfaces, state management, component-driven architecture, React hooks, and integration with APIs. Gained hands-on experience by working on real-world projects and following best practices in UI/UX, Git version control, and deployment",
    skills: ["React JS", "Redux", "JavaScript", "HTML-CSS", "C, C++"],
  },
];
