"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "Do I need to be an expert in YouTube SEO to get results?",
      a: "No. That's what we handle. You focus on filming, we handle keyword research, titles, descriptions, and tags so your videos actually show up in search."
    },
    {
      q: "Will my videos rank if my channel is brand new?",
      a: "Yes, if they're optimized correctly. Ranking depends more on search intent match and video optimization than channel age. New channels can rank fast with the right strategy."
    },
    {
      q: "How is this different from just posting videos myself?",
      a: "Posting gets views from people who already follow you. Optimizing for search gets you in front of people actively searching for a home in your area, people who don't know you yet but are ready to buy or sell."
    },
    {
      q: "How long before I see results?",
      a: "Most agents start seeing initial traction, views, watch time, and early rankings, within the first 60 to 90 days. Real lead flow typically builds by month 3 to 6, as videos climb search rankings and compound over time."
    },
    {
      q: "Do I have to film the videos myself?",
      a: "Yes, you're the face your audience trusts. But that's all you do. We handle the scripting guidance, editing, SEO, thumbnails, and posting, so filming is the only thing on your plate."
    },
    {
      q: "Can you edit videos I've already filmed?",
      a: "Yes. Send us your raw footage and we'll turn it into a polished, search-optimized video ready to publish."
    },
    {
      q: "Do you work with brand new channels?",
      a: "Yes. New channels can rank quickly when the content is built around the right keywords and search intent from day one. You don't need history or subscribers to start showing up in search."
    }
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".faq-fade",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
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
    <section
      ref={containerRef}
      className="relative px-6 md:px-12 py-28 md:py-36 bg-canvas-alt overflow-hidden border-y border-white/5"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="faq-fade mb-6 inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-content-muted bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="uppercase">FAQ</span>
          </div>
          <h2 className="faq-fade text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white uppercase leading-[0.95] tracking-tight">
            Frequently Asked{" "}
            <span className="text-accent">Questions</span>
          </h2>
          <p className="faq-fade mt-6 text-lg md:text-xl text-content-muted font-sans font-light leading-relaxed max-w-xl">
            Straight answers about ranking, timelines, filming, and what we handle for you.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onClick,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`faq-fade group relative border-b border-white/10 transition-colors duration-500 ${
        isOpen ? "border-accent/40" : "hover:border-white/20"
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent pointer-events-none transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />

      <button
        className="relative z-10 w-full text-left py-7 md:py-9 flex items-start gap-5 md:gap-8 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span
          className={`mt-1 shrink-0 font-mono text-sm tracking-widest transition-colors duration-300 ${
            isOpen ? "text-accent" : "text-white/25 group-hover:text-white/50"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-xl sm:text-2xl md:text-3xl font-display uppercase tracking-tight leading-snug transition-colors duration-300 ${
            isOpen ? "text-white" : "text-white/55 group-hover:text-white"
          }`}
        >
          {faq.q}
        </span>

        <span
          className={`mt-1 shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "border-accent bg-accent text-white"
              : "border-white/15 bg-white/5 text-accent group-hover:border-accent/60"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" strokeWidth={2.5} />
          ) : (
            <Plus className="w-4 h-4" strokeWidth={2.5} />
          )}
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 opacity-0 relative z-10">
        <p className="pl-[3.25rem] md:pl-[4.5rem] pr-14 md:pr-16 pb-8 md:pb-10 text-content-muted font-sans font-light text-base md:text-lg leading-relaxed max-w-3xl">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
