"use client";

import { useScrollReveal } from "./use-scroll-reveal";

export function SiteFooter() {
  const footerRef = useScrollReveal<HTMLElement>(".reveal-item");

  return (
    <footer
      ref={footerRef}
      className="border-t border-gray-900 bg-darkBg/40 py-8 text-center font-mono text-xs text-gray-500"
    >
      <span className="reveal-item inline-block">
        &copy; 2026 Tashrif Miyaji. All Rights Reserved. Fully Responsive
        Architecture.
      </span>
    </footer>
  );
}
