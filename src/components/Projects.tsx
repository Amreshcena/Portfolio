import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react"; // icons

const projects = [
  {
    title: "FxCalc Pro",
    description:
      "Professional forex calculator with real-time currency conversion and trading analysis tools for traders and financial professionals.",
    tags: ["React", "API", "JavaScript"],
    github: "https://github.com/Amreshcena/fxcalc-pro",
    live: "https://fxwolfix.vercel.app/",
  },
  {
    title: "Nihon Mozhi",
    description:
      "Japanese vocabulary learning platform designed for efficient language mastery, practice, and retention through interactive exercises.",
    tags: ["JavaScript", "Node.js", "Japanese"],
    github: "https://github.com/Amreshcena/japanese-vocab-app",
    live: "https://nihonmozhi.onrender.com/",
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "Interactive Power BI report offering a comprehensive view of personal financial activity — transactions, income vs. expenses, and investment performance.",
    tags: ["Power BI", "DAX", "Data Modeling", "Excel"],
    portfolio: "https://datascienceportfol.io/AmreshM/projects/0",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Revenue and sales performance insights across markets, highlighting top-performing regions, customers, and products with trend analysis.",
    tags: ["Power BI", "DAX", "Visualization"],
    portfolio: "https://datascienceportfol.io/AmreshM/projects/1",
  },
  {
    title: "Student Details Dashboard",
    description:
      "Overview of student enrollments, course popularity, and certification distribution with trends by age group and monthly enrollment patterns.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    portfolio: "https://datascienceportfol.io/AmreshM/projects/2",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Comprehensive employee attendance trends — presence, work-from-home, and sick leave percentages with daily and monthly pattern analysis.",
    tags: ["Power BI", "DAX", "Visualization"],
    portfolio: "https://datascienceportfol.io/AmreshM/projects/3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground text-center mb-16"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-card-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-foreground mb-6 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary border border-primary/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary font-semibold hover:underline text-sm"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-card-foreground font-semibold hover:underline text-sm"
                >
                  <Code size={14} /> GitHub
                </a>
              )}
              {project.portfolio && (
                <a
                  href={project.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary font-semibold hover:underline text-sm"
                >
                  <ExternalLink size={14} /> View Details
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
