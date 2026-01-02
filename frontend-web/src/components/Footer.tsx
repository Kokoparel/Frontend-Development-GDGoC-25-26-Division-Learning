import { motion } from "framer-motion";
import gdgocLogo from "../assets/gdgoc-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src={gdgocLogo}
            alt="GDGOC Logo"
            className="w-16 h-16 mb-4"
          />
          <h3 className="font-display text-xl font-semibold mb-2">
            GDGOC UNSRI - Frontend Development
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Building the future of web, one component at a time.
          </p>

          {/* Google Colors Divider */}
          <div className="flex gap-1 mb-6">
            <div className="w-12 h-1 rounded-full bg-google-blue" />
            <div className="w-12 h-1 rounded-full bg-google-red" />
            <div className="w-12 h-1 rounded-full bg-google-yellow" />
            <div className="w-12 h-1 rounded-full bg-google-green" />
          </div>

          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-google-red fill-google-red" /> by Frontend Division
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            © 2025 Google Developer Group on Campus - Universitas Sriwijaya
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
