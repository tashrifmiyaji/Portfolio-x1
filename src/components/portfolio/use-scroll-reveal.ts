"use client";

import { useEffect, useRef } from "react";

const revealDirections = [
  "left",
  "right",
  "top",
  "bottom",
  "top-left",
  "bottom-right",
];

export function useScrollReveal<T extends HTMLElement>(selector: string) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = container?.querySelectorAll<HTMLElement>(selector);
    if (!container || !items?.length) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      items.forEach((item) => item.classList.add("is-revealed"));
      return;
    }

    items.forEach((item, index) => {
      item.dataset.reveal = revealDirections[index % revealDirections.length];
      item.style.setProperty("--reveal-delay", `${(index % 7) * 65}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            entry.target.classList.remove("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [selector]);

  return containerRef;
}
