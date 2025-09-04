import React from "react";
import { portfolioItems } from "../data/data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 page-wrapper">
      <div className="mx-auto container">
        <h2 className="text-3xl font-bold text-center text-neutral-300 mb-2">
          My <span className="text-outline">Portfolio</span>
        </h2>
        <p className="text-neutral-400 text-center mx-auto max-w-xl mb-12">
          “Showcasing My Work, Passion, and Creativity.”
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 transition-transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover transition-transform hover:scale-105"
                alt={item.title}
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              <p className="text-white/20 mt-2">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg text-white text-sm cursor-pointer border border-white/20 hover:bg-white/30 transition-colors">
          View More Project
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
