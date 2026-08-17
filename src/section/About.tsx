import { motion, useReducedMotion } from "motion/react";
import { Eye, Download, GraduationCap, Sparkles } from "lucide-react";

/**
 * About.tsx
 * ---------------------------------------------------------------------------
 * Pairs with Navbar.tsx / Hero.tsx. Keep id="about" — the navbar's
 * scroll-spy and Hero's "scroll to about" cue both depend on it.
 *
 * Image setup:
 * Place your professional photo at `public/images/profile-photo.jpg`
 * (update PROFILE_IMAGE below if you use a different name/path).
 *
 * CV setup:
 * Both buttons point to the same PDF in `public/cv/`. "View CV" opens it
 * in a new tab; "Download CV" forces a download via the `download` attr.
 * ---------------------------------------------------------------------------
 */

const PROFILE_IMAGE = "/images/myimg.png";
const CV_PATH = "/cv/RatriAfrin.Cv.pdf";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Bootstrap",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "REST API",
  "Framer Motion",
];

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Gono Bishwabiddalay",
    period: "2022 — 2026",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institute: "Alhaj Abdul Mannan Degree College",
    period: "2018 — 2020",
  },

  {
    degree: "Secondary Certificate (Science)",
    institute: "BKSP Public School & College",
    period: "2007 — 2018",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-slate-950 py-24"
    >
      {/* faint ambient glow to tie into Hero's palette without repeating it */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[26rem] w-[26rem] rounded-full bg-violet-600/15 blur-[120px] -z-10"
      />

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0 w-full max-w-sm"
        >
          {/* decorative gradient frame behind the photo */}
          {/* <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-70 blur-md"
          /> */}

          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] 
  bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-500 
  opacity-70 blur-md"
          />

          <motion.div
            whileHover={
              prefersReducedMotion ? undefined : { rotate: -1.5, scale: 1.02 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/50"
          >
            <img
              src={PROFILE_IMAGE}
              alt="Ratri Afrin — professional headshot"
              className="w-full aspect-[3/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>

          {/* floating "available for work" style tag for extra life */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md shadow-lg"
          >
            <div className="text-cyan-300" />
            Web Developer &amp; Designer
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-cyan-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Ratri Afrin
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-slate-400 leading-relaxed"
          >
            Results-driven Web Developer with hands-on experience in building
            responsive, modern, and user-focused web applications. Skilled in
            React.js, JavaScript, Laravel, PHP, MySQL, Tailwind CSS, and REST
            APIs, with a strong focus on clean code, performance, scalability,
            and intuitive UI. Experienced in developing full-stack solutions,
            integrating secure authentication, managing databases, and creating
            dynamic admin dashboards. Passionate about transforming ideas into
            reliable, high-quality digital experiences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-slate-400 leading-relaxed"
          >
            <span className="text-slate-200 font-medium"></span>{" "}
          </motion.p>

          {/* Skills */}
          <motion.div variants={fadeUp} className="mt-7">
            <h3 className="text-sm font-semibold text-slate-200 mb-3">
              Key Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  whileHover={
                    prefersReducedMotion ? undefined : { y: -3, scale: 1.05 }
                  }
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp} className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-4">
              <GraduationCap size={16} className="text-violet-300" />
              Education
            </h3>
            <ul className="space-y-4 border-l border-white/10 pl-5">
              {EDUCATION.map((edu, i) => (
                <motion.li
                  key={edu.degree}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.45rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300" />
                  <p className="text-sm font-medium text-slate-100">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {edu.institute} · {edu.period}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-100 border border-white/15 bg-white/5 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Eye size={16} />
              View CV
            </a>

            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg shadow-pink-500/30 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
