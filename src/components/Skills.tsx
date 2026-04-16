import { motion } from "framer-motion";

const skillCategories = [
  { abbr: "JV", title: "Java", desc: "Backend development with Micronaut, MVC architecture, OOP" },
  { abbr: "PY", title: "Python", desc: "Data analysis, scripting, Power BI integrations" },
  { abbr: "JS", title: "JavaScript", desc: "React, frontend development, API integrations" },
  { abbr: "SQL", title: "SQL / MySQL", desc: "Query optimization, data validation, reporting" },
  { abbr: "AI", title: "Prompt Engineering", desc: "building AI-powered applications and optimizing prompts for accurate and efficient outputs" },
  { abbr: "BI", title: "Power BI", desc: "DAX, data modeling, interactive dashboards & visualization" },
  { abbr: "日本語", title: "Japanese", desc: "NAT N3 & JLPT N4 certified, business communication" },
  { abbr: "GIT", title: "Dev Tools", desc: "Git, version control, API integrations, debugging" },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground text-center mb-16"
      >
        Core Competencies
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-colors duration-300"
          >
            <div className="font-mono text-3xl font-bold text-primary mb-4">
              {skill.abbr}
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              {skill.title}
            </h3>
            <p className="text-sm text-foreground">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
