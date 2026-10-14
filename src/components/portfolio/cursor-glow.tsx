"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const updatePosition = (event: PointerEvent) => {
      glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      glow.classList.add("cursor-glow-visible");
    };
    const hideGlow = () => glow.classList.remove("cursor-glow-visible");

    window.addEventListener("pointermove", updatePosition, { passive: true });
    window.addEventListener("blur", hideGlow);
    document.addEventListener("pointerleave", hideGlow);

    return () => {
      window.removeEventListener("pointermove", updatePosition);
      window.removeEventListener("blur", hideGlow);
      document.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
