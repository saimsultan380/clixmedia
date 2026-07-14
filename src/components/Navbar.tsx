"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/youtube-growth", label: "YouTube Growth" },
  { href: "/services/thumbnail-design", label: "Thumbnail Design" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: menuRef });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = contextSafe(() => {
    if (!isOpen) {
      setIsOpen(true);
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        ".mobile-nav-item",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.35,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => setIsOpen(false),
      });
    }
  });

  const closeMenu = contextSafe(() => {
    if (!isOpen) return;
    gsap.to(menuRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => setIsOpen(false),
    });
  });

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-7xl py-4 px-6 md:px-8 flex justify-between items-center transition-all duration-300 rounded-full border border-white/10 ${
            isScrolled
              ? "bg-canvas-alt/80 backdrop-blur-md shadow-lg"
              : "bg-canvas-alt/40 backdrop-blur-sm"
          }`}
        >
          <Link
            href="/"
            className="z-50 flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          >
            <img
              src="/clixmedia_logo.png"
              alt="Clix Media"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-display uppercase tracking-widest text-white">
              Clix Media
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-mono text-white/80 z-50">
            <Link href="/services/video-editing" className="hover:text-accent transition-colors">
              Video Editing
            </Link>
            <Link href="/services/youtube-growth" className="hover:text-accent transition-colors">
              YouTube Growth
            </Link>
            <Link href="/services/thumbnail-design" className="hover:text-accent transition-colors">
              Thumbnail Design
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Link
              href="/book"
              className="bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent-hover transition-colors font-sans uppercase text-xs tracking-wider font-bold"
            >
              Book Call
            </Link>
          </div>
          <button
            type="button"
            className="md:hidden z-50 text-white font-mono uppercase tracking-widest text-sm"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 flex flex-col bg-canvas overflow-hidden"
        style={{ transform: "translateY(-100%)" }}
        aria-hidden={!isOpen}
      >
        <div className="relative z-10 flex flex-col flex-1 px-6 pt-28 pb-10">
          <nav className="flex flex-col gap-1 flex-1 justify-center">
            {mobileLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="mobile-nav-item group flex items-baseline justify-start gap-4 py-4 border-b border-white/10"
              >
                <span className="font-mono text-xs text-accent/70 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white group-hover:text-accent transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mobile-nav-item mt-8 flex flex-row gap-3">
            <Link
              href="/book"
              onClick={closeMenu}
              className="flex-1 text-center bg-accent text-white px-3 py-3.5 rounded-full font-sans uppercase text-[11px] sm:text-xs tracking-wider font-bold hover:bg-accent-hover transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/audit"
              onClick={closeMenu}
              className="flex-1 text-center border border-white/20 text-white px-3 py-3.5 rounded-full font-sans uppercase text-[11px] sm:text-xs tracking-wider font-bold hover:bg-white/10 transition-colors"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
