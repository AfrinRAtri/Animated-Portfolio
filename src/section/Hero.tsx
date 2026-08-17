import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

/**
 * Hero.tsx
 * ---------------------------------------------------------------------------
 * Landing section of the portfolio. Pairs with Navbar.tsx — this section
 * must keep id="home" since the navbar's scroll-spy watches that id.
 *
 * Image setup:
 * Drop your uploaded character illustration into `public/images/` and name
 * it `hero-character.png` (or update HERO_IMAGE below). Using /public means
 * it's served from the root, so the path stays "/images/hero-character.png"
 * regardless of where this component lives in src/.
 * ---------------------------------------------------------------------------
 */

const HERO_IMAGE = "/images/hi.png";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden min-h-screen flex items-center bg-slate-950"
    >
      {/* Colorful animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950" />

        <motion.div
          aria-hidden
          className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-[110px]"
          animate={
            prefersReducedMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-[110px]"
          animate={
            prefersReducedMotion ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-pink-500/20 blur-[110px]"
          animate={
            prefersReducedMotion ? undefined : { x: [0, 25, 0], y: [0, -25, 0] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* faint grid texture for a "professional" edge over the gradient */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl w-full px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: name, title, intro, CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-cyan-300 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Hello, I'm
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Ratri{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Afrin
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-lg sm:text-xl font-medium text-slate-300"
          >
            Web Developer &amp; Designer
          </motion.p>

          {/* <motion.p
            variants={item}
            className="mt-5 max-w-md mx-auto md:mx-0 text-slate-400 leading-relaxed"
          >
            I’m a Web Developer & Designer,focused on crafting modern,
            responsive, and high-performance digital experiences—where clean
            code meets thoughtful design.
          </motion.p> */}

          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-100 border border-white/15 bg-white/5 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right: floating character illustration */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        > */}

        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: "100vw" }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex justify-center md:justify-end"
        >
          {/* glow halo behind character */}
          <motion.div
            aria-hidden
            className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full bg-gradient-to-tr from-indigo-500/40 via-violet-500/30 to-cyan-400/40 blur-3xl"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src={HERO_IMAGE}
            alt="Ratri Afrin — animated illustration at her developer desk"
            className="relative z-10 w-full max-w-sm sm:max-w-md drop-shadow-[0_20px_45px_rgba(79,70,229,0.35)]"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -16, 0], rotate: [0, 1.5, 0, -1.5, 0] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* small decorative floating chips around the character */}
          {["</>", "🎨", "✦"].map((label, i) => (
            <motion.span
              key={label}
              aria-hidden
              className="absolute hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm text-cyan-200 backdrop-blur-md shadow-lg"
              style={
                [
                  { top: "8%", left: "-2%" },
                  { bottom: "18%", left: "-6%" },
                  { top: "42%", right: "-4%" },
                ][i]
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, i % 2 === 0 ? -12 : 12, 0] }
              }
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-full"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  );
}
