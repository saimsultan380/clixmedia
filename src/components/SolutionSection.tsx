"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".solution-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  const deliverables = [
    "Keyword research",
    "Content strategy",
    "Video SEO",
    "Editing",
    "Thumbnail design",
    "Titles and descriptions",
    "Uploading and scheduling",
    "Growth strategy and reporting",
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-canvas-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "4rem 4rem"
      }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="solution-fade inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#FA871F] animate-pulse" />
          <span className="uppercase">The Solution</span>
        </div>

        <h2 className="solution-fade text-5xl sm:text-6xl md:text-7xl font-display text-white mb-6 max-w-5xl uppercase leading-[0.95] tracking-tight">
          Done-for-You Marketing For Agents Who Want Results
        </h2>

        <p className="solution-fade text-xl md:text-2xl font-sans font-light text-content-muted mb-20 max-w-3xl">
          You show up and film. <span className="text-white font-medium">We handle absolutely everything else.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {deliverables.map((item, i) => {
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
                className={`solution-fade group relative p-8 bg-[#0A0B0D] rounded-3xl border transition-all duration-500 text-left flex flex-col justify-between min-h-[160px] cursor-pointer hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(255,59,0,0.1)] active:-translate-y-1 ${
                  isActive
                    ? "-translate-y-2 border-white/20 shadow-[0_10px_40px_rgba(255,59,0,0.1)]"
                    : "border-white/5"
                }`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                  }`}
                />

                <div className="hidden sm:block absolute top-[47px] left-[64px] right-0 h-[1px] bg-white/10 z-0" />
                {i % 4 !== 3 && (
                  <div className="hidden lg:block absolute top-[47px] -right-[16px] w-[16px] h-[1px] bg-white/10 z-0" />
                )}
                {i % 2 !== 1 && (
                  <div className="hidden sm:block lg:hidden absolute top-[47px] -right-[16px] w-[16px] h-[1px] bg-white/10 z-0" />
                )}

                <div className="sm:hidden absolute top-[64px] left-[47px] bottom-0 w-[1px] bg-white/10 z-0" />
                {i !== deliverables.length - 1 && (
                  <div className="sm:hidden absolute -bottom-[16px] left-[47px] w-[1px] h-[16px] bg-white/10 z-0" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="relative z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-mono text-xs border border-accent shadow-[0_0_10px_rgba(255,59,0,0.3)] transition-colors duration-500">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-sans font-medium tracking-wide relative z-10 bg-[#0A0B0D] inline-block pr-2">
                    {item}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
