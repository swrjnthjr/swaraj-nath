import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const experiences = [
  {
    role: "Senior Associate - Product Engineering",
    company: "Keenai Global",
    location: "Bangalore, Karnataka",
    period: "01/2022 – Present",
    highlights: [
      "Built and shipped fintech dashboards using Next.js, Redux Toolkit, and Tailwind CSS, improving load times by 40% through SSR/ISR optimization.",
      "Designed and delivered a GenAI-powered, AI-native chatbot using LangChain, OpenAI, and Ollama with agentic tool-calling, reducing inquiry response time by 60%.",
      "Strengthened platform security with JWT-based auth, RBAC, and OWASP compliance, decreasing vulnerability incidents by 80%.",
      "Mentored 4+ junior developers, led sprint planning, and accelerated delivery velocity by 30% through AI-assisted workflows (Claude, Copilot/Cursor).",
      "Wrote and maintained automated test suites with Jest and Cypress, cutting regression bugs in core dashboard flows.",
    ],
    tech: [
      "Next.js",
      "LangChain",
      "OpenAI",
      "Ollama",
      "Redux Toolkit",
      "Tailwind CSS",
      "Jest",
      "Cypress",
    ],
  },
  {
    role: "Software Engineer - Frontend",
    company: "Ripplr",
    location: "Bangalore, Karnataka",
    period: "02/2021 – 01/2022",
    highlights: [
      "Implemented a secure, end-to-end reconciliation system with auto-matching logic using Django and React.js, reducing reconciliation time by over 60%.",
      "Built a real-time delivery tracking and dispatch management app with live geolocation in React.js, reducing delivery delays by 40%.",
    ],
    tech: ["React.js", "Django", "JavaScript", "REST APIs", "Geolocation API"],
  },
];

export default function CareerTimeline() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header Entrance
      gsap.fromTo(
        ".timeline-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Left Timeline Bar Growth (Scroll-driven draw effect)
      gsap.fromTo(
        ".timeline-progress-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".timeline-list",
            start: "top 75%",
            end: "bottom 75%",
            scrub: true,
          },
        },
      );

      // Timeline Items & Dots Reveal
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item) => {
        gsap.fromTo(
          item.querySelector(".timeline-dot"),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom center",
              toggleActions: "play none none none",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          item.querySelector(".timeline-card"),
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "bottom center",
              toggleActions: "play none none none",
              scrub: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20 font-sans text-neutral-900"
    >
      {/* Section Header */}
      <div className="timeline-header flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            03 / Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
            Work Experience
          </h2>
        </div>
        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
          4+ years of shipping scalable web & AI products
        </p>
      </div>

      {/* Timeline List Container */}
      <div className="timeline-list relative ml-3 sm:ml-4 space-y-12">
        {/* Background Guide Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-200" />

        {/* Animated Progress Line */}
        <div className="timeline-progress-line absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-900 origin-top" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item relative pl-6 sm:pl-8 group">
            {/* Timeline Dot */}
            <span className="timeline-dot absolute -left-[7px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 z-10" />

            <div className="timeline-card p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all duration-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mt-0.5">
                    <span className="font-semibold text-neutral-800">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className="inline-block self-start sm:self-auto text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start text-sm text-neutral-600 leading-relaxed"
                  >
                    <ArrowRight className="w-4 h-4 text-neutral-400 mr-2 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-neutral-100 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
