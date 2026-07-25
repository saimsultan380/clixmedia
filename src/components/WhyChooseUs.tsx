"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

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
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-black relative overflow-hidden">
      {/* Background is pure black - no bg shadow or other light glows as requested */}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="choose-fade text-center mb-16 max-w-4xl">
          <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-accent bg-white/5 mb-6">
            <span className="uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white mb-6 uppercase leading-[0.95] tracking-tight">
            Most Agencies Treat Real Estate Marketing Like Any Other Social Content. We Don't.
          </h2>
          <p className="text-lg sm:text-xl text-content-muted leading-relaxed font-sans font-light max-w-2xl mx-auto">
            We specialize exclusively in marketing for real estate professionals who want highly-targeted local search visibility, actual inbound leads, and measurable ROI.
          </p>
        </div>

        {/* Bottom Split Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch mt-8">
          
          {/* Left Column: Two Vertical Images & Stats */}
          <div className="choose-fade lg:col-span-6 flex gap-4 sm:gap-6 items-stretch lg:h-[620px]">
            {/* Left Image (Tall) */}
            <div className="flex-1 min-w-0 h-[360px] sm:h-[480px] lg:h-full relative rounded-3xl overflow-hidden border border-white/20 group flex-shrink-0">
              <img
                src="/Image-15.jpg"
                alt="Real estate video editor filming"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-103"
              />
            </div>
            {/* Right side stack: Shorter Image + Stats box */}
            <div className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6">
              <div className="flex-1 min-h-[200px] sm:min-h-[280px] relative rounded-3xl overflow-hidden border border-white/20 group">
                <img
                  src="/Image-14-1.jpg"
                  alt="Real estate camera close-up"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-103"
                />
              </div>
              <div className="bg-black border border-white/20 rounded-3xl p-5 flex flex-col justify-center flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-none mb-1">
                      <span className="text-white">25</span>
                      <span className="text-accent">+</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-content-muted leading-tight">
                      Channels Managed
                    </p>
                  </div>
                  <div className="sm:border-l sm:border-white/10 sm:pl-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black leading-none mb-1">
                      <span className="text-white">10</span>
                      <span className="text-accent">M+</span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-content-muted leading-tight">
                      Views Generated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Points List & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              {/* Point 1 */}
              <div className="choose-fade relative p-6 bg-black border border-white/20 rounded-2xl">
                <span className="block text-3xl font-display font-bold text-accent mb-2">01</span>
                <h3 className="text-lg font-display text-white uppercase tracking-wider mb-2">Local SEO Focus</h3>
                <p className="text-content-muted font-sans font-light text-sm sm:text-base leading-relaxed">
                  We analyze your local market and neighborhood-specific searches to target buyers and sellers actively looking for homes in your MLS area today.
                </p>
              </div>

              {/* Point 2 */}
              <div className="choose-fade relative p-6 bg-black border border-white/20 rounded-2xl">
                <span className="block text-3xl font-display font-bold text-accent mb-2">02</span>
                <h3 className="text-lg font-display text-white uppercase tracking-wider mb-2">Organic Authority</h3>
                <p className="text-content-muted font-sans font-light text-sm sm:text-base leading-relaxed">
                  Build search rankings that generate inbound lead flow for months, and even years, after posting, long after social feed posts disappear.
                </p>
              </div>

              {/* Point 3 */}
              <div className="choose-fade relative p-6 bg-black border border-white/20 rounded-2xl">
                <span className="block text-3xl font-display font-bold text-accent mb-2">03</span>
                <h3 className="text-lg font-display text-white uppercase tracking-wider mb-2">Lead-First Content</h3>
                <p className="text-content-muted font-sans font-light text-sm sm:text-base leading-relaxed">
                  We formulate topics, hooks, and optimization blueprints geared around bringing you actual conversations with clients, not just vanity view counts.
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="choose-fade">
              <Link
                href="/book"
                className="inline-block bg-accent text-black font-bold tracking-wider uppercase px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors text-center"
              >
                Book a Strategy Call
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
