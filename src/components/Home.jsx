import React from "react";
import { HeadingHero } from "../utils/HeadingHero";
import { FaFacebook, FaGit } from "react-icons/fa";
import { BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Home = () => {
    return(
        <section id={'home'} className="relative page-wrapper min-h-screen flex items-center justify-center pt-16 pb-20">
            <div className="absolute inset-0 bg-[url('./assets/hero/slide-2.png')] bg-cover bg-center bg-no-repeat"/>
            <div className="absolute inset-0"/>
                <div className="container z-10 mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-light capitalize tracking-wide text-teal-400">I'm Harsh Patel</h3>
                        <HeadingHero />
                        <p className="mt-4 text-white/40 max-w-xl">“I craft modern, responsive web interfaces with React.js.” <br /> “Delivering seamless user experiences through clean and efficient code.”</p>
                        <div className="mt-6 flex flex-wrap sm:justify-start justify-center text-white/70 text-sm font-medium gap-4">
                        <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 cursor-pointer">React JS</button>
                        <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 cursor-pointer">Frontend Devlopment</button>
                        <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 cursor-pointer">UI/UX</button>

                        </div>
                        <div className="flex mt-8 gap-5 justify-center md:justify-start">
                            <a  href="https://github.com/harshthummar27" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer"><FaGit/></a>
                            <a href="https://x.com/HP878700?t=b86BlRPDbjjKUm3uMdFbTg&s=08" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer"><BsTwitterX/></a>
                            <a href="https://www.instagram.com/harrsh.patell?igsh=NmV5MHZkMm01M3Nu" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer"><BsInstagram/></a>
                            <a href="https://www.linkedin.com/in/harsh-thummar27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer"><LiaLinkedin/></a>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href="#experience" className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-700 text-white hover:opacity-90 transition-opacity cursor-pointer">View My Work</a>

                            <a href="/Harsh.Resume.pdf" download="Harsh.Resume.pdf" className="px-6 py-2 rounded-full bg-white/10 text-white hover:opacity-90 transition-opacity cursor-pointer">Download CV</a>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}

export default Home;