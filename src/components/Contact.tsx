import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a conversation about DevOps and cloud technologies.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:vigneshsivasubramaniyan@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-card/30 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground/80 group-hover:text-accent transition-colors">
                  vigneshsivasubramaniyan@gmail.com
                </span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vigneshwaran-sivasubramaniyan/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-card/30 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground/80 group-hover:text-accent transition-colors">
                  LinkedIn Profile
                </span>
              </a>
              
              <a 
                href="https://github.com/vigneshsivasubramaniyan" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:border-accent/50 bg-card/30 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground/80 group-hover:text-accent transition-colors">
                  GitHub Profile
                </span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12 bg-card/50 border-border/50 focus:border-accent"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12 bg-card/50 border-border/50 focus:border-accent"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-card/50 border-border/50 focus:border-accent resize-none"
            />
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
