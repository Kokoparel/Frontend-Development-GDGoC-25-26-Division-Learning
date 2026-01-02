import { motion } from "framer-motion";
import gdgocLogo from "../assets/gdgoc-logo.png";
import { Code2, Layout, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-google-blue/10"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-google-red/10"
          animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-google-yellow/10"
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-14 h-14 rounded-full bg-google-green/10"
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={gdgocLogo}
              alt="GDGOC Logo"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-lg md:text-xl mb-2">
              Google Developer Group on Campus
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-google-blue">F</span>
              <span className="text-google-red">r</span>
              <span className="text-google-yellow">o</span>
              <span className="text-google-green">n</span>
              <span className="text-google-blue">t</span>
              <span className="text-google-red">e</span>
              <span className="text-google-yellow">n</span>
              <span className="text-google-green">d</span>
              <span className="text-foreground"> Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Universitas Sriwijaya
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Building beautiful, interactive, and responsive web experiences together.
            Join us to learn, grow, and create amazing things!
          </motion.p>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-google-blue/10 text-google-blue">
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Modern Tech</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-google-green/10 text-google-green">
              <Layout className="w-5 h-5" />
              <span className="font-medium">Responsive UI</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-google-yellow/10 text-google-yellow">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Best Practices</span>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 mx-auto rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
