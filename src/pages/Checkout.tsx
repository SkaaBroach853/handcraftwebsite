import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const Checkout = () => {
  const { state, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: ""
  });

  const SHIPPING_CHARGE = 60;
  const totalPrice = getTotalPrice();
  const grandTotal = totalPrice + SHIPPING_CHARGE;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-sanskrit text-foreground">Your cart is empty</h1>
          <Button onClick={() => navigate('/')} className="font-cormorant">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const generateWhatsAppMessage = () => {
    const items = state.items.map((item, index) => 
      `${index + 1}. ${item.name} (x${item.quantity}) – ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    return `Hello! I'd like to place this order from Vanya Hastakala:

🛍️ *Vanya Hastakala Order* 🛍️
----------------------------------
${items}
----------------------------------
🧾 Subtotal: ₹${totalPrice.toLocaleString('en-IN')}
🚚 Shipping: ₹${SHIPPING_CHARGE}
💰 Grand Total: ₹${grandTotal.toLocaleString('en-IN')}

📋 Customer Details:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}
${customerInfo.notes ? `Notes: ${customerInfo.notes}` : ''}

Please confirm availability. Thank you!`;
  };

  const handleConfirmOrder = async () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsConfirmed(true);
    setIsProcessing(false);

    // Redirect to WhatsApp after showing success
    setTimeout(() => {
      const message = encodeURIComponent(generateWhatsAppMessage());
      // Replace YOUR_WHATSAPP_NUMBER with your actual WhatsApp number (e.g., 919876543210)
      const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${message}`;
      window.open(whatsappUrl, '_blank');
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center animate-scale-in">
          <CardContent className="pt-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-sanskrit text-foreground mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground font-cormorant">
                You'll now be redirected to WhatsApp.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Please send your order to confirm.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="font-cormorant mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
          <h1 className="text-3xl font-sanskrit text-foreground">Checkout</h1>
          <p className="text-muted-foreground font-cormorant mt-2">
            Complete your order below
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Customer Information */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-sanskrit">Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-cormorant">Name *</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-cormorant">Phone Number *</Label>
                <Input
                  id="phone"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="font-cormorant">Delivery Address *</Label>
                <Textarea
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Your complete address"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes" className="font-cormorant">Special Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Gift wrapping, special instructions, etc."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="font-sanskrit">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Products */}
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-playfair text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-cinzel font-bold text-primary">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-border pt-4 space-y-2 font-cormorant">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>₹{SHIPPING_CHARGE}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                  <span>Grand Total:</span>
                  <span className="text-primary">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-cormorant font-medium h-12 text-lg mt-6"
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                    Processing...
                  </div>
                ) : (
                  <>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Confirm Order via WhatsApp
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-2">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;