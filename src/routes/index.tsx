import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Download, Sparkles, Send, Menu, X,
  Home, User, Briefcase, FolderGit2, Code2, Mail, FileText,
  Github, Linkedin, Twitter, Dribbble, Instagram,
  Palette, Layers, Smartphone, Server, Rocket, Star, Quote,
  MapPin, Phone, Award, Coffee, Users, Trophy, Calendar, Clock,
  ChevronLeft, ChevronRight, ExternalLink, ArrowUp, Play,
} from "lucide-react";

import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

/* ============================================================ */
/*                            DATA                              */
/* ============================================================ */

const NAV = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "services", label: "Services", icon: Layers },
  { id: "portfolio", label: "Portfolio", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "blog", label: "Blog", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

const SERVICES = [
  { icon: Palette, title: "UI/UX Design", desc: "End-to-end product design from research and wireframes to polished interactive prototypes.", tags: ["Figma", "Design Systems", "Prototyping"] },
  { icon: Layers, title: "Frontend Development", desc: "Pixel-perfect, performant interfaces built with React, TypeScript and modern tooling.", tags: ["React", "TypeScript", "Tailwind"] },
  { icon: Server, title: "Backend Development", desc: "Reliable APIs, edge functions and data pipelines that scale from launch to millions.", tags: ["Node", "Postgres", "Edge"] },
  { icon: Smartphone, title: "Mobile Development", desc: "Native-feeling iOS and Android apps crafted with React Native and Swift.", tags: ["React Native", "Swift", "Kotlin"] },
];

const SKILLS = [
  { name: "UI / UX Design", value: 98 },
  { name: "React & TypeScript", value: 95 },
  { name: "Design Systems", value: 92 },
  { name: "Motion & Interaction", value: 88 },
  { name: "Node.js & APIs", value: 84 },
  { name: "Product Strategy", value: 90 },
];

const CIRCLES = [
  { label: "Figma", value: 98 },
  { label: "React", value: 95 },
  { label: "Framer", value: 90 },
  { label: "Webflow", value: 86 },
];

const PROJECTS = [
  { id: 1, title: "Nova Analytics", cat: "Web App", tags: ["Dashboard", "React"], img: project1, desc: "Realtime analytics dashboard for a fintech scale-up. Redesigned data-heavy views into a clear, calm command center." },
  { id: 2, title: "Orbit SaaS", cat: "Landing", tags: ["Marketing", "Framer"], img: project2, desc: "Conversion-focused landing page and brand system for a productivity SaaS. +187% signup lift in 90 days." },
  { id: 3, title: "Kairos Tasks", cat: "Mobile", tags: ["iOS", "React Native"], img: project3, desc: "A calm task manager for teams. Native gestures, offline-first sync and delightful micro-interactions." },
  { id: 4, title: "Maison Studio", cat: "Ecommerce", tags: ["Shopify", "Brand"], img: project4, desc: "Ecommerce experience for a luxury lifestyle brand. Editorial storytelling meets frictionless checkout." },
  { id: 5, title: "Chroma Wallet", cat: "Web App", tags: ["Crypto", "Design System"], img: project5, desc: "Non-custodial crypto wallet with a bold, playful visual identity and rock-solid security UX." },
  { id: 6, title: "Pulse Fit", cat: "Mobile", tags: ["Health", "iOS"], img: project6, desc: "Fitness tracking app with adaptive coaching, beautiful data-viz and a personality that people love." },
];

const CATEGORIES = ["All", "Web App", "Mobile", "Landing", "Ecommerce"];

const EXPERIENCE = [
  { period: "2023 — Present", role: "Senior Product Designer", company: "Loom Studio", desc: "Leading product design across a suite of B2B SaaS tools. Shipped 40+ features and grew the design team from 3 to 9." },
  { period: "2021 — 2023", role: "Lead UI/UX Designer", company: "Northwind Labs", desc: "Owned the end-to-end redesign of the flagship analytics product and built the design system used by 60+ engineers." },
  { period: "2019 — 2021", role: "Product Designer", company: "Kite Digital", desc: "Designed marketing sites, brand identities and product experiences for early-stage startups across fintech and health." },
  { period: "2017 — 2019", role: "UI Designer", company: "Freelance", desc: "Partnered with agencies and founders across three continents. Delivered 30+ products from zero to launch." },
];

const EDUCATION = [
  { period: "2015 — 2017", role: "M.A. Interaction Design", company: "Royal College of Art", desc: "Focus on interaction, motion and computational design. Graduated with distinction." },
  { period: "2012 — 2015", role: "B.Sc. Computer Science", company: "University of Toronto", desc: "Minor in Visual Studies. Founded the campus UX society." },
];

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "CEO, TechCorp", img: client1, rating: 5, quote: "Alex reimagined our product from the ground up. The result feels effortless in a way our users have never experienced. Truly exceptional craft." },
  { name: "David Brown", role: "Founder, DevStudio", img: client2, rating: 5, quote: "One of the sharpest designers I've worked with. Fast, thoughtful, and obsessed with the small details that make software feel premium." },
  { name: "Emily Davis", role: "Product Manager, Northwind", img: client3, rating: 5, quote: "Rare combination of taste, systems thinking and technical fluency. Alex ships things that ship, and they always feel finished." },
];

const BLOG = [
  { title: "Designing calm interfaces in a noisy world", cat: "Design", date: "Jun 12, 2026", read: "6 min", img: blog1 },
  { title: "The engineer's guide to design systems that scale", cat: "Engineering", date: "May 28, 2026", read: "9 min", img: blog2 },
  { title: "Micro-interactions that make products feel alive", cat: "Motion", date: "Apr 04, 2026", read: "5 min", img: blog3 },
];

const STATS = [
  { icon: Users, value: 82, suffix: "+", label: "Happy Clients" },
  { icon: Trophy, value: 124, suffix: "+", label: "Completed Projects" },
  { icon: Coffee, value: 9, suffix: "+", label: "Years of Experience" },
  { icon: Award, value: 18, suffix: "+", label: "Awards Received" },
];

const CLIENTS = ["Google", "Microsoft", "Airbnb", "Slack", "Dropbox", "Vercel"];

const TYPING = ["UI/UX Designer.", "Product Engineer.", "Design Systems Nerd.", "Motion Enthusiast."];

/* ============================================================ */
/*                          HOOKS                               */
/* ============================================================ */

function useTyping(words: string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = w.slice(0, text.length + 1);
        setText(next);
        if (next === w) setTimeout(() => setDel(true), pause);
      } else {
        const next = w.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCounter(target: number, run: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

/* ============================================================ */
/*                        PORTFOLIO                             */
/* ============================================================ */

function Portfolio() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useReveal();

  // Scroll spy + back to top
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const y = window.scrollY + 160;
      for (const s of NAV) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Custom cursor follower (desktop only)
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${cx - 16}px, ${cy - 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-accent/20 blur-[160px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
      </div>

      {/* Cursor follower */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 rounded-full mix-blend-screen md:block"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,.6), transparent 70%)" }}
      />

      {/* Sidebar */}
      <Sidebar active={active} onNav={scrollTo} open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Mobile top bar */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-5 py-4 lg:hidden">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white font-bold shadow-glow">I</span>
          <span className="font-display font-bold">Imight Sam</span>
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="grid h-11 w-11 place-items-center rounded-xl glass"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Main content */}
      <main className="lg:pl-[320px]">
        <Hero onNav={scrollTo} />
        <About />
        <Services />
        <Skills />
        <Portfolio_ />
        <Experience />
        <Stats />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer onNav={scrollTo} />
      </main>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white shadow-glow transition-all duration-500 ${showTop ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

/* ============================================================ */
/*                         SIDEBAR                              */
/* ============================================================ */

function Sidebar({ active, onNav, open, onClose }: { active: string; onNav: (id: string) => void; open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity lg:hidden ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-dvh w-[320px] overflow-y-auto glass-strong border-r border-white/5 transition-transform duration-500 ease-out lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* decorative bg */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/2 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        </div>

        {/* mobile close */}
        <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl glass lg:hidden" aria-label="Close menu">
          <X className="h-5 w-5" />
        </button>

        <div className="flex min-h-full flex-col p-6">
          {/* profile */}
          <div className="text-center">
            <div className="relative mx-auto mt-2 h-28 w-28">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-70 animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full bg-gradient-primary animate-spin-slow p-[2px]">
                <div className="h-full w-full rounded-full bg-background" />
              </div>
              <img src={profileImg} alt="Imight Sam" width={112} height={112} className="absolute inset-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-full object-cover" />
              <span className="absolute bottom-1 right-1 grid h-5 w-5 place-items-center rounded-full bg-background">
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)] animate-pulse" />
              </span>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">Imight Sam</h2>
            <p className="mt-1 text-sm text-muted-foreground">Senior UI/UX & Product Engineer</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance
            </div>
          </div>

          {/* nav */}
          <nav className="mt-8 space-y-1" aria-label="Primary">
            {NAV.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => onNav(id)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all ${isActive ? "bg-gradient-primary text-white shadow-glow" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? "" : "group-hover:text-primary"}`} />
                  <span className="font-medium">{label}</span>
                  {isActive && <ArrowRight className="ml-auto h-4 w-4" />}
                </button>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="mt-8 space-y-3">
            <div className="relative overflow-hidden rounded-2xl p-5 glass shimmer">
              <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "linear-gradient(135deg, rgba(139,92,246,.25), rgba(236,72,153,.25))" }} />
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Available for</p>
              <h3 className="mt-1 font-display text-lg font-bold">Freelance projects</h3>
              <p className="mt-1 text-xs text-muted-foreground">Let's build something remarkable together.</p>
              <button onClick={() => onNav("contact")} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
                Hire Me <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-between rounded-xl glass px-4 py-3 text-sm transition hover:bg-white/5"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary" />
                Download CV
              </span>
              <Download className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>

          {/* socials */}
          <div className="mt-auto pt-8">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Follow me</p>
            <div className="flex gap-2">
              {[
                { icon: Dribbble, label: "Dribbble" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl glass transition hover:bg-gradient-primary hover:text-white hover:shadow-glow">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ============================================================ */
/*                           HERO                               */
/* ============================================================ */

function Hero({ onNav }: { onNav: (id: string) => void }) {
  const typing = useTyping(TYPING);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setPos({ x: nx, y: ny });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-28 pb-16 lg:px-14 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Left */}
        <div className="relative animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Hello, I'm Imight
          </div>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
            Crafting digital
            <br />
            experiences with{" "}
            <span className="text-gradient animate-gradient">soul</span>.
          </h1>

          <div className="mt-6 flex items-center gap-2 text-xl text-muted-foreground sm:text-2xl">
            <span>I'm a</span>
            <span className="font-display font-semibold text-foreground">{typing}</span>
            <span className="inline-block h-6 w-[3px] bg-accent animate-blink" />
          </div>

          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            I help ambitious startups and established brands design and build products that people
            genuinely love to use. From first sketch to shipped pixels — always crafted with intent.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => onNav("portfolio")} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.03]">
              View My Work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button onClick={() => onNav("contact")} className="group inline-flex items-center gap-3 rounded-full glass px-6 py-3.5 font-semibold transition hover:bg-white/5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-white">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-white" />
              </span>
              Watch Intro
            </button>
          </div>

          {/* Clients */}
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams at</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {CLIENTS.map((c) => (
                <span key={c} className="font-display text-lg font-semibold text-muted-foreground/80 transition hover:text-foreground">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div
            className="relative aspect-[4/5] w-full"
            style={{ transform: `translate3d(${pos.x * -14}px, ${pos.y * -14}px, 0)`, transition: "transform 0.3s ease-out" }}
          >
            {/* Gradient blob behind */}
            <div className="absolute inset-6 rounded-full bg-gradient-primary opacity-90 blur-[2px] animate-gradient" />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />

            {/* Image */}
            <div className="relative h-full w-full overflow-hidden rounded-[40px] border border-white/10 shadow-card-soft">
              <img src={profileImg} alt="Imight Sam portrait" width={1024} height={1280} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-10 rounded-2xl glass p-4 shadow-card-soft animate-float">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">9+</p>
                  <p className="text-xs text-muted-foreground">Years of experience</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 bottom-16 rounded-2xl glass p-4 shadow-card-soft animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400/80 to-emerald-600/80 text-white">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">120+</p>
                  <p className="text-xs text-muted-foreground">Projects shipped</p>
                </div>
              </div>
            </div>

            {/* Decorative particles */}
            <div className="absolute -top-4 right-10 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_rgba(236,72,153,.8)] animate-float-slow" />
            <div className="absolute top-1/3 -left-6 h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(139,92,246,.8)] animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute bottom-6 right-1/3 h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_20px_rgba(99,102,241,.8)] animate-float-slow" style={{ animationDelay: "4s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                       SECTION HEADER                         */
/* ============================================================ */

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">{title}</h2>
      {children && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{children}</p>}
    </div>
  );
}

/* ============================================================ */
/*                          ABOUT                               */
/* ============================================================ */

function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="About Me" title={<>A designer who thinks<br />like an engineer.</>}>
        I've spent the last nine years shipping products at the intersection of design, engineering
        and brand. My work has been featured on Awwwards, CSS Design Awards and The FWA.
      </SectionHeader>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {[
          { icon: Palette, title: "Design-led", desc: "Every pixel earns its place. Systems, not screens." },
          { icon: Code2, title: "Engineering fluent", desc: "I ship what I design. TypeScript, React and modern tooling." },
          { icon: Rocket, title: "Outcome focused", desc: "Beautiful is table stakes. I optimise for the outcomes that matter." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="reveal glass glow-ring group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
            <p className="mt-3 text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/*                        SERVICES                              */
/* ============================================================ */

function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="What I Do" title={<>Services designed for<br />ambitious teams.</>}>
        A focused set of offerings, delivered end to end. From discovery to launch — and everything
        in between.
      </SectionHeader>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map(({ icon: Icon, title, desc, tags }, i) => (
          <article
            key={title}
            className="reveal glass glow-ring group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="relative mt-6 font-display text-xl font-bold">{title}</h3>
            <p className="relative mt-3 text-sm text-muted-foreground">{desc}</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
            <button className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
              Learn more <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/*                          SKILLS                              */
/* ============================================================ */

function Skills() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="Skills" title={<>Tools and craft I use<br />every day.</>}>
        Deep expertise across the modern product stack. Always sharpening the tools.
      </SectionHeader>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        {/* Bars */}
        <div className="reveal space-y-6">
          {SKILLS.map((s) => (
            <div key={s.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-[width] duration-[1600ms] ease-out"
                  style={{ width: inView ? `${s.value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Circular */}
        <div className="reveal grid grid-cols-2 gap-6">
          {CIRCLES.map((c, i) => (
            <CircleProgress key={c.label} value={c.value} label={c.label} run={inView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CircleProgress({ value, label, run, delay }: { value: number; label: string; run: boolean; delay: number }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    if (!run) return;
    const t = setTimeout(() => setPct(value), delay);
    return () => clearTimeout(t);
  }, [run, value, delay]);
  const r = 46;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;

  return (
    <div className="glass flex flex-col items-center rounded-3xl p-6">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id={`g-${label}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r={r} fill="none"
            stroke={`url(#g-${label})`}
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.2,1)" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center font-display text-xl font-bold">{pct}%</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/* ============================================================ */
/*                         PORTFOLIO                            */
/* ============================================================ */

function Portfolio_() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = useMemo(() => cat === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === cat), [cat]);
  const project = open !== null ? PROJECTS.find(p => p.id === open) : null;

  return (
    <section id="portfolio" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="Portfolio" title={<>Selected work from<br />recent years.</>}>
        A handful of favourites. Each one a real product shipped with a real team.
      </SectionHeader>

      <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? "bg-gradient-primary text-white shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setOpen(p.id)}
            className="reveal group relative overflow-hidden rounded-3xl glass text-left transition-all duration-500 hover:-translate-y-1"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-0 flex translate-y-4 items-end justify-center gap-2 p-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-glow">Live Demo</span>
                <span className="rounded-full glass px-4 py-2 text-xs font-semibold">GitHub</span>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{t}</span>)}
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.cat}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 transition group-hover:bg-gradient-primary group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {project && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-fade-in" onClick={() => setOpen(null)}>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl glass-strong" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-xl glass">
              <X className="h-5 w-5" />
            </button>
            <img src={project.img} alt={project.title} className="h-64 w-full object-cover sm:h-80" />
            <div className="p-8">
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">{t}</span>)}
              </div>
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-muted-foreground">{project.desc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-glow">
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============================================================ */
/*                        EXPERIENCE                            */
/* ============================================================ */

function Experience() {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const items = tab === "exp" ? EXPERIENCE : EDUCATION;

  return (
    <section id="experience" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="My Journey" title={<>Experience &<br />education.</>} />

      <div className="reveal mt-10 flex justify-center gap-2">
        {[{ id: "exp", label: "Experience" }, { id: "edu", label: "Education" }].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as "exp" | "edu")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition ${tab === t.id ? "bg-gradient-primary text-white shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* line */}
        <div aria-hidden className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-1/2" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <div key={it.role + it.company} className={`reveal relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
              <div className="hidden w-1/2 sm:block" />
              <span className="absolute left-4 top-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background sm:left-1/2" />
              <div className="ml-10 flex-1 sm:ml-0 sm:w-1/2 sm:px-8">
                <div className="glass glow-ring rounded-2xl p-6 transition hover:-translate-y-1">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-white">
                    <Calendar className="h-3 w-3" /> {it.period}
                  </div>
                  <h3 className="font-display text-lg font-bold">{it.role}</h3>
                  <p className="mt-1 text-sm text-primary">{it.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                           STATS                              */
/* ============================================================ */

function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative px-6 py-16 lg:px-14">
      <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-8 lg:p-12">
        <div aria-hidden className="absolute inset-0 -z-10 opacity-90" style={{ background: "linear-gradient(135deg, rgba(139,92,246,.25), rgba(99,102,241,.15) 50%, rgba(236,72,153,.25))" }} />
        <div aria-hidden className="absolute -top-20 left-1/4 h-52 w-52 rounded-full bg-primary/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-20 right-1/4 h-52 w-52 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <StatItem key={s.label} {...s} run={inView} />)}
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, suffix, label, run }: { icon: typeof Users; value: number; suffix: string; label: string; run: boolean }) {
  const n = useCounter(value, run);
  return (
    <div className="text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur">
        <Icon className="h-6 w-6" />
      </span>
      <p className="mt-4 font-display text-4xl font-black">{n}{suffix}</p>
      <p className="mt-1 text-sm text-white/80">{label}</p>
    </div>
  );
}

/* ============================================================ */
/*                       TESTIMONIALS                           */
/* ============================================================ */

function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const t = TESTIMONIALS[i];

  return (
    <section className="relative px-6 py-24 lg:px-14" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <SectionHeader eyebrow="Testimonials" title={<>What clients<br />say about my work.</>} />

      <div className="reveal relative mx-auto mt-14 max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl glass p-10">
          <Quote aria-hidden className="absolute -top-3 left-8 h-16 w-16 text-primary/30" />
          <div key={i} className="animate-fade-up">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg italic text-foreground/90 sm:text-xl">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
              <img src={t.img} alt={t.name} width={64} height={64} loading="lazy" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40" />
              <div>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full glass transition hover:bg-gradient-primary hover:text-white">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to testimonial ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gradient-primary" : "w-2 bg-white/20"}`} />
            ))}
          </div>
          <button onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full glass transition hover:bg-gradient-primary hover:text-white">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*                           BLOG                               */
/* ============================================================ */

function Blog() {
  return (
    <section id="blog" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="Latest Articles" title={<>Thoughts, notes<br />and case studies.</>}>
        A journal of things I'm learning, building and thinking about.
      </SectionHeader>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {BLOG.map((b, i) => (
          <article key={b.title} className="reveal group overflow-hidden rounded-3xl glass glow-ring transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={b.img} alt={b.title} width={1024} height={640} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-white shadow-glow">{b.cat}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {b.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {b.read} read</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug transition group-hover:text-gradient">{b.title}</h3>
              <a href="#" onClick={(e) => e.preventDefault()} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/*                          CONTACT                             */
/* ============================================================ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-14">
      <SectionHeader eyebrow="Get in Touch" title={<>Let's build something<br />remarkable.</>}>
        Have a project in mind or just want to say hi? My inbox is always open.
      </SectionHeader>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Form */}
        <form onSubmit={onSubmit} className="reveal rounded-3xl glass-strong p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <Field label="Phone" id="phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            <Field label="Subject" id="subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              id="message" required rows={5}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:bg-white/10"
              placeholder="Tell me about your project…"
            />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.02]">
            {sent ? "Thanks — I'll be in touch!" : "Send Message"} <Send className="h-4 w-4" />
          </button>
        </form>

        {/* Info */}
        <div className="reveal space-y-4">
          {[
            { icon: Mail, label: "Email", value: "imightsam123@gmail.com", href: "mailto:imightsam123@gmail.com" },
            { icon: Phone, label: "Phone", value: "+234 816 275 4615", href: "tel:+2348162754615" },
            { icon: MapPin, label: "Location", value: "Ondo State, Nigeria", href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:bg-white/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-0.5 font-medium">{value}</p>
              </div>
            </a>
          ))}

          {/* Map placeholder */}
          <div className="relative h-56 overflow-hidden rounded-3xl glass">
            <div aria-hidden className="absolute inset-0" style={{
              backgroundImage: "linear-gradient(rgba(139,92,246,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.25) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white shadow-glow animate-pulse-glow">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="mt-3 font-display font-semibold">Ondo State, Nigeria</p>
              <p className="text-xs text-muted-foreground">Available worldwide — remote first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, onChange, required }: { label: string; id: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={id} type={type} required={required} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:bg-white/10"
        placeholder={label}
      />
    </div>
  );
}

/* ============================================================ */
/*                          FOOTER                              */
/* ============================================================ */

function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer className="relative px-6 pb-14 pt-10 lg:px-14">
      <div className="rounded-3xl glass p-8 sm:p-10">
        <div className="grid gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white font-bold shadow-glow">I</span>
              <div>
                <p className="font-display text-lg font-bold">Imight Sam</p>
                <p className="text-xs text-muted-foreground">Design + Engineering</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Independent designer and engineer helping teams ship products that feel considered,
              premium and alive.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Navigation</p>
            <ul className="space-y-2 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.id}>
                  <button onClick={() => onNav(n.id)} className="text-muted-foreground transition hover:text-foreground">{n.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Follow</p>
            <div className="flex flex-wrap gap-2">
              {[Dribbble, Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-xl glass transition hover:bg-gradient-primary hover:text-white hover:shadow-glow">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Imight Sam. Crafted with care.</p>
          <p>Designed & built with love in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
