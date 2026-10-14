"use client";

import { useScrollReveal } from "./use-scroll-reveal";

export function ContactSection() {
  const sectionRef = useScrollReveal<HTMLElement>(".reveal-item");

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="mx-auto max-w-2xl space-y-8 border-t border-gray-800/60 pt-16"
    >
      <div className="reveal-item space-y-2 text-center">
        <h2 className="font-mono text-2xl font-bold tracking-tight text-white">
          <span aria-hidden="true">📞 </span>No Contact Available
        </h2>
        {/* <p className="text-gray-400">
          Feel free to connect directly via my verified secure channels below.
        </p> */}
      </div>
      <div className="grid gap-4 font-mono text-sm sm:grid-cols-2">
        <div className="reveal-item flex items-center space-x-3 rounded-xl border border-gray-800 bg-darkCard p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-base text-emerald-400">
            <i className="fa-solid fa-envelope" aria-hidden="true" />
          </div>
          {/* <div>
            <p className="text-xs text-gray-500">Email Address</p>
            <a
              href="mailto:tashrifmiyaji.contact@gmail.com"
              className="break-all text-xs text-gray-300 hover:text-emerald-400"
            >
              tashrifmiyaji.contact@gmail.com
            </a>
          </div> */}
        </div>
        <div className="reveal-item flex items-center space-x-3 rounded-xl border border-gray-800 bg-darkCard p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-base text-blue-400">
            <i className="fa-solid fa-phone" aria-hidden="true" />
          </div>
          {/* <div>
            <p className="text-xs text-gray-500">Phone Number</p>
            <a
              href="tel:+8801771507052"
              className="text-xs text-gray-300 hover:text-emerald-400"
            >
              +880 1771-507052
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
