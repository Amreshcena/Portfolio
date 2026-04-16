import { motion } from "framer-motion";

const certs = [
  { title: "Japanese NAT N3", detail: "February 2026" },
  { title: "Japanese JLPT N4", detail: "December 2025" },
  { title: "Japanese NAT N4", detail: "August 2025" },
  { title: "Japanese NAT N5", detail: "August 2025" },
  { title: "MySQL – HackerRank", detail: "Certification" },
  { title: "DSA (C/C++) – Udemy", detail: "Certification" },
  { title: "Java Full Stack – Udemy", detail: "Basic & Advanced" },
  { title: "Prompt Engineering – be10x", detail: "AI Optimization" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground text-center mb-16"
      >
        Certifications
      </motion.h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-border rounded-xl p-6 bg-card hover:border-primary transition-colors duration-300 flex items-center justify-between"
          >
            <h3 className="font-semibold text-card-foreground">{cert.title}</h3>
            <span className="font-mono text-primary text-sm">{cert.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
