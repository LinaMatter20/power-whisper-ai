import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Cert {
  emoji: string;
  name: string;
  issuer: string;
  year: string;
}

const certs: Cert[] = [
  { emoji: "🟢", name: "Huawei Big Data Associate", issuer: "NTI", year: "2025" },
  { emoji: "🟢", name: "Digital Egypt Pioneers (Data Scientist)", issuer: "MCIT", year: "2025" },
  { emoji: "🔵", name: "GitHub Foundations", issuer: "DataCamp", year: "2025" },
  { emoji: "🔵", name: "Supervised & Unsupervised ML + Deep Learning", issuer: "DataCamp", year: "2025" },
  { emoji: "🔵", name: "Power BI", issuer: "DataCamp", year: "2025" },
  { emoji: "🟣", name: "Software Engineering Basics", issuer: "IBM / edX", year: "2024" },
  { emoji: "🟣", name: "Intro to Data Science", issuer: "365 Data Science", year: "2024" },
  { emoji: "⬜", name: "Foundations for Big Data with SQL", issuer: "UCSD", year: "" },
  { emoji: "🔮", name: "Quantum Computing (In Progress)", issuer: "ALU & QWorld", year: "2025+" },
];

const Certifications = () => (
  <SectionWrapper
    id="certifications"
    label="🏅 Certifications & Training"
    intro="Continuous upskilling across data science, cloud, MLOps, and emerging tech."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-all duration-300"
        >
          <span className="text-2xl mb-2 block">{cert.emoji}</span>
          <h3 className="font-heading text-sm text-foreground mb-1">{cert.name}</h3>
          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          {cert.year && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/20">
              {cert.year}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
