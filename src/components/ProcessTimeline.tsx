"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    tl.to(".progress-line-desktop", { height: "100%", ease: "none" }, 0);
    tl.to(".progress-line-mobile", { height: "100%", ease: "none" }, 0);

    gsap.fromTo(
      ".step-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  const steps = [
    { title: "Book a Call", desc: "We discuss your market, your goals, and see if we're a good fit." },
    { title: "Channel Audit", desc: "We analyze your current content or plan your new channel strategy from scratch." },
    { title: "Strategy Session", desc: "You get a custom blueprint mapped to local search intent in your specific area." },
    { title: "Consistent Growth", desc: "We execute. You film, we handle the SEO, editing, thumbnails, and growth." },
  ];

  const StepContent = ({ step, i, align }: { step: any, i: number, align: 'left' | 'right' }) => (
    <div className={`relative flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} pl-12 md:pl-0 z-10 w-full`}>
      {/* Mobile Dot */}
      <div className="md:hidden absolute left-[4px] top-2 w-6 h-6 rounded-full bg-[#050505] border border-accent flex items-center justify-center shadow-[0_0_15px_rgba(255,59,0,0.5)] z-20">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      {/* Mobile Bottom Mask (hides line below last dot) */}
      {i === steps.length - 1 && (
        <div className="md:hidden absolute left-[0px] top-[20px] bottom-[-200px] w-[30px] bg-[#050505] z-10" />
      )}

      {/* Massive Background Number */}
      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[120px] font-display text-white/[0.03] pointer-events-none select-none -z-10 ${align === 'right' ? 'md:-right-8' : 'md:-left-8'}`}>
        0{i + 1}
      </div>

      <span className="w-fit text-accent font-mono text-sm tracking-widest uppercase mb-4 inline-block bg-accent/10 px-3 py-1 rounded-full border border-accent/20 relative z-20">Phase 0{i + 1}</span>
      <h3 className="text-3xl md:text-4xl font-display text-white uppercase tracking-wide mb-4 relative z-20">{step.title}</h3>
      <p className="text-lg md:text-xl text-content-muted font-sans font-light leading-relaxed max-w-sm relative z-20">
        {step.desc}
      </p>
    </div>
  );

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-24">
          <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-6 py-2 text-sm font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="uppercase">Our Process</span>
          </div>
        </div>

        <div className="relative">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5 rounded-full z-0" />
          <div className="progress-line-desktop hidden md:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-accent h-0 shadow-[0_0_15px_#FA871F] rounded-full z-0" />

          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-[15px] top-[20px] bottom-0 w-[2px] bg-white/5 rounded-full z-0" />
          <div className="progress-line-mobile md:hidden absolute left-[15px] top-[20px] w-[2px] bg-accent h-0 shadow-[0_0_15px_#FA871F] rounded-full z-0" />

          <div className="flex flex-col space-y-12 md:space-y-24 relative z-20">
            {steps.map((step, i) => (
              <div key={i} className="step-item relative flex flex-col md:flex-row items-center justify-between w-full group">

                {/* Left Side */}
                <div className="w-full md:w-[45%] flex justify-end">
                  {i % 2 === 0 && <StepContent step={step} i={i} align="right" />}
                </div>

                {/* Desktop Center Marker */}
                <div className="hidden md:flex relative z-20 w-10 h-10 rounded-full border-2 border-white/10 bg-[#050505] items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(255,59,0,0.6)] transition-all duration-500">
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-500" />
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[45%] flex justify-start mt-8 md:mt-0">
                  {i % 2 !== 0 && <StepContent step={step} i={i} align="left" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
