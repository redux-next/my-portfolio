
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MousePointer2,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const EMAIL = "pythoncoder13@gmail.com";
const GITHUB = "https://github.com/redux-next";
const LINKEDIN =
  "https://www.linkedin.com/in/gyanam-gogoi-0b9ab720a/";
const INSTAGRAM = "https://www.instagram.com/_ryaan__29/";

const roles = [
  "Full-Stack Developer",
  "Next.js Developer",
  "AI App Builder",
  "Problem Solver",
];

const projects = [
  {
    name: "AI Study Assistant",
    category: "AI",
    icon: BrainCircuit,
    number: "01",
    description:
      "An AI-powered study application designed to help students understand content, work with documents, and study more effectively.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI APIs"],
    status: "Personal project",
  },
  {
    name: "Automated Test Generation",
    category: "Development",
    icon: Zap,
    number: "02",
    description:
      "A hackathon project focused on automating test generation and exploring ways to improve the software testing workflow.",
    stack: ["Development", "Automation", "Testing"],
    status: "Hackathon project",
  },
  {
    name: "Arduino Simple C++",
    category: "Systems",
    icon: Terminal,
    number: "03",
    description:
      "A C++ and Arduino learning project exploring programming fundamentals and hardware-oriented development.",
    stack: ["C++", "Arduino", "Embedded basics"],
    status: "Learning project",
  },
];

const skills = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Node.js", group: "Backend" },
  { name: "REST APIs", group: "Backend" },
  { name: "PostgreSQL", group: "Backend" },
  { name: "Prisma", group: "Backend" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "Vercel", group: "Tools" },
  { name: "AI API integration", group: "Tools" },
  { name: "C++", group: "Tools" },
];

const filters = ["All", "AI", "Development", "Systems"];

const navItems = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={3} y={3} width={18} height={18} rx={5} />
      <circle cx={12} cy={12} r={4} />
      <circle
        cx={17.5}
        cy={6.5}
        r={0.8}
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let delay = deleting ? 38 : 78;

    if (!deleting && roleText === current) {
      delay = 1400;
    } else if (deleting && roleText === "") {
      delay = 300;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && roleText === current) {
        setDeleting(true);
      } else if (deleting && roleText === "") {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setRoleText(
          deleting
            ? current.slice(0, roleText.length - 1)
            : current.slice(0, roleText.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [roleText, deleting, roleIndex]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const ModalIcon = selectedProject?.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080a09] text-[#f1f5f2] selection:bg-emerald-300 selection:text-black">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-300px] z-0 h-[550px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/[0.09] blur-[140px]" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#080a09]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/[0.08] font-mono text-lg font-bold text-emerald-300">
              G.
            </span>
            <span className="font-semibold tracking-tight">
              gyanam<span className="text-emerald-300">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-400 transition hover:text-emerald-300"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-lg bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-200 hover:shadow-[0_0_25px_rgba(110,231,183,.2)]"
            >
              Hire me <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/[0.07] bg-[#080a09] md:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/[0.06] py-4 text-sm text-zinc-300"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 rounded-lg bg-emerald-300 px-4 py-3 text-center font-semibold text-black"
                >
                  Let's work together
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.15fr_.85fr] md:px-10 md:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2 text-xs text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            OPEN TO PART-TIME OPPORTUNITIES
          </div>

          <p className="mb-3 font-mono text-sm text-zinc-400">
            Hello, world! I'm
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-8xl">
            Gyanam<span className="text-emerald-300">.</span>
          </h1>

          <h2 className="mt-6 min-h-[38px] text-xl font-medium text-zinc-300 sm:text-2xl">
            <span className="text-emerald-300">{roleText}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-emerald-300 align-middle" />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern web experiences and AI-powered applications,
            turning ideas into useful products with clean, thoughtful code.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-5 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-200"
            >
              Explore my work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-emerald-300/40 hover:bg-white/[0.04]"
            >
              <Mail size={17} /> Contact me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-zinc-500">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <Code2 size={17} />
              GitHub
              <ExternalLink size={12} />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <Layers3 size={17} />
              LinkedIn
              <ExternalLink size={12} />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my Instagram profile"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <InstagramIcon size={17} />
              Instagram
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        {/* Animated code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d100e] shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff605c]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd44]" />
                <span className="h-3 w-3 rounded-full bg-[#00ca4e]" />
              </div>
              <span className="font-mono text-xs text-zinc-500">
                developer.ts
              </span>
              <Terminal size={16} className="text-zinc-500" />
            </div>

            <div className="overflow-x-auto p-5 font-mono text-[13px] leading-8 sm:p-7 sm:text-sm">
              <p className="text-zinc-600">01</p>
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-emerald-200">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                <span className="text-sky-300">name</span>:{" "}
                <span className="text-amber-200">"Gyanam"</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">focus</span>:{" "}
                <span className="text-amber-200">"Full-Stack"</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">building</span>: [
              </p>
              <p className="pl-10 text-amber-200">"Web Apps",</p>
              <p className="pl-10 text-amber-200">"AI Tools",</p>
              <p className="pl-10 text-amber-200">"New Ideas"</p>
              <p className="pl-5">],</p>
              <p className="pl-5">
                <span className="text-sky-300">mindset</span>:{" "}
                <span className="text-amber-200">"Always learning"</span>
              </p>
              <p>{"};"}</p>
              <p className="mt-4 text-zinc-500">
                <span className="text-emerald-300">✓</span> Ready to build
                something useful.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/[0.07] p-4">
              {["React", "Next.js", "TypeScript", "AI"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-3 -top-5 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#121713] px-4 py-3 shadow-xl sm:flex"
          >
            <Sparkles className="text-emerald-300" size={18} />
            <span className="text-xs font-medium">Building with purpose</span>
          </motion.div>

          <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#121713] px-4 py-3 shadow-xl sm:flex">
            <MousePointer2 className="text-emerald-300" size={17} />
            <span className="text-xs text-zinc-300">
              Design. Build. Improve.
            </span>
          </div>
        </motion.div>

        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-emerald-300 md:block"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 scroll-mt-24 px-5 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                01 / Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Projects that <span className="text-zinc-500">matter.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                A selection of projects I've worked on. Select a card to
                explore the idea and technologies behind it.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`rounded-lg border px-3.5 py-2 text-sm transition ${
                    filter === item
                      ? "border-emerald-300 bg-emerald-300 text-black"
                      : "border-white/10 text-zinc-400 hover:border-emerald-300/40 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <motion.button
                    layout
                    key={project.name}
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 text-left transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.025] sm:p-7"
                  >
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.07] text-emerald-300 transition group-hover:scale-110 group-hover:bg-emerald-300/15">
                        <Icon size={23} />
                      </div>
                      <span className="font-mono text-xs text-zinc-600">
                        {project.number}
                      </span>
                    </div>

                    <span className="mb-3 w-fit rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-wider text-zinc-400">
                      {project.status}
                    </span>

                    <h3 className="text-xl font-semibold tracking-tight transition group-hover:text-emerald-200">
                      {project.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5 text-sm">
                      <span className="text-zinc-400">Explore project</span>
                      <ArrowUpRight
                        size={18}
                        className="text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-300"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="my-auto w-full max-w-lg rounded-2xl border border-white/10 bg-[#101310] p-6 shadow-2xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                  {ModalIcon && <ModalIcon size={24} />}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white"
                >
                  <X size={19} />
                </button>
              </div>

              <p className="mb-2 font-mono text-xs text-emerald-300">
                PROJECT {selectedProject.number}
              </p>
              <h3
                id="project-dialog-title"
                className="text-2xl font-semibold"
              >
                {selectedProject.name}
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                {selectedProject.description}
              </p>

              <h4 className="mb-3 mt-7 text-sm font-medium">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-300 px-4 py-3 font-semibold text-black transition hover:bg-emerald-200"
              >
                Visit my GitHub profile <ExternalLink size={16} />
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-zinc-500">
                Visit the profile to find available source code. Individual
                repository links can be added once verified.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 scroll-mt-24 border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 md:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
              02 / Tech stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Tools I use to
              <br />
              <span className="text-zinc-500">bring ideas to life.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              My current toolkit for creating responsive interfaces, building
              application features, and connecting services.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Continuously learning and improving
            </div>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2">
            {["Frontend", "Backend", "Tools"].map((group, index) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0f0d] p-5"
              >
                <h3 className="mb-4 text-sm font-semibold">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.group === group)
                    .map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ y: -3, scale: 1.03 }}
                        className="cursor-default rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-zinc-400 transition hover:border-emerald-300/30 hover:text-emerald-200"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 scroll-mt-24 px-5 py-24 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
            03 / A little about me
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Curious by nature.
            <br />
            <span className="text-zinc-500">A builder by choice.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            I'm a developer who enjoys learning by building real projects.
            From AI-powered study tools to web application features, I like
            solving problems, exploring new technologies, and turning concepts
            into practical experiences. I'm looking for opportunities to
            contribute, collaborate, and grow through real-world development.
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:border-emerald-300/40 hover:text-emerald-300"
          >
            <Code2 size={17} /> Explore my code
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-24 px-5 pb-24 pt-12 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-emerald-300/20 bg-[#0d120e] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-emerald-300/[0.09] blur-[90px]" />

          <div className="relative">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
              04 / Let's connect
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-6xl">
              Have a project
              <br />
              <span className="text-zinc-500">in mind?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
              I'm open to paid part-time opportunities, freelance projects,
              and collaborations where I can create something useful.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Developer opportunity")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-300 px-5 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-emerald-200"
              >
                <Mail size={17} /> Email me <ArrowUpRight size={16} />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm transition hover:border-emerald-300/40 hover:text-emerald-200"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Email copied!" : "Copy email"}
              </button>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-zinc-500">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-emerald-300"
              >
                <Layers3 size={16} /> LinkedIn
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-emerald-300"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-emerald-300"
              >
                <Code2 size={16} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-7 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <a
            href="#home"
            className="font-mono transition hover:text-emerald-300"
          >
            GYANAM.DEV
          </a>
          <p>Designed, built, and continuously improved by Gyanam.</p>
          <a href="#home" className="transition hover:text-emerald-300">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}