import { HeroSection } from "@/components/HeroSection";
import { LuxuryHeader } from "@/components/LuxuryHeader";
import { ProductCard } from "@/components/ProductCard";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MapPin, Star, Heart, X, Users } from "lucide-react";

const Index = () => {
  const [showArtisanStories, setShowArtisanStories] = useState(false);

  // Artisan data
  const artisans = [
    {
      id: "1",
      name: "Meera Devi",
      craft: "Bamboo Weaving",
      location: "Tripura, Northeast India",
      experience: "25 years",
      story: "Meera learned the ancient art of bamboo weaving from her grandmother. Her intricate patterns tell stories of nature and tradition.",
      image: "/lovable-uploads/0d52052b-3803-4221-a1ba-3142a8982e55.png",
      specialty: "Geometric Patterns",
      rating: 4.9,
      products: 47
    },
    {
      id: "2",
      name: "Rajesh Kumar", 
      craft: "Wood Carving",
      location: "Rajasthan, India",
      experience: "30 years",
      story: "From temple sculptures to home decor, Rajesh's hands create magic from simple wood blocks.",
      image: "/lovable-uploads/7e5feb18-673f-4035-a2b5-787aec8636b4.png",
      specialty: "Religious Sculptures",
      rating: 4.8,
      products: 32
    },
    {
      id: "3",
      name: "Lakshmi Amma",
      craft: "Traditional Art", 
      location: "Kerala, South India",
      experience: "35 years",
      story: "Lakshmi specializes in creating narrative art pieces that depict ancient Indian stories and mythology.",
      image: "/lovable-uploads/d9471fc8-7e5a-41e0-98c9-78d1ebccb4b1.png",
      specialty: "Mythological Art",
      rating: 5.0,
      products: 28
    }
  ];

  // Product data using your uploaded images
  const products = [
    {
      id: "1",
      name: "Traditional Handcrafted Frame",
      description: "Exquisite wooden frame featuring traditional Indian art with hand-painted figures and sacred tree motifs",
      price: 3500,
      image: "/lovable-uploads/d9471fc8-7e5a-41e0-98c9-78d1ebccb4b1.png",
      category: "Wall Art",
      inStock: true
    },
    {
      id: "2", 
      name: "Carved Buddha Sculpture",
      description: "Serene Buddha statue meticulously carved from premium wood, perfect for meditation spaces and home decor",
      price: 2800,
      image: "/lovable-uploads/7e5feb18-673f-4035-a2b5-787aec8636b4.png",
      category: "Sculptures",
      inStock: true
    },
    {
      id: "3",
      name: "Woven Bamboo Handbag",
      description: "Elegant handwoven bamboo bag with intricate geometric patterns, eco-friendly and stylish",
      price: 1200,
      image: "/lovable-uploads/0d52052b-3803-4221-a1ba-3142a8982e55.png",
      category: "Bags",
      inStock: true
    },
    {
      id: "4",
      name: "Traditional Cane Purse Set",
      description: "Beautiful set of handcrafted cane bags with traditional weaving patterns, perfect for daily use",
      price: 1800,
      image: "/lovable-uploads/c93d4e11-535f-45a7-b84a-2353b07d0a80.png",
      category: "Bags",
      inStock: true
    },
    {
      id: "5",
      name: "Artisan Woven Briefcase",
      description: "Professional bamboo briefcase with traditional weaving techniques, combining heritage with modern utility",
      price: 2500,
      image: "/lovable-uploads/cc792354-947d-4ef3-b910-bf6e7335120d.png",
      category: "Bags",
      inStock: true
    },
    {
      id: "6",
      name: "Wooden Storage Containers",
      description: "Set of handcrafted wooden containers with traditional designs, perfect for storing spices or treasures",
      price: 1500,
      image: "/lovable-uploads/78cd86f8-bdc6-43d1-8293-bc3f97cf3cf3.png",
      category: "Storage",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <LuxuryHeader />
      <HeroSection onArtisanStoriesClick={() => setShowArtisanStories(true)} />
      
      {/* Featured Products Section */}
      <section 
        id="featured-collection" 
        className={`py-20 relative overflow-hidden transition-all duration-700 ${
          showArtisanStories ? 'backdrop-blur-strong bg-background/20' : 'bg-gradient-to-br from-background/95 via-background/90 to-muted/95'
        }`}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-sanskrit font-bold text-gradient mb-4"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.6 }}
            >
              Featured Collection
            </motion.h2>
            <motion.p 
              className="text-xl font-cormorant text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Handpicked masterpieces that showcase the finest bamboo craftsmanship
            </motion.p>
            
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                onClick={() => setShowArtisanStories(true)}
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-cormorant font-medium transition-all duration-300"
              >
                Meet Our Artisans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            id="products-section" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.1 * index,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-32 h-32 border border-accent/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Artisan Stories Slide Panel */}
      <AnimatePresence>
        {showArtisanStories && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowArtisanStories(false)}
            />
            
            {/* Slide Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 bg-background shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="relative">
                {/* Close Button */}
                <Button
                  onClick={() => setShowArtisanStories(false)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Header */}
                <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/5 to-primary-glow/10 py-16">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 right-20 w-16 h-16 bg-accent/30 rounded-full animate-bounce"></div>
                  </div>
                  
                  <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                      className="text-center max-w-4xl mx-auto"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h1 className="text-4xl md:text-6xl font-bold text-foreground font-sanskrit mb-6">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                          Artisan
                        </span>
                        <br />
                        <span className="font-sanskrit text-3xl md:text-5xl">Stories</span>
                      </h1>
                      
                      <p className="text-lg md:text-xl text-muted-foreground font-cormorant mb-8 leading-relaxed">
                        Meet the master craftspeople who bring our beautiful handicrafts to life.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 text-primary">
                        <Users className="h-5 w-5" />
                        <span className="font-cormorant text-lg">Celebrating Heritage & Craftsmanship</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Artisan Profiles */}
                <section className="py-12 px-6">
                  <div className="container mx-auto max-w-5xl">
                    <div className="grid gap-8">
                      {artisans.map((artisan, index) => (
                        <motion.div
                          key={artisan.id}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <Card className="group overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-card border-border">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-1/3 relative overflow-hidden bg-muted">
                                <img 
                                  src={artisan.image} 
                                  alt={artisan.name}
                                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4">
                                  <Badge className="bg-primary/90 text-primary-foreground font-cormorant">
                                    {artisan.experience}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="text-2xl font-bold text-foreground font-sanskrit mb-2 group-hover:text-primary transition-colors">
                                      {artisan.name}
                                    </h3>
                                    <p className="text-lg text-primary font-sanskrit mb-2">{artisan.craft}</p>
                                    
                                    <div className="flex items-center gap-4 text-muted-foreground font-cormorant mb-3">
                                      <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-sm">{artisan.location}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm">{artisan.rating}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <p className="text-muted-foreground font-cormorant leading-relaxed">
                                    {artisan.story}
                                  </p>
                                  
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-muted-foreground font-cormorant">Specialty:</span>
                                    <Badge variant="secondary" className="font-cormorant">{artisan.specialty}</Badge>
                                  </div>
                                  
                                  <div className="flex gap-2 pt-2">
                                    <Button 
                                      variant="default" 
                                      size="sm"
                                      className="bg-primary hover:bg-primary/90 font-cormorant flex-1"
                                    >
                                      <Heart className="mr-1 h-3 w-3" />
                                      Follow
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-cormorant flex-1"
                                    >
                                      Products ({artisan.products})
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
};

export default Index;
