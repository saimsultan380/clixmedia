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
      className="relative px-6 md:px-12 py-20 md:py-28 text-center overflow-hidden bg-black border-t border-white/20"
    >
      {/* Background clapperboard image */}
      <img
        src="/image-6.jpg"
        alt="Film clapperboard background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dimmed Overlay to ensure text legibility (reduced opacity so image is clearer) */}
      <div className="absolute inset-0 bg-black/45 z-0" />
      
      {/* Top and Bottom Gradients to blend seamlessly into the pure black layout */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 opacity-80 z-0" />

      {/* Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Eyebrow */}
        <span className="cta-fade text-accent font-mono text-xs sm:text-sm uppercase tracking-widest mb-6 block font-semibold">
          Ready to roll?
        </span>

        {/* Headline */}
        <h2 className="cta-fade text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 uppercase leading-[0.95] tracking-tight max-w-3xl">
          Let's Get Started on Your Film or Video Project!
        </h2>

        {/* Subheadline */}
        <p className="cta-fade text-sm sm:text-base md:text-lg font-sans font-light text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you have a clear vision or need help shaping your ideas, our team is here to guide you through every step of the production process.
        </p>

        {/* CTA Button */}
        <div className="cta-fade">
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-accent text-black px-8 py-4 sm:px-10 sm:py-5 rounded-lg font-sans uppercase text-xs sm:text-sm tracking-widest font-black hover:bg-accent-hover active:bg-accent-hover transition-colors whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
}
