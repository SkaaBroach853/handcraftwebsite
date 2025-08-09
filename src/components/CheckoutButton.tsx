import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface CheckoutButtonProps {
  productId: string;
  productName: string;
  price: number;
  className?: string;
}

export const CheckoutButton = ({ productId, productName, price, className }: CheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create WhatsApp message for single product
      const message = encodeURIComponent(
        `Hello! I'd like to purchase this item from Vanya Hastakala:

🛍️ *Quick Order* 🛍️
${productName} - ₹${price.toLocaleString('en-IN')}

Please confirm availability. Thank you!`
      );
      
      // Replace with your actual WhatsApp number
      const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Redirecting to WhatsApp! 📱",
        description: `Opening WhatsApp for ${productName}`,
      });
      
      setIsLoading(false);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCheckout}
      disabled={isLoading}
      className={`bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-cormorant font-medium transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-105 ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Buy Now
        </>
      )}
    </Button>
  );
};