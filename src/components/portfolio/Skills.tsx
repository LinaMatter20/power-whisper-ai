import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface SkillCategory {
  emoji: string;
  title: string;
  color: string;
  skills: string[];
  note?: string;
}

const categories: SkillCategory[] = [
  {
    emoji: "🐍",
    title: "Data Science & Analysis",
    color: "hsl(165, 100%, 42%)",
    skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "Statistical Modeling", "Time Series Analysis"],
  },
  {
    emoji: "🤖",
    title: "AI / ML / Deep Learning",
    color: "hsl(214, 100%, 65%)",
    skills: ["TensorFlow", "PyTorch", "Keras", "HuggingFace Transformers", "NLP", "Computer Vision", "Supervised & Unsupervised ML"],
  },
  {
    emoji: "⚙️",
    title: "MLOps & Cloud",
    color: "hsl(263, 91%, 76%)",
    skills: ["Docker", "MLflow", "CI/CD", "Azure", "Huawei Cloud", "FastAPI", "Git & GitHub", "Linux", "REST APIs"],
  },
  {
    emoji: "📊",
    title: "BI & Visualization",
    color: "hsl(45, 97%, 58%)",
    skills: ["Power BI", "Tableau", "Excel", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    emoji: "🗄️",
    title: "Databases",
    color: "hsl(220, 15%, 55%)",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    emoji: "☁️",
    title: "Currently Exploring",
    color: "hsl(340, 80%, 65%)",
    skills: ["Quantum Computing (Qiskit · ALU · QWorld)"],
  },
  {
    emoji: "🏗️",
    title: "System Design & Architecture",
    color: "hsl(263, 91%, 76%)",
    skills: ["System Design", "Software Architecture", "High-Level Design", "Data Flow Diagrams", "UML", "Component Diagrams", "Deployment Diagrams", "Scalable Systems", "REST APIs", "Microservices", "Database Schema Design", "Sequence Diagrams"],
    note: "Designed full system architectures from scratch — including layered architectures, deployment diagrams, and database schemas for production-scale AI platforms.",
  },
];

const Skills = () => (
  <SectionWrapper
    id="skills"
    label="🧠 My Tech Stack"
    intro="A full-stack data science toolkit — from raw SQL to cloud-deployed ML models."
  >
    <div className="space-y-8">
      {categories.map((cat, catIdx) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: catIdx * 0.08 }}
        >
          <h3 className="font-heading text-lg text-foreground mb-3">
            {cat.emoji} {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  borderColor: `${cat.color}40`,
                  backgroundColor: `${cat.color}15`,
                  color: `${cat.color}e6`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Skills;
