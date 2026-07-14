"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".cta-fade",
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-12 py-32 md:py-40 text-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-canvas/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/50 to-canvas/70" />
      <div className="absolute inset-0 bg-accent/25 mix-blend-multiply" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="cta-fade flex justify-center mb-8">
          <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#FA871F] animate-pulse" />
            <span className="uppercase text-white">Next Step</span>
          </div>
        </div>
        <h2 className="cta-fade text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 uppercase leading-[0.95] tracking-tight">
          Ready to Turn Video Marketing Into Your Best Lead Source?
        </h2>
        <p className="cta-fade text-lg md:text-xl font-sans font-light text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a free strategy call and see exactly how real estate marketing
          videos can bring you more qualified buyers and sellers.
        </p>
        <div className="cta-fade">
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-accent text-white px-5 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-sans uppercase text-[11px] sm:text-sm tracking-wide sm:tracking-widest font-bold hover:bg-accent-hover active:bg-accent-hover transition-colors shadow-[0_0_40px_rgba(255,59,0,0.35)] whitespace-nowrap"
          >
            <span className="sm:hidden">Book a Free Strategy Call</span>
            <span className="hidden sm:inline">Book Your Free Strategy Call</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
