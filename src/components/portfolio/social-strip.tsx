"use client";

import { useScrollReveal } from "./use-scroll-reveal";

export function SocialStrip() {
  const sectionRef = useScrollReveal<HTMLElement>(".reveal-item");

  return (
    <section ref={sectionRef} className="social-strip">
      <span className="reveal-item">TRUSTED TO TURN IDEAS INTO INTERFACES</span>
      <div className="reveal-item">
        <b>Frontend</b>
        <i />
        <b>Backend</b>
        <i />
        <b>Creative Development</b>
        <i />
        <b>Problem Solving</b>
      </div>
    </section>
  );
}
