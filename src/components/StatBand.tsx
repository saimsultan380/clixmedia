"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function StatBand() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".stat-item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-24 border-t border-white/10 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="stat-item flex flex-col">
            <span className="text-6xl md:text-8xl font-display text-white mb-4">25+</span>
            <span className="text-sm font-mono tracking-widest uppercase text-content-muted">Real Estate Channels Managed</span>
          </div>
          <div className="stat-item flex flex-col">
            <span className="text-6xl md:text-8xl font-display text-white mb-4">10M+</span>
            <span className="text-sm font-mono tracking-widest uppercase text-content-muted">Views Generated</span>
          </div>
          <div className="stat-item flex flex-col">
            <span className="text-4xl sm:text-5xl md:text-7xl font-display text-white mb-4">Thousands</span>
            <span className="text-sm font-mono tracking-widest uppercase text-content-muted">Of Local Homebuyers Reached</span>
          </div>
        </div>
        <div className="stat-item relative rounded-2xl group max-w-5xl mx-auto border border-white/10">
          {/* Inner Content Box */}
          <div className="relative bg-black rounded-2xl p-8 md:p-12 z-10 w-full h-full">
            <p className="text-2xl md:text-3xl text-content leading-relaxed font-sans font-light">
              We've helped agents, brokers, and teams turn real estate marketing videos into <span className="text-white font-medium">real inbound leads</span>. Not just views. Not just likes. Actual buyers and sellers reaching out first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
