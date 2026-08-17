// Footer.tsx
"use client";

import { motion } from "motion/react";
import { Mail, Phone, ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter, // Twitter / X এর জন্য
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  //   {
  //     icon: FaTwitter,
  //     href: "https://twitter.com/yourusername",
  //     label: "Twitter",
  //   },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },

  { icon: FaWhatsapp, href: "https://wa.me/8801968560419", label: "WhatsApp" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a0e1a] text-slate-300">
      {/* ambient glow blobs — matches navbar's purple/pink gradient language */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-pink-500/20 blur-[100px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-8"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 font-semibold text-white">
                RA
              </div>
              <span className="text-lg font-semibold text-white">
                Ratri Afrin
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Building clean, thoughtful digital experiences — one project at a
              time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+8801968560419"
                className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Phone size={16} className="text-purple-400" />
                +880 1968560419
              </a>

              <a
                href="mailto:ratriiafrinn@gmail.com"
                className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-purple-400" />
                ratriiafrinn@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-transparent hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row"
        >
          <p>© {new Date().getFullYear()} Ratri Afrin. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-pink-500/20"
          >
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
