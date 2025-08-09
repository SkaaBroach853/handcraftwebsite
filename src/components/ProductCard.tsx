import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CheckoutButton } from "./CheckoutButton";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
}

export const ProductCard = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  category, 
  inStock = true 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!inStock) return;
    
    console.log('Adding to cart:', { id, name, price, image });
    addToCart({
      id,
      name,
      price,
      image
    });
    
    toast({
      title: "Added to Cart! 🛍️",
      description: `${name} has been added to your cart for ₹${price.toLocaleString('en-IN')}`,
    });
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist 💔" : "Added to Wishlist ❤️",
      description: isLiked ? `${name} removed from favorites` : `${name} added to your favorites`,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-warm)] bg-card border-border relative">
        <motion.div 
          className="relative overflow-hidden bg-muted"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute top-4 right-4 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant="secondary" className="bg-background/90 text-foreground font-cormorant">
                {category}
              </Badge>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size="icon"
                variant="ghost"
                className={`bg-background/90 hover:bg-primary hover:text-primary-foreground transition-colors ${
                  isLiked ? 'text-red-500' : 'text-muted-foreground'
                }`}
                onClick={handleLikeToggle}
              >
                <motion.div
                  animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
          {!inStock && (
            <motion.div 
              className="absolute inset-0 bg-background/80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Out of Stock
              </Badge>
            </motion.div>
          )}
        </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <CardHeader className="pb-3">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CardTitle className="font-sanskrit text-xl text-foreground group-hover:text-primary transition-colors">
                {name}
              </CardTitle>
            </motion.div>
            <CardDescription className="font-cormorant text-base text-muted-foreground line-clamp-2">
              {description}
            </CardDescription>
          </CardHeader>
        </motion.div>
        
        <CardContent className="pt-0">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-1">
              <motion.p 
                className="text-2xl font-bold text-primary font-sanskrit"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ₹{price.toLocaleString('en-IN')}
              </motion.p>
              <p className="text-sm text-muted-foreground font-cormorant">
                Inclusive of all taxes
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={handleAddToCart}
                  disabled={!inStock}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-cormorant font-medium transition-all duration-300 shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-gold)]"
                >
                  <motion.div
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                  </motion.div>
                  Add to Cart
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckoutButton 
                  productId={id}
                  productName={name}
                  price={price}
                  className="w-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};