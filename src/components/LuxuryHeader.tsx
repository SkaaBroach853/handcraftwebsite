import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CartButton } from "./CartButton";
import artisanLogo from "@/assets/artisan-logo.png";

export const LuxuryHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-strong shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={artisanLogo} 
              alt="Vanya Hastakala Artisan" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <motion.h1 
                className="text-2xl font-sanskrit font-bold text-gradient"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Vanya Hastakala
              </motion.h1>
              <motion.p 
                className="text-sm font-cormorant text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Premium Bamboo Handicrafts
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CartButton />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};