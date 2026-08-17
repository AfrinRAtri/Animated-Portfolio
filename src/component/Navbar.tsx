import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, Download } from "lucide-react";

/**
 * Navbar.tsx
 * ---------------------------------------------------------------------------
 * Sticky, glassmorphic navbar for a single-page portfolio.
 *
 * How it connects to the rest of the site:
 * 1. Every top-level section in your page (Home, About, Skills, Projects,
 *    Contact) MUST have a matching `id` attribute, e.g.
 *      <section id="home">...</section>
 *      <section id="about">...</section>
 *    This component uses an IntersectionObserver to watch those ids and
 *    automatically highlight the correct nav item as the user scrolls —
 *    no router needed since this is a single page.
 * 2. Clicking a nav item smooth-scrolls to that section (accounts for the
 *    fixed navbar height via `scroll-margin-top`, set on your sections:
 *      className="scroll-mt-24"
 * 3. "Download CV" points to a static file in your /public folder
 *    (e.g. public/cv/your-name-cv.pdf) and triggers a real download.
 * ---------------------------------------------------------------------------
 */

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
  { id: "about", label: "Download CV" },
];

const CV_PATH = "/cv/RatriAfrin.Cv.pdf";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  // Sticky-bar background intensifies after a small scroll offset
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is currently in view to drive the active indicator
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    setActiveId(id);
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={[
          "mx-auto max-w-6xl transition-all duration-300",
          scrolled ? "mt-3 px-4" : "mt-0 px-0",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between transition-all duration-300",
            "border border-white/10 backdrop-blur-xl",
            scrolled
              ? "rounded-2xl bg-slate-950/70 shadow-lg shadow-indigo-950/40 px-5 py-3"
              : "rounded-none bg-slate-950/40 px-6 py-4",
          ].join(" ")}
        >
          {/* Logo / monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-2 shrink-0"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 font-bold text-white shadow-md shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-105">
              RA
            </span>
            <span className="hidden sm:block text-sm font-semibold tracking-wide text-slate-100">
              Ratri Afrin
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "relative z-10 block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/90 to-cyan-500/90"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side: CV button (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <a
              href={CV_PATH}
              download
              className={[
                "hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white",
                "bg-gradient-to-r from-orange-500 to-pink-500 shadow-md shadow-pink-500/30",
                "transition-transform duration-200 hover:scale-105 hover:shadow-pink-500/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300",
              ].join(" ")}
            >
              <Download size={16} />
              Download CV
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-slate-100 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-indigo-950/40 overflow-hidden"
          >
            <ul className="flex flex-col p-2">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeId === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.2 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={[
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-gradient-to-r from-indigo-500/90 to-cyan-500/90 text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * NAV_ITEMS.length, duration: 0.2 }}
                className="mt-1 pt-2 border-t border-white/10"
              >
                <a
                  href={CV_PATH}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
