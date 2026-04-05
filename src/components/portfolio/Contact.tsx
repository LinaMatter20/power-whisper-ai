import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const Contact = () => (
  <SectionWrapper id="contact" label="📬 Let's Build Something">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-xl mx-auto"
    >
      <h3 className="font-heading text-xl text-foreground mb-4">
        Open to opportunities, collaborations & freelance projects.
      </h3>
      <p className="text-muted-foreground mb-8">
        Whether you're looking for a data scientist to join your team, a freelance ML engineer for your next project, or just want to talk data — I'm always open to a good conversation.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/lina-matter"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 bg-secondary text-secondary-foreground font-heading font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <Linkedin size={18} /> Connect on LinkedIn
        </a>
        <a
          href="https://github.com/LinaMatter20"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 border border-border text-foreground font-heading font-semibold rounded-lg hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <Github size={18} /> View GitHub
        </a>
        <a
          href="mailto:lina.e.mater1@gmail.com"
          className="px-5 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_hsl(165,100%,42%,0.3)] transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <Mail size={18} /> Send an Email
        </a>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin size={14} className="text-primary" /> Alexandria, Egypt
      </span>
    </motion.div>
  </SectionWrapper>
);

export default Contact;
