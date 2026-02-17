import { motion } from "framer-motion";
import { learnings } from "@/data/data";
import { ExternalLink } from "lucide-react";
import LearningCard from "./LearningCard";
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

const Learning = () => {
  return (
    <section id="learning" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Learning <span className="text-google-yellow">Files</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of learning materials and resources for frontend development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {learnings.map((learning) => (
            <LearningCard key={learning.title} learning={learning} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
