import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Minus, Plus, Trash2, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { state, removeFromCart, updateQuantity, closeCart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const SHIPPING_CHARGE = 60;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleBuyNowWhatsApp = () => {
    const items = state.items.map((item, index) => 
      `${index + 1}. ${item.name} (x${item.quantity}) – ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    const message = encodeURIComponent(
      `Hello! I'd like to place this order from Vanya Hastakala:

🛍️ *Cart Order* 🛍️
----------------------------------
${items}
----------------------------------
🧾 Subtotal: ₹${totalPrice.toLocaleString('en-IN')}
🚚 Shipping: ₹${SHIPPING_CHARGE}
💰 Grand Total: ₹${grandTotal.toLocaleString('en-IN')}

Please confirm availability. Thank you!`
    );
    
    // Updated with actual WhatsApp number for Vanya Hastakala
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    closeCart();
  };

  const totalPrice = getTotalPrice();
  const grandTotal = totalPrice + SHIPPING_CHARGE;

  return (
    <Sheet open={state.isOpen} onOpenChange={() => state.isOpen && closeCart()}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-sanskrit text-xl text-foreground">
              🛍️ Your Cart
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="flex flex-col h-full py-6">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-cormorant text-lg">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground">
                  Add some beautiful handcrafted items!
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg bg-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-playfair font-medium text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-primary font-cinzel font-bold">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="font-bold text-primary">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-4">
                <div className="space-y-2 font-cormorant">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>₹{SHIPPING_CHARGE}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                    <span>Total:</span>
                    <span className="text-primary">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-cormorant font-medium h-12 text-lg"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Button
                    onClick={handleBuyNowWhatsApp}
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50 font-cormorant font-medium h-12 text-lg"
                  >
                    Buy Now via WhatsApp
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};