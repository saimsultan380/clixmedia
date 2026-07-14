"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const points = [
  "Subscriber growth",
  "View counts",
  "Lead increases",
  "Search ranking screenshots",
  "Full analytics reporting",
];

export function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".result-fade",
      { y: 32, opacity: 0 },
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

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-12 py-28 md:py-36 bg-canvas border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="result-fade result-card mb-8 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#FA871F] animate-pulse" />
            <span className="uppercase text-white">The Proof</span>
          </div>
          <h2 className="result-fade text-4xl sm:text-5xl md:text-6xl font-display text-white uppercase leading-[0.95] tracking-tight mb-5">
            Real Numbers,{" "}
            <span className="text-accent">Not Promises.</span>
          </h2>
          <p className="result-fade text-lg text-content-muted font-sans font-light leading-relaxed max-w-md mb-10">
            We&apos;ll show you the exact same data and dashboards we show our
            clients.
          </p>

          <ul className="result-fade flex flex-col max-w-md">
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-4 py-3.5 border-b border-white/10 first:border-t"
              >
                <span className="font-mono text-xs text-accent tabular-nums shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base sm:text-lg font-display uppercase tracking-tight text-white/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-fade relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[560px] overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
            alt="Video editing workspace with timeline and performance review"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-canvas/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/20" />
          <div className="absolute inset-0 bg-accent/15 mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
