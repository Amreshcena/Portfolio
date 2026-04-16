import { motion } from "framer-motion";
import { Mail, ExternalLink, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-card-foreground mb-8"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg text-foreground max-w-2xl mx-auto mb-12"
      >
        I'm actively seeking Software Engineer and Data-related roles in Japan. Feel free to
        reach out for collaborations or opportunities!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6"
      >
        <a
          href="mailto:amreshcena1@gmail.com"
          className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors text-card-foreground"
        >
          <Mail size={18} className="text-primary" />
          amreshcena1@gmail.com
        </a>
        <a
          href="tel:+919629434736"
          className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors text-card-foreground"
        >
          <Phone size={18} className="text-primary" />
          +91-9629434736
        </a>
        <a
          href="https://www.linkedin.com/in/amresh-m-875b71234/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors text-card-foreground"
        >
          <ExternalLink size={18} className="text-primary" />
          LinkedIn
        </a>
        <a
          href="https://datascienceportfol.io/AmreshM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors text-card-foreground"
        >
          <Globe size={18} className="text-primary" />
          Data Science Portfolio
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
