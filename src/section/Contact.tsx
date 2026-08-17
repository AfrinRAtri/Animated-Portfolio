// ContactPage.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { MapPin, Send, User, Mail, MessageSquare } from "lucide-react";

// ---- config: replace with your own info ----
const WHATSAPP_NUMBER = "8801968560419"; // no + or spaces
const LOCATION_TEXT = "Gazipur, Dhaka, Bangladesh";
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14580.242061533192!2d90.24094196473115!3d23.99364005970896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e65a3f642a47%3A0x83579bd6af14b1d5!2sZirani!5e0!3m2!1sen!2sbd!4v1786964567220!5m2!1sen!2sbd";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/AfrinRatri", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ratri-afrin-9168092a5",
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
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/share/1BmTAznYFu/",
    label: "Facebook",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello, I'm ${form.name}.%0AEmail: ${form.email}%0A%0AMessage: ${form.message}`;
    const url = `https://wa.me/8801968560419?text=${text}`;

    window.open(url, "_blank");

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0e1a] px-6 py-20 text-slate-300"
    >
      {/* ambient glow — same accent language as navbar */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-purple-400">
            Contact Me
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
            Have a project in mind? Send a message and I&apos;ll get back to you
            on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT: Map + location + socials */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={MAP_EMBED_SRC}
                width="100%"
                height="320"
                style={{
                  border: 0,
                  filter: "grayscale(0.3) invert(0.9) contrast(0.9)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>

            {/* small square location box, overlapping the map bottom-left */}
            <motion.div
              whileHover={{ y: -3 }}
              className="flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Location
                </p>
                <p className="text-sm font-medium text-white">
                  {LOCATION_TEXT}
                </p>
              </div>
            </motion.div>

            {/* socials */}
            <div className="mt-4">
              <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-transparent hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact form */}
          <motion.form
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
          >
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                <User size={14} /> Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[#0a0e1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple-400"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0a0e1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple-400"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
                <MessageSquare size={14} /> Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/10 bg-[#0a0e1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple-400"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20"
            >
              <Send size={16} />
              Send via WhatsApp
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-green-400"
              >
                Opening WhatsApp with your message...
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
