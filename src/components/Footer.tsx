import Link from "next/link";
import type { ReactNode } from "react";

const serviceLinks = [
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/youtube-growth", label: "YouTube Growth" },
  { href: "/services/thumbnail-design", label: "Thumbnail Design" },
];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Call" },
  { href: "/audit", label: "Free Audit" },
];

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.451L1.99 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks: { href: string; label: string; icon: ReactNode }[] = [
  {
    href: "https://twitter.com",
    label: "X (Twitter)",
    icon: <IconX className="w-[18px] h-[18px]" />,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: <IconLinkedIn className="w-[18px] h-[18px]" />,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <IconYouTube className="w-[18px] h-[18px]" />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/clixmedia_logo.png"
                alt="Clix Media"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl md:text-3xl font-display uppercase tracking-widest text-white">
                Clix Media
              </span>
            </Link>
            <p className="mt-4 text-content-muted font-sans font-light leading-relaxed max-w-sm">
              Real estate video marketing for agents who want inbound leads,
              not just views.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest font-bold text-accent hover:text-white transition-colors"
            >
              Book a strategy call
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-content-muted hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-white/40 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-content-muted hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-content-muted text-sm font-mono">
            © {year} Clix Media. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full border border-white/15 text-content-muted flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
