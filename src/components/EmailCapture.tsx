import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // TODO: Connect to EmailJS or serverless function
    // Example for EmailJS:
    // import emailjs from '@emailjs/browser';
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { user_email: email }, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
          required
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 transition-all hover:shadow-lg hover:shadow-accent/20"
        >
          {isLoading ? "Sending..." : "Notify Me"}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-3 text-center">
        We'll keep you updated on our launch.
      </p>
    </form>
  );
};

export default EmailCapture;
