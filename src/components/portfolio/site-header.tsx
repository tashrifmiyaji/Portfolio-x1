"use client";

import { useState } from "react";
import { navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="brand-mark">
          <span className="brand-icon">&lt;T/&gt;</span>
          <span className="brand-name">
            TASHRIF <span>MIYAJI</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#connect">
          Let&apos;s talk <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="menu-toggle"
        >
          <i
            className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}
          />
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="mobile-nav"
        >
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="nav-link block py-2"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
