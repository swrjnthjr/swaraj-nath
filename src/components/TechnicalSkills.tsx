import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Cpu, Layout, Server, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const skillCategories = [
  {
    icon: <Cpu className="w-5 h-5 text-neutral-900" />,
    title: "AI & Generative Engineering",
    description: "Agentic architectures, tool-calling LLMs, and prompt design.",
    skills: [
      "LangChain",
      "OpenAI API",
      "Claude",
      "Ollama",
      "Agentic Architecture",
      "Tool-Calling",
      "Prompt Engineering",
    ],
  },
  {
    icon: <Layout className="w-5 h-5 text-neutral-900" />,
    title: "Frontend Architecture",
    description:
      "Reactive, accessible, and high-performance component systems.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
    ],
  },
  {
    icon: <Server className="w-5 h-5 text-neutral-900" />,
    title: "Backend & Cloud",
    description: "Robust API services, microservices caching, and containers.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-neutral-900" />,
    title: "Testing, Data & Security",
    description: "Automated test coverage, token auth, and data visualization.",
    skills: [
      "Jest",
      "Cypress",
      "JWT & RBAC",
      "OWASP Standards",
      "HighCharts",
      "Git & CI/CD",
      "Jira",
    ],
  },
];

export default function TechnicalArsenal() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        ".arsenal-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );

      // Skill Cards Animation
      gsap.fromTo(
        ".skill-card-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".arsenal-grid",
            start: "top 85%",
            end: "bottom center",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20 font-sans text-neutral-900"
    >
      {/* Section Header */}
      <div className="arsenal-header flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            02 / Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
          Core technologies, tools & frameworks
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="arsenal-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="skill-card-item p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold">{cat.title}</h3>
            </div>
            <p className="text-sm text-neutral-500 mb-5">{cat.description}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 text-xs font-medium text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
