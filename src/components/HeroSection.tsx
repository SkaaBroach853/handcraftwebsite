import { Button } from "@/components/ui/button";
import { ChevronDown, Heart, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onArtisanStoriesClick?: () => void;
}

export const HeroSection = ({ onArtisanStoriesClick }: HeroSectionProps) => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('featured-collection');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-sanskrit font-bold leading-tight text-gradient"
            >
              Handcrafted
            </motion.h1>
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-medium text-foreground mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Bamboo Treasures
            </motion.h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl font-cormorant text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the timeless beauty of traditional Indian bamboo handicrafts, 
            where each piece tells a story of skilled artisanship and cultural heritage.
          </motion.p>

          {/* Statistics */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { icon: Users, label: "Master Artisans", value: "50+" },
              { icon: Heart, label: "Happy Customers", value: "2.5K+" },
              { icon: Star, label: "Premium Quality", value: "5★" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="h-8 w-8 text-primary" />
                <span className="font-cinzel font-bold text-2xl text-foreground">{stat.value}</span>
                <span className="font-cormorant text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              onClick={scrollToFeatures}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-cormorant font-medium text-lg px-12 py-6 rounded-full shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 animate-glow"
            >
              Explore Collection
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce-slow" />
      </motion.div>
    </section>
  );
};