import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Modern Technologies",
    description: "Learn React, Vue, TypeScript, and other cutting-edge frontend frameworks.",
    color: "google-blue",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create beautiful and intuitive user interfaces with design principles.",
    color: "google-red",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Build applications that work seamlessly across all devices and screen sizes.",
    color: "google-yellow",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimize web applications for speed and user experience.",
    color: "google-green",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-google-blue">Frontend</span> Development
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Frontend Development division focuses on building the visual and interactive 
            parts of web applications. We turn designs into functional, beautiful websites.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border card-hover"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies we learn and use</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Vite"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-card rounded-full text-sm font-medium border border-border shadow-sm"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
