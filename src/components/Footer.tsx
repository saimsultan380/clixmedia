import Link from "next/link";
import type { ReactNode } from "react";

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.227-8.451L1.99 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/services/video-editing", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#articles", label: "Latest Article" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services/video-editing", label: "Cinematography" },
  { href: "/services/video-editing", label: "Video Editing" },
  { href: "/services/youtube-growth", label: "Production Management" },
  { href: "/services/youtube-growth", label: "Sound Design" },
  { href: "/services/video-editing", label: "Drone Videography" },
  { href: "/services/thumbnail-design", label: "Marketing & Distribution" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: <IconFacebook className="w-4 h-4" /> },
  { href: "https://instagram.com", label: "Instagram", icon: <IconInstagram className="w-4 h-4" /> },
  { href: "https://twitter.com", label: "X (Twitter)", icon: <IconX className="w-4 h-4" /> },
  { href: "https://youtube.com", label: "YouTube", icon: <IconYouTube className="w-4 h-4" /> },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 md:pt-24 relative overflow-hidden">
      {/* Footer Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Branding */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity mb-6"
            >
              <img
                src="/clixmedia_logo.png"
                alt="Clix Media"
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-display uppercase tracking-wider text-white">
                clixmedia<span className="text-accent">.</span>
              </span>
            </Link>
            
            <p className="text-white/80 font-sans font-light leading-relaxed max-w-sm mb-8 text-sm md:text-base">
              Struggling to get leads? Our real estate marketing videos turn viewers into buyers and sellers. Strategy, editing, and growth, all handled for you.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-mono tracking-widest uppercase text-accent font-semibold mb-6">
              Menu
            </h4>
            <ul className="flex flex-col gap-4">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors font-sans text-sm md:text-base font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-mono tracking-widest uppercase text-accent font-semibold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors font-sans text-sm md:text-base font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-accent uppercase mb-2">CONTACT</span>
            <div className="flex flex-col gap-5 text-sm font-sans font-light">
              <div>
                <span className="block text-[10px] font-mono uppercase text-white/40 tracking-wider mb-1">Address</span>
                <span className="text-white/80">London, United Kingdom</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-white/40 tracking-wider mb-1">Phone</span>
                <a href="tel:+447618523398" className="text-white/80 hover:text-accent transition-colors">+44 761 852 3398</a>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase text-white/40 tracking-wider mb-1">Email</span>
                <a href="mailto:hello@clixmedia.co" className="text-white/80 hover:text-accent transition-colors">
                  hello@clixmedia.co
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Giant Scrolling Marquee */}
      <div className="overflow-hidden w-full select-none border-t border-white/10 py-6 md:py-8 bg-black">
        <div className="animate-marquee whitespace-nowrap flex text-[8vw] font-display font-black tracking-widest leading-none bg-gradient-to-b from-white/30 via-white/5 to-transparent bg-clip-text text-transparent">
          <span>PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • </span>
          <span>PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • PRODUCTION FILM & VIDEO • </span>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-white/10 py-6 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-content-muted text-xs md:text-sm font-sans font-light">
            Copyright © {year} Clixmedia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
