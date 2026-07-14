"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const TITLE = "Turn Real Estate Marketing Videos Into Your Next Buyer or Seller";
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
      className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #FA871F 0%, transparent 40%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left pt-6 lg:pt-0 justify-center">
          <div className="hero-fade mb-6 inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase">Available for Projects</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white mb-8 leading-[0.95]">
            {TITLE_WORDS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden align-top pr-[0.2em]"
              >
                <span className="hero-word inline-block">{word}</span>
              </span>
            ))}
          </h1>
          <p className="hero-fade text-lg sm:text-xl text-content-muted max-w-2xl mb-10 font-sans leading-relaxed">
            We help real estate agents turn video marketing into a steady source
            of qualified buyers and sellers. Strategy, filming guidance,
            editing, SEO, and channel growth, all handled for you.
          </p>
          <div className="hero-fade flex flex-row flex-wrap gap-3 w-full sm:w-auto">
            <Link
              href="/book"
              className="bg-accent text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-sans uppercase text-xs sm:text-sm tracking-wider font-bold hover:bg-accent-hover transition-colors text-center flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/audit"
              className="border border-white/20 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-sans uppercase text-xs sm:text-sm tracking-wider font-bold hover:bg-white/10 transition-colors text-center flex-1 sm:flex-none whitespace-nowrap flex items-center justify-center"
            >
              Get Free Audit
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 hero-fade h-[300px] sm:h-[400px] lg:h-auto relative rounded-3xl overflow-hidden border border-white/10 group">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Real Estate Video Marketing"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 mix-blend-multiply bg-accent opacity-20 pointer-events-none group-hover:opacity-10 transition-opacity duration-700" />
        </div>
      </div>
    </section>
  );
}
