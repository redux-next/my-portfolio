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
  Braces,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Github,
  Instagram,
  KeyRound,
  Layers3,
  Linkedin,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
      'A study workspace for asking questions, learning from PDFs, and creating summaries, quizzes, and flashcards.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenRouter', 'Prisma'],
    highlights: ['Summaries', 'Explanations', 'Flashcards'],
    icon: BookOpen,
    artwork: 'study',
    githubHref: 'https://github.com/redux-next/ai-study-assistant',
    liveHref: 'https://ai-study-assistant-seven-beta.vercel.app',
  },
  {
    number: '02',
    name: 'CivicSense AI',
    category: 'Civic tech · AI',
    description:
      'A campus issue-reporting platform with AI-assisted complaint analysis, duplicate detection, maps, and student community features.',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Gemini', 'Leaflet'],
    highlights: ['Complaint analysis', 'Duplicate detection', 'Assamese + English'],
    icon: ShieldCheck,
    artwork: 'civic',
    githubHref: 'https://github.com/redux-next/civicsense-ai',
    liveHref: 'https://civicsense-ai-steel.vercel.app',
  },
  {
    number: '03',
    name: 'DailyCart Android',
    category: 'Android · Mobile commerce',
    description:
      'A grocery-shopping Android app pairing a WebView experience with native navigation, Firebase authentication, and Google Sign-In.',
    technologies: ['Kotlin', 'XML', 'Android Studio', 'Firebase Auth', 'WebView'],
    highlights: ['Google Sign-In', 'Native navigation', 'Location + uploads'],
    icon: Layers3,
    artwork: 'dailycart',
    image: '/dailycart-android-preview.png',
    githubHref: 'https://github.com/redux-next/baskit-android',
  },
  {
    number: '04',
    name: 'Palmus Music',
    category: 'Web · Music',
    description:
      'A browser-based music experience with search, streaming, playlists, favorites, and locally stored preferences.',
    technologies: ['Next.js', 'TypeScript', 'HLS.js', 'Zustand'],
    highlights: ['Music streaming', 'Playlists', 'Local preferences'],
    icon: AudioLines,
    artwork: 'music',
    githubHref: 'https://github.com/redux-next/Palmus',
  },
] as const;

const skillGroups = [
  {
    title: 'Web frameworks',
    description: 'Interfaces & web experiences',
    icon: Code2,
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data',
    description: 'Services, storage & integrations',
    icon: Database,
    items: ['Node.js', 'REST APIs', 'Firebase', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Android & mobile',
    description: 'DailyCart Android app',
    icon: Smartphone,
    items: [
      'Android Studio',
      'Kotlin',
      'XML layouts',
      'Android WebView',
      'Firebase Authentication',
      'Google Sign-In',
    ],
  },
  {
    title: 'Tools & exploration',
    description: 'Workflow & evolving interests',
    icon: Wrench,
    items: ['Git', 'AI products', 'Web3', 'Security-minded development'],
  },
];

const programmingLanguages = [
  { name: 'JavaScript', mark: 'JS', tone: 'javascript' },
  { name: 'TypeScript', mark: 'TS', tone: 'typescript' },
  { name: 'Python', mark: 'Py', tone: 'python' },
  { name: 'Kotlin', mark: 'Kt', tone: 'kotlin' },
  { name: 'HTML', mark: '</>', tone: 'html' },
  { name: 'CSS', mark: '#', tone: 'css' },
];

const androidTechnologies = [
  { label: 'Android Studio', icon: Code2 },
  { label: 'Kotlin', icon: Braces },
  { label: 'XML layouts', icon: Layers3 },
  { label: 'Android WebView', icon: Globe },
  { label: 'Firebase Authentication', icon: ShieldCheck },
  { label: 'Google Sign-In', icon: KeyRound },
];

function ProjectCarousel({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    moved: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const scrollToProject = (index: number) => {
    const track = trackRef.current;
    const card = track?.children.item(index);
    if (!track || !(card instanceof HTMLElement)) return;

    const left =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;

    track.scrollTo({
      left,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  const updateActiveProject = () => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    const trackLeft = track.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - trackLeft
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  };

  const currentProject = String(activeIndex + 1).padStart(2, '0');
  const totalProjects = String(projects.length).padStart(2, '0');

  return (
    <div className="project-carousel">
      <div
        className={`project-carousel-track${isDragging ? ' is-dragging' : ''}`}
        ref={trackRef}
        role="region"
        aria-label="Selected projects"
        aria-roledescription="carousel"
        tabIndex={0}
        onScroll={updateActiveProject}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowLeft' && activeIndex > 0) {
            event.preventDefault();
            scrollToProject(activeIndex - 1);
          }
          if (event.key === 'ArrowRight' && activeIndex < projects.length - 1) {
            event.preventDefault();
            scrollToProject(activeIndex + 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return;
          if (
            event.target instanceof Element &&
            event.target.closest('a, button')
          ) {
            return;
          }
          dragState.current = {
            active: true,
            moved: false,
            startX: event.clientX,
            startScrollLeft: event.currentTarget.scrollLeft,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          if (!dragState.current.active) return;
          const delta = event.clientX - dragState.current.startX;
          if (Math.abs(delta) > 4) dragState.current.moved = true;
          if (dragState.current.moved) {
            event.preventDefault();
            event.currentTarget.scrollLeft =
              dragState.current.startScrollLeft - delta;
          }
        }}
        onPointerUp={() => {
          dragState.current.active = false;
          setIsDragging(false);
          if (dragState.current.moved) {
            window.setTimeout(() => {
              dragState.current.moved = false;
            }, 0);
          }
        }}
        onPointerCancel={() => {
          dragState.current.active = false;
          dragState.current.moved = false;
          setIsDragging(false);
        }}
        onClickCapture={(event) => {
          if (!dragState.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          dragState.current.moved = false;
        }}
      >
        {projects.map((project, index) => {
          const Icon = project.icon;
          const image = 'image' in project ? project.image : null;
          return (
            <motion.article
              className="project-card"
              key={project.number}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.name}`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
            >
              <div
                className={`project-art project-art--${project.artwork}`}
                aria-hidden={image ? undefined : true}
              >
                {image ? (
                  <>
                    <Image
                      className="project-art-image"
                      src={image}
                      alt={`${project.name} preview from its Android repository`}
                      width={780}
                      height={1250}
                      sizes="(max-width: 760px) 85vw, 45vw"
                      draggable={false}
                    />
                    <span className="project-image-label">DAILYCART / ANDROID</span>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
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
                <div className="project-actions">
                  <a
                    className="project-link"
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                  >
                    GitHub <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                  {'liveHref' in project && project.liveHref && (
                    <a
                      className="project-link project-link--secondary"
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit the ${project.name} live demo (opens in a new tab)`}
                    >
                      Live demo <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="project-carousel-controls">
        <div className="project-carousel-status">
          <p
            className="project-counter"
            aria-live="polite"
            aria-atomic="true"
          >
            <span>{currentProject}</span>
            <span aria-hidden="true">/</span>
            <span>{totalProjects}</span>
          </p>
          <div
            className="project-pagination"
            role="group"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => (
              <button
                className={
                  activeIndex === index
                    ? 'project-pagination-dot is-active'
                    : 'project-pagination-dot'
                }
                key={project.number}
                type="button"
                aria-label={`Show project ${index + 1}: ${project.name}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                onClick={() => scrollToProject(index)}
              />
            ))}
          </div>
        </div>
        <div className="project-carousel-arrows">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Previous project"
            disabled={activeIndex === 0}
            onClick={() => scrollToProject(activeIndex - 1)}
          >
            <ChevronLeft aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Next project"
            disabled={activeIndex === projects.length - 1}
            onClick={() => scrollToProject(activeIndex + 1)}
          >
            <ChevronRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

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

            <motion.div className="language-section" {...reveal}>
              <div className="language-heading">
                <p className="eyebrow">
                  <span>LANGUAGES</span> / In my projects
                </p>
                <h3>Programming languages.</h3>
              </div>
              <ul className="language-grid" aria-label="Programming languages">
                {programmingLanguages.map(({ name, mark, tone }) => (
                  <li className="language-card" key={name}>
                    <span
                      className={`language-mark language-mark--${tone}`}
                      aria-hidden="true"
                    >
                      {mark}
                    </span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section
          id="mobile-development"
          className="mobile-development-section section-shell section-space"
        >
          <motion.div className="mobile-development-panel" {...reveal}>
            <div className="mobile-development-copy">
              <p className="eyebrow">
                <span>ANDROID</span> / Mobile development
              </p>
              <h2>Built for the small screen.</h2>
              <p className="mobile-development-description">
                DailyCart’s Android app uses a native Kotlin and XML
                interface with a WebView architecture, Firebase
                Authentication, Google Sign-In, and native navigation.
              </p>
              <ul className="android-technology-grid">
                {androidTechnologies.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <span className="android-technology-icon">
                      <Icon aria-hidden="true" size={16} />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#projects">
                See the DailyCart project <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>

            <div className="android-device-stage">
              <div className="device-glow" aria-hidden="true" />
              <div
                className="android-device"
                role="img"
                aria-label="DailyCart Android app shown inside a phone frame"
              >
                <div className="android-device-screen">
                  <Image
                    src="/dailycart-android-preview.png"
                    alt=""
                    fill
                    sizes="(max-width: 760px) 48vw, 240px"
                    style={{ objectFit: 'cover', objectPosition: '78% center' }}
                  />
                </div>
              </div>
              <p className="device-caption">DAILYCART / ANDROID APP</p>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="projects-section section-shell section-space">
          <motion.div className="projects-heading" {...reveal}>
            <SectionHeading
              index="03"
              label="Selected builds"
              title="Projects, in motion."
              description="A closer look at products built across learning, civic tech, mobile, and music."
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

          <ProjectCarousel reduceMotion={reduceMotion} />
          <p className="project-note">
            Artwork is illustrative; the DailyCart Android preview is from its
            project repository.
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
