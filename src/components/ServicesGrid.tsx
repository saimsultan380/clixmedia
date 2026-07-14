"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Video, Search, Scissors, Image as ImageIcon, Lightbulb, Sliders } from "lucide-react";

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
        duration: 0.8,
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
      icon: Video
    },
    {
      title: "YouTube SEO",
      desc: "We help you rank for the exact local searches your future clients are already typing into YouTube every day.",
      icon: Search
    },
    {
      title: "Video Editing",
      desc: "Clean, professional edits that keep viewers watching longer and leave them with a strong impression of your brand.",
      icon: Scissors
    },
    {
      title: "Thumbnail Design",
      desc: "Thumbnails designed to get more clicks from search results and suggested video feeds across YouTube.",
      icon: ImageIcon
    },
    {
      title: "Content Strategy",
      desc: "A steady stream of video ideas, so you never run out of things to film or post.",
      icon: Lightbulb
    },
    {
      title: "Channel Management",
      desc: "Every upload is fully optimized for reach, so your content keeps working long after you stop filming.",
      icon: Sliders
    }
  ];

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="service-card flex justify-start mb-12">
          <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#FA871F] animate-pulse" />
            <span className="uppercase text-white">Services</span>
          </div>
        </div>
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
                className={`service-card group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 h-full cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] active:-translate-y-1 ${
                  isActive ? "-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.5)]" : ""
                }`}
              >
                <div className="absolute inset-0 bg-white/5 transition-colors duration-500" />

                <div
                  className={`absolute inset-[-100%] animate-[spin_3s_linear_infinite] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                  }`}
                  style={{
                    background: "conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 60%, #FA871F 100%)"
                  }}
                />

                <div className="relative bg-[#111216] rounded-[15px] p-8 md:p-10 z-10 w-full h-full flex flex-col overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent transition-opacity duration-700 pointer-events-none ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                        isActive
                          ? "bg-accent border-accent"
                          : "bg-white/5 border-white/10 group-hover:bg-accent group-hover:border-accent group-active:bg-accent group-active:border-accent"
                      }`}
                    >
                      <service.icon
                        className={`w-5 h-5 transition-colors duration-500 ${
                          isActive
                            ? "text-white"
                            : "text-accent group-hover:text-white group-active:text-white"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-4xl font-display transition-colors duration-500 ${
                        isActive
                          ? "text-accent/50"
                          : "text-accent/30 group-hover:text-accent/50 group-active:text-accent/50"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="relative z-10 text-2xl font-display uppercase text-white mb-4">{service.title}</h3>
                  <p className="relative z-10 text-content-muted font-sans leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
