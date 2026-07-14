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
      className="relative px-6 md:px-12 py-28 md:py-36 text-white flex flex-col items-center text-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="absolute inset-0 bg-canvas/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas/70" />
      <div className="absolute inset-0 bg-accent/15 mix-blend-multiply" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <p className="intent-fade text-lg md:text-2xl font-sans font-light text-white/85 mb-14 md:mb-16 max-w-3xl leading-relaxed">
          Social posts disappear in a day.{" "}
          <span className="font-medium text-white">
            Real estate videos keep working for months, sometimes years.
          </span>
        </p>

        <div className="intent-fade w-full max-w-4xl mb-14 md:mb-16">
          <p className="text-sm font-mono tracking-[0.25em] uppercase text-white/50 mb-6">
            People searching for
          </p>

          <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-[0_0_60px_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.45)] px-5 py-5 md:px-8 md:py-6">
            <span className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </span>

            <div className="relative h-10 sm:h-12 md:h-14 overflow-hidden px-14 md:px-16">
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

            <span className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 hidden sm:inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </div>

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
