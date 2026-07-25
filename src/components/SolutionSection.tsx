"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".solution-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  const deliverables = [
    {
      title: "Keyword Research",
      desc: "We target the specific local real estate searches buyers and sellers type into YouTube daily."
    },
    {
      title: "Content Strategy",
      desc: "Custom hooks and video concepts designed to hook your local target audience from the first frame."
    },
    {
      title: "Video SEO",
      desc: "Deep search optimization to place your listings and brand at the very top of YouTube & Google search."
    },
    {
      title: "Video Editing",
      desc: "Clean, engaging, and professional edits that maximize retention and build brand authority."
    },
    {
      title: "Thumbnail Design",
      desc: "Eye-catching thumbnails custom designed to stand out in recommended and search results pages."
    },
    {
      title: "Titles & Descriptions",
      desc: "Click-worthy copywriting that drives high-quality viewers and local search index crawlability."
    },
    {
      title: "Uploading & Scheduling",
      desc: "We manage the entire backend upload process including chapters, end-screens, and tags."
    },
    {
      title: "Growth & Analytics",
      desc: "Monthly analytics reports to track viewer behaviour, subscriber growth, and inbound leads."
    }
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">
      {/* Background is pure black - no shadows or glows as requested */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Section Header */}
        <div className="solution-fade inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-transparent mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="uppercase text-white">The Solution</span>
        </div>

        <h2 className="solution-fade text-4xl sm:text-5xl md:text-6xl font-display text-white mb-6 max-w-4xl uppercase leading-[0.95] tracking-tight">
          Done-for-You Marketing For Agents Who Want Results
        </h2>

        <p className="solution-fade text-lg sm:text-xl font-sans font-light text-content-muted mb-20 max-w-2xl">
          You show up and film. <span className="text-white font-medium">We handle absolutely everything else.</span>
        </p>

        {/* Deliverables 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {deliverables.map((item, i) => {
            return (
              <div
                key={i}
                className="solution-fade group relative p-6 bg-black border border-white/20 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between h-full hover:-translate-y-1"
              >
                <div>
                  <span className="block font-mono text-sm text-accent font-bold mb-4">
                    0{i + 1}.
                  </span>
                  <h3 className="text-lg font-display text-white mb-3 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-sm text-content-muted font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
