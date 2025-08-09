import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Star, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ArtisanStories = () => {
  const artisans = [
    {
      id: "1",
      name: "Meera Devi",
      craft: "Bamboo Weaving",
      location: "Tripura, Northeast India",
      experience: "25 years",
      story: "Meera learned the ancient art of bamboo weaving from her grandmother. Her intricate patterns tell stories of nature and tradition, passed down through five generations.",
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
      story: "From temple sculptures to home decor, Rajesh's hands create magic from simple wood blocks. His Buddha sculptures bring peace to homes worldwide.",
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
      story: "Lakshmi specializes in creating narrative art pieces that depict ancient Indian stories and mythology through intricate hand-painted frames.",
      image: "/lovable-uploads/d9471fc8-7e5a-41e0-98c9-78d1ebccb4b1.png",
      specialty: "Mythological Art",
      rating: 5.0,
      products: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/5 to-primary-glow/10 py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 bg-accent/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-primary-glow rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-6 font-cormorant hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Button>
          </Link>
          
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-playfair mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                Artisan
              </span>
              <br />
              <span className="font-cinzel text-4xl md:text-6xl">Stories</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-cormorant mb-8 leading-relaxed">
              Meet the master craftspeople who bring our beautiful handicrafts to life. 
              Each artisan carries centuries of tradition in their skilled hands.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-primary">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="font-cormorant text-lg">Celebrating Heritage & Craftsmanship</span>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Artisan Profiles */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            {artisans.map((artisan, index) => (
              <Card 
                key={artisan.id} 
                className={`group overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-warm)] hover:-translate-y-2 bg-card border-border animate-fade-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2 relative overflow-hidden bg-muted">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground font-cormorant">
                      {artisan.experience}
                    </Badge>
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground font-playfair mb-2 group-hover:text-primary transition-colors">
                        {artisan.name}
                      </h3>
                      <p className="text-xl text-primary font-cinzel mb-3">{artisan.craft}</p>
                      
                      <div className="flex items-center gap-4 text-muted-foreground font-cormorant mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{artisan.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{artisan.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-cormorant text-lg leading-relaxed">
                      {artisan.story}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground font-cormorant">Specialty:</span>
                        <Badge variant="secondary" className="font-cormorant">{artisan.specialty}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground font-cormorant">Products Created:</span>
                        <span className="font-cinzel text-primary">{artisan.products}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant="default" 
                        className="bg-primary hover:bg-primary/90 font-cormorant flex-1"
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Follow Artisan
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-cormorant flex-1"
                      >
                        View Products
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary-glow/5">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-foreground font-playfair mb-4">
            Support Our Artisans
          </h3>
          <p className="text-xl text-muted-foreground font-cormorant mb-8 max-w-2xl mx-auto">
            Every purchase directly supports these talented craftspeople and helps preserve traditional Indian arts for future generations.
          </p>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-cormorant font-medium px-8 py-3 text-lg shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Shop Their Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtisanStories;