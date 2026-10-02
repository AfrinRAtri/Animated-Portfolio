import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/**
 * Projects.tsx
 * ---------------------------------------------------------------------------
 * Pairs with Navbar.tsx — keep id="projects" since Navbar's scroll-spy and
 * Hero's "View Projects" button both target this id.
 *
 * Add/replace your real projects in the PROJECTS array below. Each image
 * should live in `public/images/projects/` (or swap in a hosted URL).
 * Grid: 1 column on mobile, 2 on tablet, 3 on desktop — as requested.
 * ---------------------------------------------------------------------------
 */

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Full-Stack Ecommerce Website",
    description:
      "A full-stack e-commerce platform built to deliver seamless online shopping with product variations, cart management, authentication, order processing, and an intuitive admin dashboard. Featuring responsive UI, API integration, CRUD operations, and secure data management, it provides a complete and scalable digital shopping experience.",
    image: "/images/Ecommerce.png",
    tags: ["React.js", "TypeScript", "Laravel", "Tailwind Css", "MySQL"],
    liveUrl: "https://web-ecommerce-gm9k.vercel.app/",
    githubUrl: "https://github.com/AfrinRAtri/WebEcommerce.git",
  },
  {
    title: "Business Website(TrustIT)",
    description:
      "A modern corporate website developed for TrustIT, featuring responsive design, smooth animations, interactive components, and structured content. Built with HTML5, CSS, JavaScript, and Bootstrap, the website provides an engaging user experience while maintaining clean visuals, intuitive navigation, cross-device compatibility, and professional business presentation.",
    image: "/images/projects/ss.png",
    tags: ["HTML5", "JavaScript", "Bootstrap"],
    liveUrl: "https://golden-taffy-8baf0c.netlify.app/",
    githubUrl: "https://github.com/AfrinRAtri/trustitbd1.git",
  },

  {
    title: "Portfolio Website",
    description:
      "A dynamic personal portfolio designed to bring my skills, projects, and academic background together under one roof. Featuring fluid UI animations, interactive components, and clean visual structure, this site transforms my complete professional journey into an engaging digital experience",
    image: "/images/projects/ss2.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/task-manager",
  },

  {
    title: "Corporate IT company website",
    description:
      "A modern and responsive company website designed to showcase TechOrbit’s digital services, courses, career opportunities, portfolio, and client solutions. Built with a clean UI, dynamic content management, and a user-focused experience across all devices",
    image: "/images/projects/ss5.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "MysqL",
      "Laravel",
      "API Integration",
    ],
    liveUrl: "https://mycompany-techorbit.vercel.app/",
    githubUrl: "https://github.com/your-username/portfolio",
  },

  {
    title: "Solobyte Digital Agency",
    description:
      "A modern and responsive company website designed to showcase TechOrbit’s digital services, courses, career opportunities, portfolio, and client solutions. Built with a clean UI, dynamic content management, and a user-focused experience across all devices",
    image: "/images/projects/ss6.png",
    tags: [""],
    liveUrl: "https://solobytedigital.com/",
    githubUrl: "https://github.com/your-username/portfolio",
  },

  {
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard designed for efficient management of products, orders, users, and website content. Featuring organized data views, CRUD operations, intuitive navigation, and interactive components, it provides administrators with a streamlined interface for monitoring and managing essential e-commerce activities efficiently.",
    image: "/images/projects/ss3.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "MysqL",
      "Laravel",
      "API Integration",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/task-manager",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden bg-slate-950 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[24rem] w-[40rem] rounded-full bg-indigo-600/10 blur-[130px] -z-10"
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            My Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-400">
            Highlighting key projects where design meets efficient software
            engineering. Focused on writing maintainable, high-quality code
            while delivering modern, visual experiences tailored for user
            engagement and system scalability
          </p>
        </motion.div>

        {/* Responsive grid: 1 col mobile, 2 tablet, 3 desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariant}
              whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-cyan-400/30"
            >
              {/* gradient glow that appears on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-cyan-400/0 opacity-0 group-hover:opacity-100 group-hover:from-indigo-500/20 group-hover:via-violet-500/10 group-hover:to-cyan-400/20 transition-all duration-500 -z-10 blur-xl"
              />

              {/* Thumbnail with zoom-on-hover */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} — project screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {/* quick external-link icon shown on hover, links to live project */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                    className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-slate-200 backdrop-blur-sm opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-cyan-500/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start gap-2">
                  <Folder
                    size={18}
                    className="mt-0.5 text-violet-300 shrink-0"
                  />
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-md shadow-indigo-500/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-slate-200 border border-white/15 bg-white/5 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <FaGithub size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
