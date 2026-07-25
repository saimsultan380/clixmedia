"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SLIDES = [
  {
    image: "/slider-1.jpg",
    subtitle: "PRODUCED BY CLIX MEDIA",
    title: "LUXURY MODERN VILLA IN MIAMI (2025)"
  },
  {
    image: "/slider-2.jpg",
    subtitle: "PRODUCED BY CLIX MEDIA",
    title: "EXCLUSIVE CANYON RETREAT PORTFOLIO (2024)"
  },
  {
    image: "/slider-3.jpg",
    subtitle: "PRODUCED BY CLIX MEDIA",
    title: "BEACHFRONT MODERN HOUSE SHOWCASE (2025)"
  }
];

export function WorkSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".slider-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  }, { scope: containerRef });

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0.6 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="slider-fade text-center mb-16">
          <div className="inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-transparent mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase text-white">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white uppercase leading-[0.95] tracking-tight">
            Cinematic Real Estate Productions
          </h2>
        </div>

        {/* Slider Card Wrapper */}
        <div className="slider-fade w-full relative">
          <div 
            ref={slideRef}
            className="w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/20 bg-[#0e0f11] flex flex-col"
          >
            {/* Top Area: Slide Image */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src={SLIDES[activeIndex].image}
                alt={SLIDES[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] ease-out transform scale-102 animate-pulse-slow"
              />
            </div>

            {/* Bottom Area: Dark Gray Info Bar */}
            <div className="bg-[#18181b] border-t border-white/5 px-6 py-6 sm:py-8 text-center flex flex-col justify-center select-none">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-accent uppercase mb-2 block font-semibold">
                {SLIDES[activeIndex].subtitle}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white uppercase tracking-wider">
                {SLIDES[activeIndex].title}
              </h3>
            </div>
          </div>

          {/* Dots Indicator at the Bottom (Orange active dot, followed by gray inactive dots) */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-accent" : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
