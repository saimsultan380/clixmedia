"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function ServiceHero({ badge, h1, subhead }: { badge: string, h1: string, subhead: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".s-hero-fade",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 pt-40 pb-20 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="s-hero-fade inline-block text-content-muted hover:text-white font-mono text-sm tracking-widest uppercase mb-12 transition-colors">
          ← Back to Services
        </Link>
        <div className="s-hero-fade mb-6 inline-flex items-center space-x-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest text-white/80 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{badge}</span>
        </div>
        <h1 className="s-hero-fade text-5xl md:text-7xl font-display text-white mb-8 uppercase leading-tight">
          {h1}
        </h1>
        <p className="s-hero-fade text-xl md:text-2xl font-sans font-light text-content-muted leading-relaxed max-w-3xl">
          {subhead}
        </p>
      </div>
    </section>
  );
}

export function DeliverablesList({ items }: { items: string[] }) {
  return (
    <section className="px-6 md:px-12 py-16 bg-canvas-alt border-y border-white/10">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm font-mono tracking-widest text-accent uppercase mb-8">Core Deliverables</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start space-x-4">
              <span className="w-2 h-2 mt-2 bg-accent flex-shrink-0" />
              <span className="text-lg text-white font-sans font-light tracking-wide">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MetricsRow({ metrics }: { metrics: string[] }) {
  return (
    <section className="px-6 md:px-12 py-16 bg-canvas border-b border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-between">
        {metrics.map((metric, i) => {
          const parts = metric.split("·");
          const val = parts[0] ? parts[0].trim() : metric;
          // some metrics are split by spaces, let's just parse roughly
          const spaceIdx = val.indexOf(" ");
          const numberPart = spaceIdx > -1 ? val.substring(0, spaceIdx) : val;
          const labelPart = spaceIdx > -1 ? val.substring(spaceIdx + 1) : "";

          return (
            <div key={i} className="flex flex-col">
              <span className="text-5xl md:text-6xl font-display text-white mb-2">{numberPart}</span>
              <span className="text-sm font-mono tracking-widest text-content-muted uppercase">{labelPart || val}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function WorkflowSteps({ steps }: { steps: { title: string, desc: string }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".w-step",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="px-6 md:px-12 py-32 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-sm font-mono tracking-widest text-accent uppercase mb-16">Service Launch Workflow</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="w-step bg-canvas-alt p-8 border border-white/5">
              <span className="text-3xl font-display text-white/20 mb-6 block">0{i + 1}</span>
              <h4 className="text-2xl font-display text-white uppercase mb-4">{step.title}</h4>
              <p className="text-content-muted font-sans font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TwoColumnTextSection({ content }: { content: string }) {
  return (
    <section className="px-6 md:px-12 py-20 bg-canvas border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-xl md:text-2xl font-sans font-light text-white leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  );
}

export function ServiceCTA({ h2, body, btn }: { h2: string, body: string, btn: string }) {
  return (
    <section className="px-6 md:px-12 py-32 bg-accent text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase leading-tight">{h2}</h2>
        <p className="text-xl font-sans font-light text-white/90 mb-10 leading-relaxed">{body}</p>
        <Link href="/book" className="inline-block bg-canvas text-white px-10 py-5 rounded-full font-sans uppercase text-sm tracking-widest font-bold hover:bg-canvas-alt transition-colors">
          {btn}
        </Link>
      </div>
    </section>
  );
}
