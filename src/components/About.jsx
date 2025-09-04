import React from "react";
import { GrideLine } from "../utils/GrideLine";
import user from "../assets/about/img-1.jpg";

const About = () => {
    return(
        <section id="about" className="relative w-full border border-[rgba(102,102,102,0.3)] text-white flex justify-center items py-36 overflow-hidden">
            <GrideLine />
            <div className="relative px-3 z-10 flex flex-col md:flex-row items-center gap-48 max-w-6xl w-full cursor-pointer">
                <div className="relative w-72 h-72 group">
                    <img src={user} className="w-full h-full object-cover grayscale rounded-x1 group-hover:grayscale-0 transition duration-500" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-neutral-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500"/>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 border border-neutral-300 transform -translate-x-1/2 -translate-y-1/2 rotate-3 z-0 transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500"/>
                </div>

                <div className="flex-1 max-w-xl">
                    <h2 className="text-3xl font-bold border-b-2 border-neutral-500 mb-4 w-fit">About <span className="text-outline">me</span></h2>
                    <p className="text-neutral-300 mb-16 text-normal text-justifiy">I’m Harsh Patel, a dedicated and passionate software developer with a strong focus on building modern, scalable, and efficient digital solutions. I enjoy transforming complex problems into simple, elegant, and user-friendly applications that deliver real value. With a keen interest in both frontend and backend technologies, I strive to write clean, maintainable, and performance-driven code that meets industry standards and enhances user experience.</p>
                    <p className="text-neutral-300 mb-16 text-normal text-justifiy">Driven by curiosity and creativity, I specialize in frontend development, problem-solving, and building seamless experiences for users.</p>
                    <a  href="/Harsh.Resume.pdf" download="Harsh.Resume.pdf" className="px-6 py-2 border border-neutral-400 rounde-full hover-bg-white transition hover:text-neutral-700 cursor-pointer">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About;