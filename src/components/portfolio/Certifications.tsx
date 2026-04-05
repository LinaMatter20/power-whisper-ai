import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Cert {
  emoji: string;
  name: string;
  issuer: string;
  year: string;
}

const certs: Cert[] = [
  { emoji: "🟢", name: "Huawei Big Data Associate", issuer: "NTI", year: "August 2025" },
  { emoji: "🟢", name: "Digital Egypt Pioneers — Data Scientist", issuer: "MCIT", year: "July 2025" },
  { emoji: "🔵", name: "GitHub Foundations", issuer: "DataCamp", year: "July 2025" },
  { emoji: "🔵", name: "Deep Learning with TensorFlow", issuer: "365 Data Science", year: "2025" },
  { emoji: "🟣", name: "Intro to Data Science", issuer: "365 Data Science", year: "November 2024" },
  { emoji: "⬜", name: "Foundations for Big Data with SQL", issuer: "UCSD", year: "" },
  { emoji: "🔮", name: "Quantum Computing", issuer: "ALU & QWorld", year: "September 2025" },
];

const Certifications = () => (
  <SectionWrapper
    id="certifications"
    label="🏅 CERTIFICATIONS"
    heading="Certifications & Training"
    intro="Continuous upskilling across data science, cloud, MLOps, and emerging technologies."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert, i) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="rounded-lg p-4 transition-all duration-300"
          style={{
            backgroundColor: "#0D1526",
            border: "1px solid #1A2540",
          }}
        >
          <span className="text-2xl mb-2 block">{cert.emoji}</span>
          <h3 className="font-heading text-sm mb-1" style={{ color: "#F0F4FF" }}>
            {cert.name}
          </h3>
          <p className="text-xs" style={{ color: "#8892B0" }}>
            {cert.issuer}
          </p>
          {cert.year && (
            <span
              className="inline-block mt-2 px-2 py-0.5 rounded text-xs"
              style={{
                background: "rgba(0,212,170,0.1)",
                color: "#00D4AA",
                border: "1px solid rgba(0,212,170,0.2)",
              }}
            >
              {cert.year}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Certifications;
