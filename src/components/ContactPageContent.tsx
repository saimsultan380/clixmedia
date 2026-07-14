"use client";

import { FormEvent, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const contactDetails = [
  {
    label: "Email",
    value: "hello@clixmedia.com",
    href: "mailto:hello@clixmedia.com",
  },
  {
    label: "Book a call",
    value: "Schedule a strategy session",
    href: "/book",
  },
  {
    label: "Response time",
    value: "Usually within 24 hours",
    href: null,
  },
];

export function ContactPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-hero-fade",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
    );
  }, { scope: heroRef });

  useGSAP(() => {
    gsap.fromTo(
      ".contact-fade",
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: formRef });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center px-6 md:px-12 pt-32 pb-20 text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-canvas/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/50 via-canvas/60 to-canvas" />
        <div className="absolute inset-0 bg-accent/15 mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="contact-hero-fade mb-5 text-xs font-mono tracking-[0.25em] uppercase text-accent">
            Clix Media
          </p>
          <h1 className="contact-hero-fade text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight text-white leading-[0.92] mb-6">
            Contact Us
          </h1>
          <p className="contact-hero-fade text-lg md:text-xl font-sans font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tell us about your market, your channel, and your goals. We&apos;ll
            get back with a clear next step.
          </p>
        </div>
      </section>

      <section
        ref={formRef}
        className="px-6 md:px-12 py-20 md:py-28 bg-canvas border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="contact-fade mb-4 text-xs font-mono tracking-[0.25em] uppercase text-accent">
              Get in touch
            </p>
            <h2 className="contact-fade text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-[0.95] mb-5">
              Let&apos;s talk about growing your pipeline.
            </h2>
            <p className="contact-fade text-content-muted font-sans font-light leading-relaxed mb-10 max-w-md">
              Whether you want a free audit or a full video marketing system,
              reach out and we&apos;ll point you in the right direction.
            </p>

            <ul className="contact-fade flex flex-col gap-6">
              {contactDetails.map((item) => (
                <li key={item.label} className="border-t border-white/10 pt-5">
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-2">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-lg text-white hover:text-accent transition-colors font-sans"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-lg text-white font-sans">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="contact-fade border border-accent/30 bg-accent/5 px-6 sm:px-8 md:px-10 py-12 md:py-14 rounded-2xl">
                <p className="text-xs font-mono tracking-[0.25em] uppercase text-accent mb-4">
                  Message sent
                </p>
                <h3 className="text-3xl md:text-4xl font-display uppercase text-white mb-4 tracking-tight">
                  Thanks — we&apos;ll be in touch soon.
                </h3>
                <p className="text-content-muted font-sans font-light leading-relaxed max-w-lg">
                  Your message is in. Expect a reply within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-fade flex flex-col gap-5 border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 rounded-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/15 bg-canvas/60 px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-colors font-sans"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
                      Email
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/15 bg-canvas/60 px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-colors font-sans"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
                    Market / City
                  </span>
                  <input
                    name="market"
                    type="text"
                    placeholder="e.g. Dallas, TX"
                    className="w-full rounded-xl border border-white/15 bg-canvas/60 px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-colors font-sans"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/50">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="w-full rounded-xl border border-white/15 bg-canvas/60 px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-colors font-sans resize-y min-h-[140px]"
                  />
                </label>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-sans uppercase text-sm tracking-widest font-bold hover:bg-accent-hover transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
