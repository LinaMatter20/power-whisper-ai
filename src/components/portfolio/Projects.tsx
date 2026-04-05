import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Project {
  title: string;
  badge: string;
  description: string;
  tech: string[];
  metrics: string[];
}

const projects: Project[] = [
  {
    title: "AI Student Ticketing System",
    badge: "⭐ Best Project — DEPI · Team",
    description: "Full AI-powered student support ticketing system, built and deployed end-to-end as part of the national DEPI program by MCIT. Selected as the best project nationwide, awarded EGP 5,000 prize voucher.",
    tech: ["Python", "NLP", "FastAPI", "Docker", "CI/CD"],
    metrics: ["98% accuracy", "🏆 Best Project Award", "EGP 5,000 prize"],
  },
  {
    title: "Customer Churn Prediction & Dashboard",
    badge: "Telecom · 2024",
    description: "Built an end-to-end ML pipeline to predict telecom customer churn. Compared Naive Bayes, SVM, and KNN classifiers, then visualized churn segments in an interactive Tableau dashboard for business decision-making.",
    tech: ["Python", "Scikit-learn", "SVM", "KNN", "Tableau"],
    metrics: ["Multiple models benchmarked", "Interactive dashboard delivered"],
  },
  {
    title: "E-Commerce Customer Segmentation",
    badge: "Marketing Analytics · 2024",
    description: "Applied RFM analysis + unsupervised ML clustering to segment an e-commerce customer base. Delivered a Power BI dashboard that enabled personalized marketing campaigns and smarter budget allocation.",
    tech: ["Python", "K-Means", "RFM", "Power BI", "Pandas"],
    metrics: ["Full segmentation pipeline", "Business-ready dashboard"],
  },
  {
    title: "Medical Center Intelligent Web Platform",
    badge: "Real Client · Alexandria University · Team",
    description: "End-to-end intelligent web platform built for Alexandria University's medical center as a real client. Includes AI-powered smart search, patient flow management, and automated assistance features — deployed live.",
    tech: ["Python", "AI/ML", "FastAPI", "Web Dev", "Team Collaboration"],
    metrics: ["Live production deployment", "Real institutional client"],
  },
  {
    title: "Hazardous Near-Earth Objects Prediction",
    badge: "Space & Science · 2024",
    description: "ML pipeline on NASA's open asteroid dataset to classify near-Earth objects as hazardous or non-hazardous. Used feature engineering, class imbalance handling, and ensemble methods to maximize reliability.",
    tech: ["Python", "Scikit-learn", "Pandas", "NASA Open Data", "Ensemble ML"],
    metrics: ["Improved prediction reliability", "NASA dataset"],
  },
  {
    title: "Diabetes Detection ML Model",
    badge: "Healthcare · 2023",
    description: "Designed, trained, and compared multiple classifiers (Logistic Regression, SVM, KNN) to detect early-stage diabetes from clinical data. Applied feature engineering and hyperparameter tuning for best accuracy.",
    tech: ["Python", "Scikit-learn", "Logistic Regression", "SVM", "Feature Engineering"],
    metrics: ["High classification accuracy", "Healthcare AI use case"],
  },
];

const Projects = () => (
  <SectionWrapper
    id="projects"
    label="🚀 Things I've Built"
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
          className="bg-card border border-border rounded-lg p-6 border-l-4 border-l-primary hover:border-primary/60 transition-all duration-300 flex flex-col"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-heading text-lg text-foreground">{project.title}</h3>
          </div>
          <span className="inline-block px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20 mb-3 w-fit">
            {project.badge}
          </span>
          <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-xs bg-accent/15 text-accent border border-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-primary font-semibold">
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
