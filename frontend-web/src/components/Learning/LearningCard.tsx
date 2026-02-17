import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LearningItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  files: string;
  image: string;
  github?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LearningCard = ({ learning }: { learning: LearningItem }) => {
  return (
    <motion.a
      href={learning.files}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border  transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={learning.image}
          alt={learning.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
          <a target="_blank" href={learning.github} className="bg-white/90 text-foreground text-xs font-medium px-2 py-2 rounded-full flex items-center gap-1.5">
            <Github className="w-4 h-4" />
          </a>
          <span className="bg-white/90 text-foreground text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <ExternalLink className="w-3 h-3" />
            Open File
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-lg bg-${learning.color}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <learning.icon className={`w-5 h-5 text-${learning.color}`} />
          </div>
          <h3 className="font-semibold text-lg leading-tight pt-1">
            {learning.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {learning.description}
        </p>
      </div>
    </motion.a>
  );
};

export default LearningCard;
