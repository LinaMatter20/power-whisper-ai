import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  "⭐ Best Project — DEPI 2025",
  "🌟 5-Star Freelancer",
  "📊 3.64 CGPA",
];

const socials = [
  { icon: Github, href: "https://github.com/LinaMatter20", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lina-matter", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lina.e.mater1@gmail.com", label: "Email" },
];

const Hero = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
    <div className="max-w-[900px] mx-auto text-center">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-primary uppercase tracking-[0.1em] text-sm mb-4 font-body"
      >
        Data Scientist · AI/ML Engineer · Alexandria, Egypt
      </motion.p>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-4"
      >
        Lina Matter
      </motion.h1>

      <motion.h2
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="font-heading text-xl md:text-2xl text-secondary mb-4"
      >
        Turning Raw Data Into Real Decisions
      </motion.h2>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-muted-foreground max-w-xl mx-auto mb-8"
      >
        Mid-level DS & AI/ML Engineer · B.Sc. Computer & Data Science, Alexandria University · Award-winning · 5-star freelancer
      </motion.p>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_hsl(165,100%,42%,0.3)] transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary text-primary font-heading font-semibold rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        {stats.map((stat) => (
          <span
            key={stat}
            className="px-4 py-2 rounded-full bg-card border border-border text-xs text-muted-foreground font-body"
          >
            {stat}
          </span>
        ))}
      </motion.div>

      <motion.div
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex justify-center gap-5"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={22} />
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
