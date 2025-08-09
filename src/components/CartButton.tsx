import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartButton = () => {
  const { toggleCart, getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <Button
      onClick={toggleCart}
      variant="outline"
      size="icon"
      className="relative bg-background/90 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
          {itemCount}
        </span>
      )}
    </Button>
  );
};