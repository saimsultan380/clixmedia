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
      className="px-6 md:px-12 py-28 md:py-36 bg-black border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Content Column */}
        <div>
          {/* Eyebrow badge with transparent bg and light-white border to match other sections */}
          <div className="result-fade mb-8 inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-transparent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase text-white">The Proof</span>
          </div>
          
          <h2 className="result-fade text-4xl sm:text-5xl md:text-6xl font-display text-white uppercase leading-[0.95] tracking-tight mb-6">
            Real Numbers, <span className="text-accent">Not Promises.</span>
          </h2>
          
          <p className="result-fade text-base sm:text-lg text-content-muted font-sans font-light leading-relaxed max-w-md mb-10">
            We believe in complete transparency. We'll show you the exact same real-time analytics, subscriber growth, and inbound lead dashboards we track for our clients.
          </p>

          <ul className="result-fade flex flex-col max-w-md w-full">
            {points.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-4 py-4 border-b border-white/10 first:border-t transition-all duration-300 group/item cursor-default"
              >
                <span className="font-mono text-sm text-accent font-bold tabular-nums shrink-0 w-6 group-hover/item:translate-x-1 transition-transform duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base sm:text-lg font-display uppercase tracking-wider text-white/80 group-hover/item:text-white transition-colors duration-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image Column (Proof screenshot with border-white/20 and no canvas dim overlays) */}
        <div className="result-fade relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[560px] overflow-hidden rounded-2xl border border-white/20 bg-[#0e0f11] group">
          <img
            src="/The Proof.jpg"
            alt="Proof analytics dashboard showing client growth"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-102"
          />
          {/* No dark masking overlay so that the user's proof details, charts, and numbers are 100% visible and clear */}
        </div>

      </div>
    </section>
  );
}
