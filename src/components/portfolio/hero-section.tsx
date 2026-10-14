"use client";

import { socialLinks } from "@/data/portfolio";
import { useScrollReveal } from "./use-scroll-reveal";

export function HeroSection() {
  const sectionRef = useScrollReveal<HTMLElement>(".hero-motion");

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      <div className="hero-copy">
        <div className="availability hero-motion">
          <span className="availability-dot" />
          Available for select projects{" "}
          <span className="availability-separator">/</span> 2026
        </div>
        <p className="hero-overline hero-motion">
          <span>01</span> FULL-STACK DEVELOPER <span className="overline-rule" />
        </p>
        <h1 className="hero-title hero-motion">
          I build digital
          <span> things that</span>
          <span className="hero-title-accent"> make a difference.</span>
        </h1>
        <p className="hero-description hero-motion">
          Hey, I&apos;m <strong>Tashrif Miyaji</strong> — a full-stick developer
          turning complex ideas into fast, thoughtful, and scalable web
          experiences.
        </p>
        <div className="hero-tags hero-motion">
          <span>Next.js</span>
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
        </div>
        <p className="sr-only">
          I design and deploy robust, high-performance web systems using the
          MERN Stack and Next.js. I specialize in turning complex logic into
          structured, beautiful, and fully scalable user experiences.
        </p>
        <div className="hero-actions">
          <a href="/TASRIF_Resume_Upwork.pdf" download className="button-primary">
            <span>Download resume</span>
            <i className="fa-solid fa-arrow-down" aria-hidden="true" />
          </a>
          <a href="#projects" className="button-quiet">
            Explore my work{" "}
            <i className="fa-solid fa-arrow-down" aria-hidden="true" />
          </a>
        </div>
        <div className="hero-socials">
          <span>GitHub</span>
          {socialLinks.map(([label, icon, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <i className={`fa-brands ${icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual hero-motion">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="portrait-frame">
          <span className="portrait-index">TM — 26</span>
          <img
            src="https://avatars.githubusercontent.com/tashrifmiyaji"
            alt="Portrait of Tashrif Miyaji"
          />
          <span className="portrait-caption">
            CREATIVE MIND
            <br />
            DEVELOPER BY CRAFT
          </span>
        </div>
        <div className="floating-card floating-code">
          <span className="code-dots">
            <i />
            <i />
            <i />
          </span>
          <code>
            <span>const</span> passion = <b>&quot;building&quot;</b>;
          </code>
        </div>
        <div className="floating-card floating-location">
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          <span>
            Based in <b>Bangladesh</b>
          </span>
        </div>
        <span className="visual-cross cross-one">+</span>
        <span className="visual-cross cross-two">+</span>
      </div>
      <a className="scroll-cue hero-motion" href="#about">
        <span /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}
