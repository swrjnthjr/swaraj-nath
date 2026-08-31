import { ArrowUpRight, FileText, Mail } from "lucide-react";
import Github from "../assets/icons/github";
import Linkedin from "../assets/icons/linkedin";
import Button from "./Button";
import { email, links } from "../constants";
import cv from "../assets/Swaraj_Nath_Resume.pdf";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Main CTA Container */}
        <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-14 mb-16 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              05 / Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6 leading-tight">
              Let's build something intelligent together.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-8 leading-relaxed">
              Available for full-time opportunities and technical collaborations
              focused on AI-native frontends, Next.js architecture, and agentic
              workflows.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                as="a"
                href={email}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-900! text-sm font-bold hover:bg-neutral-100 transition-colors shadow-sm"
              >
                <Mail size={16} /> Say Hello <ArrowUpRight size={16} />
              </Button>
              <Button
                variant="secondary"
                as="a"
                href={cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-700 bg-neutral-800/60 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                <FileText size={16} /> Download Resume
              </Button>
            </div>
          </div>

          {/* Subtle Accent Glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-100">
          <div className="text-center sm:text-left">
            <span className="text-base font-bold tracking-tight text-neutral-900">
              Swaraj Nath
            </span>
            <p className="text-xs text-neutral-500 mt-0.5">
              Senior Associate • Product Engineering
            </p>
          </div>

          {/* Social Pill Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Linkedin className={"size-4"} /> LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white transition-colors"
            >
              <Github className={"size-4"} /> GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} Swaraj Nath. Crafted with React &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
