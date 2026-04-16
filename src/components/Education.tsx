import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground text-center mb-16"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-xl p-8 bg-card hover:border-primary transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-card-foreground">
              B.Tech – Computer Science and Business Systems
            </h3>
            <span className="font-mono text-primary text-sm">2020 – 2024</span>
          </div>
          <p className="text-foreground mb-2">
            Sri Eshwar College of Engineering, Coimbatore
          </p>
          <p className="text-primary font-mono text-sm">CGPA: 7.89 / 10</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="border border-border rounded-xl p-8 bg-card hover:border-primary transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-card-foreground">
              HSC / SSLC
            </h3>
            <span className="font-mono text-primary text-sm">2018 – 2020</span>
          </div>
          <p className="text-foreground">
            Sri Ramakrishna Matriculation Higher Secondary School, Coimbatore
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
