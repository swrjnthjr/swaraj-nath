import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Github from "../assets/icons/github";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    title: "AI-Powered Portfolio Assistant",
    category: "Generative AI • Agentic Architecture",
    description:
      "Engineered an AI-native chat assistant performing real-time tool-calling over live portfolio data. Implemented LangChain orchestration with OpenAI and Ollama to reduce manual query resolution time by ~50%.",
    techStack: [
      "Next.js",
      "OpenAI",
      "Ollama",
      "LangChain",
      "Node.js",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/swrjnthjr",
  },
  {
    title: "Family Office & Back-Office Platform",
    category: "Frontend Architecture • React Flow",
    description:
      "Built a dynamic hierarchical structure manager with interactive node graphs and a role-based CMS for managing compliance entities and relationship mappings with React Query.",
    techStack: [
      "React.js",
      "React Flow",
      "React Query",
      "Tailwind CSS",
      "Ant Design",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/swrjnthjr",
  },
  {
    title: "Relations Portfolio Analysis & CMS",
    category: "Fintech Dashboard • Data Visualization",
    description:
      "Designed client-facing portfolio forms, dynamic HighCharts visualizations, and content publishing workflows for seamless banker-client financial communication.",
    techStack: ["React.js", "HighCharts", "React Hook Form", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "https://github.com/swrjnthjr",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header Animation
      gsap.fromTo(
        ".projects-header",
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
            scrub: true,
          },
        },
      );

      // Projects Cards Animation
      gsap.fromTo(
        ".project-card-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            end: "bottom center",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );

      // Force recalculate scroll trigger positions after mount
      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20 font-sans text-neutral-900"
    >
      {/* Section Header */}
      <div className="projects-header flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            01 / Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
            Featured Projects
          </h2>
        </div>
        <p className="text-sm text-neutral-500 mt-2 sm:mt-0">
          Selected production apps & GenAI systems
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card-item group flex flex-col justify-between p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-900 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-xs font-semibold text-neutral-400 tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-black">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Action Buttons
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors"
                >
                  <Github className="size-4" /> Code
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
