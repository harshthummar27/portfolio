import React from "react";
import { GrideLine } from "../utils/GrideLine";
import { FaFacebook, FaGit, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";

const Contect = () => {
  return (
    <section id="contact" className="py-20 px-6 relative border border-[#5555]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-neutral-300 mb-2">
          Get In <span className="text-outline">Touch</span>
        </h2>
        <p className="text-neutral-400 text-center mx-auto max-w-xl mb-12">
          “Turn Your Vision Into Reality — Contact Me.”
        </p>
        <GrideLine />
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Contect Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-white/10 text-white/50 backdrop-blur-lg rounded-full mr-4 border border-white/20">
                  <FaLocationArrow />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-neutral-300">Gandhinagar, Gujrat</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-white/10 text-white/50 backdrop-blur-lg rounded-full mr-4 border border-white/20">
                  <MdEmail />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-neutral-300">harshthummar542@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-white/10 text-white/50 backdrop-blur-lg rounded-full mr-4 border border-white/20">
                  <PiPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-neutral-300">+91 9978507602</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 text-white/60">
                <a href="https://www.instagram.com/harrsh.patell?igsh=NmV5MHZkMm01M3Nu" className="p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border border-white/20 transition-colors cursor-pointer">
                  <BsInstagram />
                </a>
                <a href="https://github.com/harshthummar27" className="p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border border-white/20 transition-colors cursor-pointer">
                  <FaGit />
                </a>
                <a href="https://x.com/HP878700?t=b86BlRPDbjjKUm3uMdFbTg&s=08" className="p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border border-white/20 transition-colors cursor-pointer">
                  <BsTwitterX />
                </a>
                <a href="https://www.linkedin.com/in/harsh-thummar27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border border-white/20 transition-colors cursor-pointer">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              send me a message
            </h3>

            <form action="" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor=""
                    className="block mb-1 text-sm text-neutral-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-1.5 bg-white/10 ring-white/20 text-white rounded-lg ring focus:ring-teal-400 focus:outline-none backdrop-blur-3xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-1 text-sm text-neutral-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-1.5 bg-white/10 ring-white/20 text-white rounded-lg ring focus:ring-teal-400 focus:outline-none backdrop-blur-3xl"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-1 text-sm text-neutral-300"
                >
                  Subjects
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-1.5 bg-white/10 ring-white/20 text-white rounded-lg ring focus:ring-teal-400 focus:outline-none backdrop-blur-3xl"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-1 text-sm text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full px-4 py-1.5 bg-white/10 ring-white/20 text-white rounded-lg ring focus:ring-teal-400 focus:outline-none backdrop-blur-3xl"
                />
              </div>

              <button className="px-6 py-1.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-sm hover:opacity-90 transition-opacity w-full cursor-pointer text-white/80">Send Messege</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;
