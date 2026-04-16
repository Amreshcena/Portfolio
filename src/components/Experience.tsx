import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground text-center mb-16"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="border border-border rounded-xl p-8 bg-card hover:border-primary transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-2xl font-semibold text-card-foreground">
              Software Engineer (Java Developer)
            </h3>
            <span className="font-mono text-primary text-sm mt-1 sm:mt-0">
              Jun 2024 – Jan 2025
            </span>
          </div>
          <p className="text-foreground mb-6">
            Cloud Based ERP Software Application, Vyoog Information — Coimbatore,
            Tamil Nadu
          </p>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Developed and maintained Java-based ERP modules following SDLC practices
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Implemented backend business logic using Java and Micronaut framework
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Designed HR module features: payroll, attendance, allowances, and appraisal workflows
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Generated database-driven reports and PDF templates through backend integration
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Wrote optimized SQL queries for reporting and data validation
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Performed debugging and root cause analysis for production issues
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Collaborated with stakeholders for requirement analysis and timely delivery
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Java", "Micronaut", "MySQL", "MVC", "Thymeleaf", "Git", "API Integration"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary border border-primary/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
