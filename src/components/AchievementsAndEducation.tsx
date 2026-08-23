import React, { useRef } from "react";
import { Award, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const achievements = [
  {
    title: "IIT Madras – Coding Championship (2017)",
    description:
      "Cleared the national-level qualifier round of the coding championship organized at IIT Madras.",
    tag: "National Qualifier",
  },
  {
    title: "Ethical Hacking Competition (Silicon Institute)",
    description:
      "Secured 3rd Rank in the regional Ethical Hacking and cybersecurity competition held at Silicon Institute, Sambalpur.",
    tag: "3rd Rank",
  },
];

const education = [
  {
    degree: "B.Tech",
    institution: "Padmashree Kruthartha Acharya College, Bargarh, Odisha",
    period: "2014 – 2018",
    score: "7.82 CGPA",
    note: "Built foundational analytical problem-solving and algorithmic logic before transitioning into software engineering.",
  },
];

export default function AchievementsAndEducation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        ".section-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%",
          },
        },
      );

      // Achievements Column Animation
      gsap.fromTo(
        ".achievement-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".achievements-col",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        },
      );

      // Education Column Animation
      gsap.fromTo(
        ".education-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-col",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="max-w-6xl mx-auto px-6 py-20 font-sans text-neutral-900"
    >
      {/* Section Header */}
      <div className="section-header flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            04 / Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
            Achievements & Education
          </h2>
        </div>
        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
          Recognitions, competitive coding & academic foundation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Achievements Column */}
        <div className="achievements-col space-y-6">
          <div className="achievement-item flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200">
              <Award className="w-5 h-5 text-neutral-900" />
            </div>
            <h3 className="text-xl font-bold">Honors & Competitions</h3>
          </div>

          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="achievement-item p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base text-neutral-900">
                    {item.title}
                  </h4>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 text-neutral-800 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="education-col space-y-6">
          <div className="education-item flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200">
              <GraduationCap className="w-5 h-5 text-neutral-900" />
            </div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>

          <div className="space-y-4">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="education-item p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all duration-200 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-bold text-base text-neutral-900">
                    {item.degree}
                  </h4>
                  <span className="text-xs font-semibold text-neutral-500">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-700 mb-1">
                  {item.institution}
                </p>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 bg-neutral-100 text-neutral-800 rounded mb-3">
                  Score: {item.score}
                </span>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
