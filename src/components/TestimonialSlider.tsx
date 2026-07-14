"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const testimonials = [
  {
    name: "Sarah Jenkins",
    brokerage: "Keller Williams",
    city: "Austin, TX",
    quote:
      "Since working with Clix Media, my inbound lead volume from YouTube has completely transformed my business. It's the only marketing I do now.",
    avatar:
      "https://images.unsplash.com/photo-1594744803329-eaa220420523?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
  {
    name: "Marcus Rodriguez",
    brokerage: "Compass",
    city: "Miami, FL",
    quote:
      "They handle everything. I just show up and film for 2 hours a month. I've closed 5 deals this year directly from people searching 'moving to Miami'.",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
  {
    name: "Emily Chen",
    brokerage: "eXp Realty",
    city: "Seattle, WA",
    quote:
      "The quality of the edits and the strategic approach to SEO is unmatched. My channel went from 0 to generating consistent leads in 4 months.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
  {
    name: "David Okonkwo",
    brokerage: "RE/MAX",
    city: "Atlanta, GA",
    quote:
      "I used to spend weekends posting on Instagram with zero return. Now buyers find my listing videos first and reach out already pre-qualified.",
    avatar:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
  {
    name: "Priya Patel",
    brokerage: "Coldwell Banker",
    city: "Phoenix, AZ",
    quote:
      "Their neighborhood video series put my name in front of people actively searching to move here. Two seller listings came from that alone.",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
  {
    name: "James Thornton",
    brokerage: "Sotheby's International",
    city: "Denver, CO",
    quote:
      "Clix Media doesn't chase vanity metrics. Every video is built to rank locally and convert. My pipeline finally feels predictable.",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&h=240&q=80&crop=faces",
  },
];

function useVisibleCount() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setVisible(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return visible;
}

export function TestimonialSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(nextSlide, 4500);
    return () => window.clearInterval(id);
  }, [paused, maxIndex, visibleCount]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-fade",
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-12 py-32 bg-canvas overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="testimonial-fade flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="mb-4 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="uppercase">Testimonials</span>
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase tracking-tight">
              Client Results
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-canvas transition-colors text-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent-hover transition-colors text-white"
            >
              →
            </button>
          </div>
        </div>

        <div className="testimonial-fade overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="shrink-0 px-0 lg:px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-canvas-alt p-7 md:p-8 shadow-[0_0_50px_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.35)] flex flex-col">
                  <div className="text-accent text-5xl font-display leading-none mb-4 opacity-70">
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl font-sans font-light text-white leading-relaxed flex-1 mb-8">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border border-white/15"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-white font-sans font-bold text-base uppercase tracking-wide truncate">
                        {item.name}
                      </span>
                      <span className="text-content-muted font-mono text-xs sm:text-sm tracking-wider truncate">
                        {item.brokerage} · {item.city}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-fade flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-accent"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
