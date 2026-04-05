import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Project {
  title: string;
  badge: string;
  badgeGold: boolean;
  description: string;
  tech: string[];
  metrics: string[];
}

const projects: Project[] = [
  {
    title: "AI Student Ticketing System",
    badge: "⭐ Best Project · DEPI National Award · Team",
    badgeGold: true,
    description:
      "A full AI-powered student support ticketing system — built, trained, and deployed end-to-end. Selected as the best project in Egypt's national DEPI program by MCIT and awarded an EGP 5,000 prize. Combines NLP, intelligent routing, and production deployment.",
    tech: ["Python", "NLP", "FastAPI", "Docker", "CI/CD"],
    metrics: ["98% accuracy", "🏆 DEPI Best Project", "EGP 5,000 award"],
  },
  {
    title: "Google Girl Code (GGC) Project",
    badge: "🌐 Google Initiative · Competitive Program · Team",
    badgeGold: true,
    description:
      "Selected for Google's Girl Code program — a competitive initiative for top female tech talent in the region. Built an AI-driven solution collaboratively, combining data science and software engineering skills under Google's mentorship and evaluation framework.",
    tech: ["Python", "AI/ML", "Data Science", "Team Collaboration", "Google GGC"],
    metrics: ["Google-selected program", "AI solution delivered", "Competitive cohort"],
  },
  {
    title: "Customer Churn Prediction & Dashboard",
    badge: "📡 Telecom · 2024",
    badgeGold: false,
    description:
      "End-to-end ML pipeline predicting customer churn for a telecom client. Benchmarked Naive Bayes, SVM, and KNN classifiers, then visualized results in an interactive Tableau dashboard to help the business identify high-risk customers before they leave.",
    tech: ["Python", "Scikit-learn", "SVM", "KNN", "Naive Bayes", "Tableau"],
    metrics: ["3 models benchmarked", "Interactive business dashboard delivered"],
  },
  {
    title: "Medical Center Intelligent Web Platform",
    badge: "🏥 Real Client · Alexandria University · Team",
    badgeGold: false,
    description:
      "Complete end-to-end intelligent web platform built for a real institutional client — Alexandria University's medical center. Delivered AI-powered smart search, patient flow management, and automated assistance. Fully deployed in a live production environment.",
    tech: ["Python", "AI/ML", "FastAPI", "Web Development", "Team Collaboration"],
    metrics: ["Live production deployment", "Real institutional client"],
  },
  {
    title: "Hazardous Near-Earth Objects Prediction",
    badge: "🚀 Space & Science · 2024",
    badgeGold: false,
    description:
      "ML classification pipeline built on NASA's open asteroid dataset to identify hazardous near-Earth objects. Applied feature engineering, class imbalance handling, and ensemble methods to maximize prediction reliability on real scientific data.",
    tech: ["Python", "Scikit-learn", "Pandas", "Ensemble ML", "NASA Open Data"],
    metrics: ["NASA real-world dataset", "Improved prediction reliability"],
  },
  {
    title: "Diabetes Detection ML Model",
    badge: "🏥 Healthcare · 2023",
    badgeGold: false,
    description:
      "Designed, trained, and compared multiple classifiers to detect early-stage diabetes from clinical data. Applied feature engineering and hyperparameter tuning across Logistic Regression, SVM, and KNN to identify the best-performing model for medical use.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "SVM", "KNN"],
    metrics: ["High classification accuracy", "Healthcare AI use case"],
  },
];

const Projects = () => (
  <SectionWrapper
    id="projects"
    label="🚀 PROJECTS"
    heading="Things I've Built"
    intro="Real-world solutions — deployed, awarded, and client-approved."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-lg p-6 flex flex-col transition-all duration-300"
          style={{
            backgroundColor: "#0D1526",
            border: "1px solid #1A2540",
            borderLeft: "3px solid #00D4AA",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00D4AA")}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid #1A2540";
            e.currentTarget.style.borderLeft = "3px solid #00D4AA";
          }}
        >
          <h3 className="font-heading text-lg mb-2" style={{ color: "#F0F4FF" }}>
            {project.title}
          </h3>
          <span
            className="inline-block px-2 py-1 rounded text-xs mb-3 w-fit font-medium"
            style={
              project.badgeGold
                ? {
                    background: "rgba(251,192,45,0.15)",
                    color: "#FBC02D",
                    border: "1px solid rgba(251,192,45,0.3)",
                  }
                : {
                    background: "rgba(0,212,170,0.1)",
                    color: "#00D4AA",
                    border: "1px solid rgba(0,212,170,0.2)",
                  }
            }
          >
            {project.badge}
          </span>
          <p className="text-sm mb-4 flex-1" style={{ color: "#8892B0", lineHeight: 1.7 }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  background: "rgba(167,139,250,0.12)",
                  color: "#A78BFA",
                  border: "1px solid rgba(167,139,250,0.3)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold" style={{ color: "#00D4AA" }}>
            {project.metrics.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
