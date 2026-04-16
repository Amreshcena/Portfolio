import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <header className="container mx-auto px-6 pt-20 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-card-foreground mb-6 leading-tight">
            Building{" "}
            <span className="text-primary">robust systems</span> with clean
            code.
          </h1>
          <p className="text-lg text-foreground mb-8 max-w-xl">
            Japanese-proficient (N3 NAT, JLPT N4) Software Engineer with
            hands-on experience in Java-based ERP development, SQL optimization,
            and data-driven applications.Prompt Engineer and Software Developer with experience in building AI-powered applications and optimizing prompts for accurate and efficient outputs. 
            Skilled in API integrations, backend development, and data workflows using Java, Python, and SQL. 
            Seeking Software Engineer and Data-related roles in Japan.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border rounded-lg font-semibold text-card-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/amresh-m-875b71234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href="mailto:amreshcena1@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="grid grid-cols-3 gap-4">
            {[
              
              { value: "Python", label: "Primary Lang" },
              { value: "Java", label: "Primary Lang" },
              { value: "8months+", label: "Experience" },
              { value: "AI", label: "Prompt Engineer" },
              { value: "SQL", label: "Database" },
              { value: "日本語", label: "Fluent N3" },
              
            ].map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors duration-300"
              >
                <div className="font-mono text-3xl font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
