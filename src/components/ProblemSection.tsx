"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".problem-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  const points = [
    { title: "No time to film", desc: "Showings and calls take up your entire day." },
    { title: "Videos don't rank", desc: "Hours spent editing, but zero reach." },
    { title: "No views, no leads", desc: "A dead channel brings zero new clients." },
    { title: "Competitors win", desc: "They show up first in local searches." }
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="problem-fade mb-6 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="uppercase text-white">The Problem</span>
          </div>
          <h2 className="problem-fade text-5xl sm:text-6xl md:text-7xl font-display text-white mb-8 uppercase leading-[0.95] tracking-tight">
            Most Realtors Know They Should Be Doing Video Marketing
          </h2>
          <p className="problem-fade text-xl text-content-muted leading-relaxed mb-12">
            But between showings, closings, and client calls, there's no time left to film consistently, let alone edit, optimize, and post. So the videos don't get made. Or they get made and nobody sees them.
          </p>
          <div className="problem-fade inline-block relative group">
            <div className="relative px-8 py-4 bg-white/5 border border-white/20 rounded-lg">
              <p className="text-xl md:text-2xl text-white font-display tracking-widest uppercase">
                That's where we come in.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <div className="flex flex-col space-y-4">
            {points.map((point, i) => {
              const isActive = activeCard === i;
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveCard(isActive ? null : i);
                    }
                  }}
                  className={`problem-fade group relative p-6 md:p-8 bg-black rounded-2xl border border-white/20 transition-all duration-500 cursor-pointer hover:-translate-y-1 ${
                    isActive ? "-translate-y-1" : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <span
                      className={`relative z-10 text-4xl md:text-5xl font-display transition-colors duration-500 ${
                        isActive
                          ? "text-white/60"
                          : "text-white/20 group-hover:text-white/60 group-active:text-white/60"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-sans text-white font-medium tracking-wide mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm md:text-base text-content-muted font-light">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
