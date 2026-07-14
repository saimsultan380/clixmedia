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
    <section ref={containerRef} className="px-6 md:px-12 py-24 border-t border-white/10 bg-canvas-alt">
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
            <span className="text-5xl md:text-7xl font-display text-white mb-4">Thousands</span>
            <span className="text-sm font-mono tracking-widest uppercase text-content-muted">Of Local Homebuyers Reached</span>
          </div>
        </div>
        <div className="stat-item relative rounded-2xl p-[1px] overflow-hidden group max-w-5xl mx-auto shadow-[0_0_60px_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Animated border line */}
          <div
            className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, #FA871F 100%)"
            }}
          />

          {/* Inner Content Box */}
          <div className="relative bg-[#16171c] rounded-2xl p-8 md:p-12 z-10 w-full h-full border border-white/10">
            <p className="text-2xl md:text-3xl text-content leading-relaxed font-sans font-light">
              We've helped agents, brokers, and teams turn real estate marketing videos into <span className="text-white font-medium">real inbound leads</span>. Not just views. Not just likes. Actual buyers and sellers reaching out first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
