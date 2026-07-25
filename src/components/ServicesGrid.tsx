"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  const services = [
    {
      title: "Real Estate Video Marketing",
      desc: "Videos built to attract buyers and sellers who are actively searching for homes in your specific area right now.",
      href: "/services/video-editing"
    },
    {
      title: "YouTube SEO",
      desc: "We help you rank for the exact local searches your future clients are already typing into YouTube every day.",
      href: "/services/youtube-growth"
    },
    {
      title: "Video Editing",
      desc: "Clean, professional edits that keep viewers watching longer and leave them with a strong impression of your brand.",
      href: "/services/video-editing"
    },
    {
      title: "Thumbnail Design",
      desc: "Thumbnails designed to get more clicks from search results and suggested video feeds across YouTube.",
      href: "/services/thumbnail-design"
    },
    {
      title: "Content Strategy",
      desc: "A steady stream of video ideas, so you never run out of things to film or post.",
      href: "/services/youtube-growth"
    },
    {
      title: "Channel Management",
      desc: "Every upload is fully optimized for reach, so your content keeps working long after you stop filming.",
      href: "/services/youtube-growth"
    }
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">
      {/* Background is pure black - no bg shadow or other light glows as requested */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Inspired by screenshot layout: split-line text aligned right) */}
        <div className="flex flex-col mb-16 select-none">
          <span className="text-xs font-mono tracking-widest text-accent uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-none uppercase tracking-tight">
            Done-for-You Marketing
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-none uppercase tracking-tight text-right mt-2 sm:mt-4 md:mt-6 opacity-85">
            Transforming Views Into Leads
          </h2>
        </div>

        {/* 3x2 Grid layout (3 cards per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const isActive = activeCard === i;
            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                onClick={() => setActiveCard(isActive ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(isActive ? null : i);
                  }
                }}
                className={`service-card group relative p-8 bg-black rounded-2xl border border-white/20 transition-all duration-500 h-full cursor-pointer hover:-translate-y-1 ${
                  isActive ? "-translate-y-1" : ""
                }`}
              >
                
                {/* Top Row: Card Number & Right Arrow Button */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-sm font-mono transition-colors duration-500 ${
                    isActive ? "text-white/70" : "text-white/30 group-hover:text-white/70"
                  }`}>
                    0{i + 1}.
                  </span>
                  
                  {/* Arrow Button (Solid orange on hover) */}
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-accent border-accent text-black"
                      : "border-white/20 text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-black"
                  }`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                {/* Card Title (Uppercase) */}
                <h3 className="text-xl font-display text-white mb-4 uppercase tracking-wider">
                  {service.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-sm sm:text-base text-content-muted font-sans font-light leading-relaxed">
                  {service.desc}
                </p>

                {/* Invisible hover helper Link overlay */}
                <Link href={service.href} className="absolute inset-0 z-20 pointer-events-none" aria-label={`Learn more about ${service.title}`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
