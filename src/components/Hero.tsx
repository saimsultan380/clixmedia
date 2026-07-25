"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const TITLE = "Turn Real Estate Marketing Videos Into Your Next Buyer or Seller.";
const TITLE_WORDS = TITLE.split(" ");


export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-word",
      { y: "100%", skewY: 10, opacity: 0 },
      {
        y: "0%",
        skewY: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".hero-fade",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-36 pb-16 md:pt-44 md:pb-20 bg-black overflow-x-hidden"
    >
      {/* Background is pure black - no bg shadow gradient as requested */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">
        
        {/* Eyebrow: Orange, uppercase, small */}
        <div className="hero-fade mb-4">
          <span className="text-sm font-mono tracking-widest uppercase text-accent font-bold">
            Real Estate Video Marketing
          </span>
        </div>

        {/* Main Heading: Massive, Uppercase, Bold */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white mb-8 leading-[0.95] max-w-6xl">
          {TITLE_WORDS.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-top pr-[0.2em]"
            >
              <span className="hero-word inline-block">{word}</span>
            </span>
          ))}
        </h1>

        {/* Split Layout: Subheadline & CTAs */}
        <div className="hero-fade flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-4">
          <p className="text-content-muted font-sans font-light leading-relaxed max-w-3xl text-base sm:text-lg">
            We help real estate agents turn video marketing into a steady source of qualified buyers and sellers. Strategy, filming guidance, editing, SEO, and channel growth, all handled for you.
          </p>
          
          <div className="flex flex-row gap-2 sm:gap-3 w-full lg:w-auto">
            <Link
              href="/book"
              className="flex-1 lg:flex-none bg-accent text-black px-3 py-3 sm:px-8 sm:py-4 rounded-lg font-sans uppercase text-[10px] sm:text-sm tracking-wider font-bold hover:bg-accent-hover transition-colors text-center whitespace-nowrap"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/audit"
              className="flex-1 lg:flex-none border border-white/20 text-white px-3 py-3 sm:px-8 sm:py-4 rounded-lg font-sans uppercase text-[10px] sm:text-sm tracking-wider font-bold hover:bg-white/10 transition-colors text-center whitespace-nowrap"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        {/* Two Images Side-by-Side (Horizontal row on all viewports) */}
        <div className="hero-fade grid grid-cols-12 gap-3 md:gap-6 mt-10 md:mt-16 w-full">
          <div className="col-span-8 h-[150px] sm:h-[300px] md:h-[400px] lg:h-[480px] relative rounded-xl sm:rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="/Image-1.jpg"
              alt="Real estate camera filming set"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-103"
            />
          </div>
          <div className="col-span-4 h-[150px] sm:h-[300px] md:h-[400px] lg:h-[480px] relative rounded-xl sm:rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="/Image-2.jpg"
              alt="Real estate video monitor editing"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-103"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
