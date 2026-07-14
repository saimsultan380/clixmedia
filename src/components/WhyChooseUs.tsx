"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".choose-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  const points = [
    "Local keyword research",
    "Neighborhood-focused strategy",
    "Long-term organic growth",
    "SEO-first video optimization",
    "Leads, not just likes"
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-canvas">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-5/12">
          <div className="choose-fade mb-8 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase">Why Choose Us</span>
          </div>
          <h2 className="choose-fade text-4xl sm:text-5xl md:text-6xl font-display text-white mb-8 uppercase leading-[0.95] tracking-tight">
            Most Agencies Treat Real Estate Marketing Like Any Other Social Content. 
            <span className="block text-accent mt-4">We Don't.</span>
          </h2>
          <p className="choose-fade text-xl text-content-muted leading-relaxed font-sans font-light max-w-lg">
            We specialize exclusively in marketing for real estate professionals who want highly-targeted local search visibility, actual inbound leads, and measurable ROI.
          </p>
        </div>
        
        <div className="w-full lg:w-7/12 pt-8 lg:pt-0">
          <ul className="flex flex-col w-full border-t border-white/10">
            {points.map((point, i) => (
              <li 
                key={i} 
                className="choose-fade group flex items-center gap-6 py-8 md:py-10 border-b border-white/10 hover:border-accent/50 cursor-default transition-colors duration-500 relative pl-1"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-lg" />
                
                <div className="relative z-10 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent transition-all duration-500 group-hover:scale-110">
                  <Check className="w-5 h-5 text-white/30 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <span className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-display text-white/50 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 uppercase tracking-tight">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
