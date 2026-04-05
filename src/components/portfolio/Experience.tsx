import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface TimelineItem {
  title: string;
  org: string;
  period: string;
  points: string[];
  type: "experience" | "education";
}

const experience: TimelineItem[] = [
  {
    title: "Freelance Data Scientist / AI Engineer",
    org: "Self-employed",
    period: "2023 – Present",
    points: [
      "Delivered 5-star client-rated solutions in predictive analytics, NLP, and dashboards",
      "Built custom ML models improving business KPIs — accuracy up by up to 25%",
      "Managed full project lifecycles across 5+ engagements, from scoping to delivery",
    ],
    type: "experience",
  },
  {
    title: "Data Science & AI Intern",
    org: "GTC",
    period: "2025",
    points: [
      "Built and optimized ML models focused on production deployment",
      "Translated business problems into scalable AI solutions and optimized data workflows",
    ],
    type: "experience",
  },
  {
    title: "Big Data Associate Intern",
    org: "Huawei / NTI",
    period: "August 2025",
    points: [
      "Trained in distributed data systems, Huawei Cloud, and big data analytics",
      "Completed the Huawei Big Data Associate certification as part of this program",
    ],
    type: "experience",
  },
  {
    title: "Data Science Trainee",
    org: "DEPI Program (MCIT)",
    period: "October 2024 – May 2025",
    points: [
      "Built and deployed real-world ML applications",
      "Awarded Best Project (EGP 5,000 voucher) for the AI Student Ticketing System",
    ],
    type: "experience",
  },
  {
    title: "AI/ML Bootcamp Trainee",
    org: "Microsoft Student Club (EELU)",
    period: "October 2024",
    points: [
      "Completed hands-on ML projects and soft skills sessions under a Microsoft-supported program",
    ],
    type: "experience",
  },
  {
    title: "Quantum Computing Trainee",
    org: "ALU & QWorld",
    period: "September 2025",
    points: [
      "Completed practical quantum algorithms and quantum programming fundamentals using Qiskit through ALU and QWorld's intensive training program.",
    ],
    type: "experience",
  },
];

const education: TimelineItem[] = [
  {
    title: "B.Sc. Computer & Data Science",
    org: "Alexandria University",
    period: "2022 – Expected 2026",
    points: [
      "Specializing in ML, data engineering, and AI systems",
      "Active in research, national competitions, and real-client team projects",
    ],
    type: "education",
  },
];

const TimelineEntry = ({ item, index }: { item: TimelineItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative pl-8 pb-10 last:pb-0"
  >
    <div className="absolute left-0 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: "#00D4AA", border: "2px solid #0A0F1E" }} />
    <div className="absolute left-[5px] top-5 w-0.5 h-full" style={{ backgroundColor: "#1A2540" }} />
    <div
      className="rounded-lg p-5"
      style={{
        backgroundColor: "#0D1526",
        border: "1px solid #1A2540",
        borderLeft: "3px solid #00D4AA",
      }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h3 className="font-heading text-base" style={{ color: "#F0F4FF" }}>{item.title}</h3>
        <span
          className="text-xs px-2 py-0.5 rounded"
          style={{
            background: "rgba(0,212,170,0.1)",
            color: "#00D4AA",
            border: "1px solid rgba(0,212,170,0.2)",
          }}
        >
          {item.period}
        </span>
      </div>
      <p className="text-sm mb-3" style={{ color: "#4A9EFF" }}>{item.org}</p>
      <ul className="space-y-1.5">
        {item.points.map((point, pi) => (
          <li key={pi} className="text-sm flex items-start gap-2" style={{ color: "#8892B0" }}>
            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full inline-block" style={{ backgroundColor: "#00D4AA" }} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => (
  <SectionWrapper id="experience" label="🗺️ JOURNEY" heading="My Journey">
    <div className="mb-12">
      <h3 className="font-heading text-lg mb-6" style={{ color: "#F0F4FF" }}>Experience</h3>
      <div className="relative">
        {experience.map((item, i) => (
          <TimelineEntry key={item.title + item.org} item={item} index={i} />
        ))}
      </div>
    </div>
    <div>
      <h3 className="font-heading text-lg mb-6" style={{ color: "#F0F4FF" }}>Education</h3>
      <div className="relative">
        {education.map((item, i) => (
          <TimelineEntry key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Experience;
