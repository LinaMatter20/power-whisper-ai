import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  heading?: string;
  intro?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, label, heading, intro, children }: SectionWrapperProps) => (
  <section id={id} className="py-20 px-6">
    <div className="max-w-[900px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {heading ? (
          <>
            <p
              className="uppercase tracking-[0.12em] mb-2"
              style={{ fontSize: "0.75rem", color: "#00D4AA" }}
            >
              {label}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl mb-2" style={{ color: "#F0F4FF" }}>
              {heading}
            </h2>
          </>
        ) : (
          <h2 className="font-heading text-2xl md:text-3xl mb-2" style={{ color: "#F0F4FF" }}>
            {label}
          </h2>
        )}
        {intro && (
          <p className="mb-10 max-w-2xl" style={{ color: "#8892B0" }}>
            {intro}
          </p>
        )}
        {!intro && <div className="mb-10" />}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
