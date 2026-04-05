import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const socials = [
  { icon: Github, href: "https://github.com/LinaMatter20", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lina-matter", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lina.e.mater1@gmail.com", label: "Email" },
];

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center pt-20 pb-20 px-6 relative overflow-hidden"
  >
    {/* Background glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 60% 70% at 0% 0%, rgba(167,139,250,0.07) 0%, transparent 65%)",
      }}
    />

    <div className="max-w-[1100px] mx-auto w-full relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-10 md:gap-16">
        {/* Left column — text */}
        <div className="flex-1 text-center md:text-left">
          {/* Status badge */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] mb-6"
              style={{ color: "#00D4AA", fontSize: "0.75rem" }}>
              <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading leading-none mb-3"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#F0F4FF",
            }}
          >
            Lina Matter
          </motion.h1>

          {/* Gradient role title */}
          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading mb-5"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 600,
              background: "linear-gradient(90deg, #A78BFA 0%, #4A9EFF 55%, #00D4AA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Data Scientist · AI & ML Engineer
          </motion.h2>

          {/* Bio */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 max-w-[520px] mx-auto md:mx-0"
            style={{ color: "#8892B0", fontSize: "1rem", lineHeight: 1.7 }}
          >
            I transform <span style={{ color: "#F0F4FF", fontWeight: 600 }}>complex data</span> into{" "}
            <span style={{ color: "#F0F4FF", fontWeight: 600 }}>intelligent systems</span> — building
            end-to-end <span style={{ color: "#F0F4FF", fontWeight: 600 }}>ML pipelines</span>,
            deploying <span style={{ color: "#F0F4FF", fontWeight: 600 }}>AI solutions</span>, and
            extracting the insights that drive real decisions.
          </motion.p>

          {/* Location */}
          <motion.p
            custom={3.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-sm mb-6"
            style={{ color: "#8892B0" }}
          >
            📍 Alexandria, Egypt
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#00D4AA",
                color: "#0A0F1E",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,170,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid #00D4AA",
                color: "#00D4AA",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,170,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Download CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start gap-5"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: "#8892B0" }}
                aria-label={label}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4AA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8892B0")}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — photo */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="shrink-0"
        >
          <div
            className="relative overflow-hidden mx-auto md:mx-0"
            style={{
              width: "clamp(200px, 25vw, 320px)",
              aspectRatio: "4/5",
              borderRadius: "20px",
              border: "2px solid rgba(0,212,170,0.3)",
              boxShadow:
                "0 0 40px rgba(0,212,170,0.12), 0 0 80px rgba(74,158,255,0.08)",
              backgroundColor: "#0D1526",
            }}
          >
            {/* Photo — replace /lina-photo.jpg with actual image */}
            <img
              src="/lina-photo.jpg"
              alt="Lina Matter"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide broken image, show placeholder
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            <div
              className="absolute inset-0 flex-col items-center justify-center gap-3"
              style={{ display: "flex", color: "#8892B0" }}
            >
              <Camera size={32} strokeWidth={1.5} />
              <span className="text-xs">Add your photo here</span>
            </div>
          </div>
          {/* Mobile: circular on small screens */}
          <style>{`
            @media (max-width: 767px) {
              #hero .shrink-0 > div {
                width: 200px !important;
                aspect-ratio: 1/1 !important;
                border-radius: 50% !important;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
