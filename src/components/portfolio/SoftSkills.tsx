import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skills = [
  { emoji: "🧩", title: "Problem Solving", desc: "I diagnose the real question before I touch the data." },
  { emoji: "🤝", title: "Team Collaboration", desc: "Built award-winning projects with cross-functional teams under real deadlines." },
  { emoji: "📐", title: "Research Mindset", desc: "I read papers, test hypotheses, and trust the data — not the assumption." },
  { emoji: "🗂️", title: "Project Management", desc: "From scoping to delivery, I own the full lifecycle." },
  { emoji: "🌍", title: "Multilingual", desc: "Arabic (native) · English (B2, advancing) · French (elementary)" },
  { emoji: "🔄", title: "Adaptability", desc: "From telecom churn to NASA asteroids to quantum computing — I go where the problem is." },
];

const SoftSkills = () => (
  <SectionWrapper
    id="softskills"
    label="✨ Beyond the Code"
    intro="The human skills that make the models actually work."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-all duration-300"
        >
          <span className="text-3xl mb-3 block">{skill.emoji}</span>
          <h3 className="font-heading text-base text-foreground mb-2">{skill.title}</h3>
          <p className="text-sm text-muted-foreground">{skill.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SoftSkills;
