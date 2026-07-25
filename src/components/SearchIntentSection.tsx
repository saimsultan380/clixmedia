"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SEARCH_QUERIES = [
  '"Homes in Dallas"',
  '"Living in Miami"',
  '"Moving to Phoenix"',
];

export function SearchIntentSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".intent-fade",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SEARCH_QUERIES.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-12 py-28 md:py-36 text-white flex flex-col items-center text-center overflow-hidden bg-black border-t border-white/20"
    >
      {/* Background modern house image */}
      <img
        src="/People searching for.jpg"
        alt="Real estate house search background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-102"
      />

      {/* Reduced overlay so background is clearly visible */}
      <div className="absolute inset-0 bg-black/45 z-0" />
      
      {/* Top and Bottom Gradients to blend seamlessly into pure black content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 opacity-90 z-0" />

      {/* Content Container */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Paragraph: Intro */}
        <p className="intent-fade text-lg md:text-2xl font-sans font-light text-white/90 mb-12 max-w-3xl leading-relaxed">
          Social posts disappear in a day.{" "}
          <span className="font-medium text-white">
            Real estate videos keep working for months, sometimes years.
          </span>
        </p>

        {/* Search Bar Container */}
        <div className="intent-fade w-full max-w-4xl mb-12 flex flex-col items-center">
          
          {/* Eyebrow solid orange block with black text to match screenshot */}
          <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest uppercase text-black bg-accent px-3 py-1.5 rounded-md mb-6 select-none">
            People searching for
          </span>

          {/* Glassy Search Input Card */}
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md px-5 py-5 md:px-8 md:py-6">
            
            {/* Search Icon Container */}
            <span className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-accent">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>

            {/* Scrolling query display */}
            <div className="relative h-10 sm:h-12 md:h-14 overflow-hidden px-8 sm:px-14 md:px-16">
              {SEARCH_QUERIES.map((query, index) => (
                <span
                  key={query}
                  aria-hidden={index !== activeIndex}
                  className={`absolute inset-0 flex items-center justify-center whitespace-nowrap text-xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : index === (activeIndex - 1 + SEARCH_QUERIES.length) % SEARCH_QUERIES.length
                        ? "-translate-y-full opacity-0"
                        : "translate-y-full opacity-0"
                  }`}
                >
                  {query}
                </span>
              ))}
            </div>

            {/* Glowing active indicator dot */}
            <span className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

        {/* Paragraph: Outro */}
        <p className="intent-fade text-lg md:text-xl font-sans font-light leading-relaxed max-w-3xl text-white/80">
          ...already have buying intent. When your videos show up for these
          searches, you&apos;re in front of the right person at the right
          moment,{" "}
          <span className="font-medium text-white">
            before your competitors even know they exist.
          </span>
        </p>

      </div>
    </section>
  );
}
