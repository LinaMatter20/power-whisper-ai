import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  intro?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, label, intro, children }: SectionWrapperProps) => (
  <section id={id} className="py-20 px-6">
    <div className="max-w-[900px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">{label}</h2>
        {intro && <p className="text-muted-foreground mb-10 max-w-2xl">{intro}</p>}
        {!intro && <div className="mb-10" />}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
