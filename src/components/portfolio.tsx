'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AudioLines,
  Blocks,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/redux-next',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gyanam-gogoi-0b9ab720a/',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_ryaan__29/',
    icon: Instagram,
  },
];

const projects = [
  {
    number: '01',
    name: 'AI Study Assistant',
    category: 'AI · EdTech',
    description:
      'An AI-powered learning workspace with document uploads, summarization, explanations, quizzes, flashcards, and conversational learning.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenRouter'],
    highlights: ['Summaries', 'Explanations', 'Flashcards'],
    icon: BookOpen,
    artwork: 'study',
    featured: true,
  },
  {
    number: '02',
    name: 'CivicSense AI',
    category: 'Civic tech · AI',
    description:
      'An AI-powered campus grievance platform featuring complaint analysis, duplicate detection, image uploads, and Assamese and English language support.',
    technologies: ['Next.js', 'Firebase', 'Generative AI'],
    highlights: ['Complaint analysis', 'Duplicate detection', 'Assamese + English'],
    icon: ShieldCheck,
    artwork: 'civic',
    featured: false,
  },
  {
    number: '03',
    name: 'QuickBite',
    category: 'Commerce · Logistics',
    description:
      'A hyperlocal food delivery platform with customer ordering, real-time order tracking, delivery personnel management, and an admin dashboard.',
    technologies: ['Next.js', 'JavaScript', 'Firebase'],
    highlights: ['Ordering', 'Live tracking', 'Delivery management'],
    icon: Layers3,
    artwork: 'commerce',
    featured: false,
  },
  {
    number: '04',
    name: 'Vybe',
    category: 'Open source · Music',
    description: 'An open-source music streaming project.',
    technologies: [],
    highlights: ['Open-source', 'Music streaming'],
    icon: AudioLines,
    artwork: 'music',
    featured: false,
  },
] as const;

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces & web experiences',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data',
    description: 'Services, storage & integrations',
    icon: Database,
    items: ['Node.js', 'REST APIs', 'Firebase', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Tools & languages',
    description: 'Everyday building blocks',
    icon: Wrench,
    items: ['Git', 'Python'],
  },
  {
    title: 'Exploring',
    description: 'Areas I’m curious about',
    icon: BrainCircuit,
    items: ['AI products', 'Web3', 'Security-minded development'],
  },
];

function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{index}</span> / {label}
      </p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'social-links social-links--compact' : 'social-links'}>
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${label} profile (opens in a new tab)`}
          title={label}
        >
          <Icon aria-hidden="true" size={compact ? 17 : 16} />
          {!compact && <span>{label}</span>}
          {!compact && <ArrowUpRight aria-hidden="true" size={13} />}
        </a>
      ))}
    </div>
  );
}

function ProjectArtwork({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = project.icon;

  return (
    <div
      className={`project-art project-art--${project.artwork}`}
      aria-hidden="true"
    >
      <div className="art-orbit art-orbit--one" />
      <div className="art-orbit art-orbit--two" />
      <div className="art-symbol">
        <Icon size={34} strokeWidth={1.4} />
      </div>
      <span className="art-index">PROJECT / {project.number}</span>
      <div className="art-highlights">
        {project.highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top
          );
        const visibleSection = visibleSections[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    navigation.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const reveal = reduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, ease: 'easeOut' as const },
      };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a
            href="#home"
            className="wordmark"
            onClick={closeMenu}
            aria-label="Gyanam — home"
          >
            gyanam<span>.</span>
          </a>

          <div className="desktop-nav">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={activeSection === href.slice(1) ? 'nav-link is-active' : 'nav-link'}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Let’s talk <ArrowUpRight aria-hidden="true" size={14} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {navigation.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                >
                  {label}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' }}
          >
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Full-stack development · AI · Web
            </p>
            <h1>
              Hey, I’m
              <br />
              <span>Gyanam.</span>
            </h1>
            <p className="hero-statement">
              I build <span>thoughtful digital products</span> for the real
              world.
            </p>
            <p className="hero-description">
              Full-stack developer exploring modern web, AI, and Web3—bringing
              ideas to life with useful software and care for the details.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Explore my work <ArrowDownRight aria-hidden="true" size={17} />
              </a>
              <a className="button button--secondary" href="#contact">
                Let’s connect <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>

            <SocialLinks />
          </motion.div>

          <motion.div
            className="hero-portrait"
            initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, delay: 0.12 }}
          >
            <div className="portrait-frame">
              <Image
                src="/gyanam-portrait.jpg"
                alt="Gyanam in a light sweatshirt, holding headphones."
                width={1400}
                height={1050}
                quality={85}
                sizes="(max-width: 760px) 84vw, (max-width: 1100px) 40vw, 430px"
              />
              <div className="portrait-caption">
                <span>GYANAM</span>
                <span>DEVELOPER / BUILDER</span>
              </div>
            </div>
            <div className="portrait-note">
              <Sparkles aria-hidden="true" size={15} />
              <span>Learning by building</span>
            </div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="about-section section-shell section-space">
          <motion.div {...reveal}>
            <SectionHeading
              index="01"
              label="A little about me"
              title="Curious by default."
              description="I enjoy the whole journey: understanding a problem, shaping the experience, connecting the systems, and making the details feel right."
            />
          </motion.div>

          <div className="about-content">
            <motion.div className="about-copy" {...reveal}>
              <p>
                I’m a full-stack developer who likes building things that are
                both <strong>technically thoughtful and genuinely useful.</strong>{' '}
                My projects span AI-assisted learning, civic technology, and
                local commerce.
              </p>
              <p>
                I’m interested in how AI changes the way we build software,
                what decentralized systems can make possible, and how
                security-minded thinking belongs in the design from day one.
              </p>
              <p>
                I’m still learning, experimenting, and iterating. This
                portfolio is a snapshot of that process—not a list of inflated
                numbers.
              </p>
              <a
                className="text-link"
                href="https://github.com/redux-next"
                target="_blank"
                rel="noreferrer"
              >
                Follow along on GitHub <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </motion.div>

            <motion.div className="interest-list" {...reveal}>
              <div>
                <span className="interest-icon">
                  <Code2 aria-hidden="true" size={18} />
                </span>
                <span>
                  <strong>Full-stack engineering</strong>
                  <small>From polished interfaces to APIs and data models.</small>
                </span>
              </div>
              <div>
                <span className="interest-icon">
                  <BrainCircuit aria-hidden="true" size={18} />
                </span>
                <span>
                  <strong>AI-powered products</strong>
                  <small>Practical AI that makes an experience more useful.</small>
                </span>
              </div>
              <div>
                <span className="interest-icon">
                  <Blocks aria-hidden="true" size={18} />
                </span>
                <span>
                  <strong>Web3 &amp; open systems</strong>
                  <small>Exploring decentralized apps and developer tools.</small>
                </span>
              </div>
              <div>
                <span className="interest-icon">
                  <ShieldCheck aria-hidden="true" size={18} />
                </span>
                <span>
                  <strong>Security-minded thinking</strong>
                  <small>Considering validation and access from the start.</small>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="skills-section section-space">
          <div className="section-shell">
            <motion.div {...reveal}>
              <SectionHeading
                index="02"
                label="Tools I work with"
                title="A flexible toolkit."
                description="Technologies used across my projects, alongside a few areas I’m actively exploring."
              />
            </motion.div>

            <div className="skill-grid">
              {skillGroups.map(({ title, description, icon: Icon, items }, index) => (
                <motion.article
                  className="skill-group"
                  key={title}
                  {...reveal}
                  transition={{
                    ...(reveal.transition ?? {}),
                    delay: index * 0.06,
                  }}
                >
                  <div className="skill-group-heading">
                    <span className="skill-icon">
                      <Icon aria-hidden="true" size={18} />
                    </span>
                    <span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </span>
                  </div>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section section-shell section-space">
          <motion.div className="projects-heading" {...reveal}>
            <SectionHeading
              index="03"
              label="Selected builds"
              title="Ideas, meet implementation."
              description="A few products I’m building and experimenting with—each one a chance to learn by shipping something real."
            />
            <a
              className="text-link projects-github-link"
              href="https://github.com/redux-next"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </motion.div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const staggeredReveal = reduceMotion
                ? reveal
                : {
                    ...reveal,
                    transition: {
                      ...reveal.transition,
                      delay: index * 0.08,
                    },
                  };

              return (
                <motion.article
                  className={
                    project.featured
                      ? 'project-card project-card--featured'
                      : 'project-card'
                  }
                  key={project.number}
                  {...staggeredReveal}
                >
                  <ProjectArtwork project={project} />
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>/{project.number}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-tags" aria-label="Technologies">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <a
                      className="project-link"
                      href="https://github.com/redux-next"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit Gyanam’s GitHub profile for ${project.name} (opens in a new tab)`}
                    >
                      Browse GitHub <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <p className="project-note">
            The links above open my GitHub profile; individual repositories
            aren’t linked yet.
          </p>
        </section>

        <section id="contact" className="contact-section section-shell">
          <motion.div className="contact-panel" {...reveal}>
            <div className="contact-copy">
              <p className="eyebrow">
                <span>04</span> / Get in touch
              </p>
              <h2>
                Have something
                <br />
                <span>worth building?</span>
              </h2>
              <p>
                I’m always interested in thoughtful projects, interesting
                technical problems, and meeting people who like to build.
              </p>
            </div>
            <div className="contact-action">
              <a
                className="button button--primary"
                href="https://github.com/redux-next"
                target="_blank"
                rel="noreferrer"
              >
                Find me on GitHub <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <p>Or connect with me elsewhere.</p>
              <SocialLinks compact />
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a href="#home" className="wordmark" aria-label="Gyanam — back to top">
          gyanam<span>.</span>
        </a>
        <p>Made with curiosity.</p>
        <SocialLinks compact />
        <span className="copyright">© {new Date().getFullYear()} Gyanam</span>
        <a className="back-to-top" href="#home" aria-label="Back to top">
          <ArrowUp aria-hidden="true" size={16} />
        </a>
      </footer>
    </>
  );
}
