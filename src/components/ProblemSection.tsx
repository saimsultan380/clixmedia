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
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-canvas relative overflow-hidden">
      <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="problem-fade mb-6 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#FA871F] animate-pulse" />
            <span className="uppercase text-white">The Problem</span>
          </div>
          <h2 className="problem-fade text-5xl sm:text-6xl md:text-7xl font-display text-white mb-8 uppercase leading-[0.95] tracking-tight">
            Most Realtors Know They Should Be Doing Video Marketing
          </h2>
          <p className="problem-fade text-xl text-content-muted leading-relaxed mb-12">
            But between showings, closings, and client calls, there's no time left to film consistently, let alone edit, optimize, and post. So the videos don't get made. Or they get made and nobody sees them.
          </p>
          <div className="problem-fade inline-block relative group">
            <div className="absolute inset-0 bg-accent blur-xl opacity-20 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-500 rounded-lg" />
            <div className="relative px-8 py-4 bg-accent/10 border border-accent/20 rounded-lg backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-accent font-display tracking-widest uppercase">
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
                  className={`problem-fade group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] active:-translate-y-1 ${
                    isActive ? "-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.5)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-white/5 transition-colors duration-500" />

                  <div
                    className={`absolute inset-[-100%] animate-[spin_3s_linear_infinite] transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                    }`}
                    style={{
                      background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 60%, #FA871F 100%)"
                    }}
                  />

                  <div className="relative bg-[#111216] rounded-[15px] p-6 md:p-8 z-10 w-full h-full flex flex-col md:flex-row md:items-center gap-4 md:gap-6 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                      }`}
                    />

                    <span
                      className={`relative z-10 text-4xl md:text-5xl font-display transition-colors duration-500 ${
                        isActive
                          ? "text-accent/50"
                          : "text-accent/30 group-hover:text-accent/50 group-active:text-accent/50"
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
