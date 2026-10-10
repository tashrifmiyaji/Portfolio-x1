import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-gray-800/60 pt-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionHeading label="THE PERSON BEHIND THE PIXELS">
            <span aria-hidden="true">👨‍💻 </span>About Me
          </SectionHeading>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-gray-400 sm:text-lg md:col-span-8">
          <p className="font-extrabold">
            Hello! My programming journey started out of pure curiosity. As a{" "}
            {/* <span className="font-semibold text-emerald-400"> */}
              self-taught full-stack developer
            {/* </span> */}
            , I spent over 3 dedicated years learning software architecture from
            the ground up, turning errors into milestones.
          </p>
          <p>
            <strong className="text-gray-200">
              The Type of Work I Enjoy:
            </strong>{" "}
            I thrive on building interactive real-time micro-services,
            structuring secure systems, optimization tasks, and transforming
            complex user problems into sleek, maintainable applications.
          </p>
          <p>
            <strong className="text-gray-200">
              Hobbies &amp; Interests:
            </strong>{" "}
            When I&apos;m not writing code or debugging databases, you can find
            me analyzing sports tactics, capturing urban photography, or
            tweaking device firmware for performance optimization. I love
            maintaining a perfect balance between creative aesthetics and deep
            technical mechanics!
          </p>
        </div>
      </div>
    </section>
  );
}
