import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern relative">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-accent/30 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="Vigneshwaran Sivasubramaniyan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-accent/5 -z-10 blur-xl" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
              Vigneshwaran
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gradient">
              DevOps Engineer
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="text-accent font-semibold">8+ years</span> crafting scalable infrastructure,
            automating CI/CD pipelines, and optimizing cloud operations for high-performance systems.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10"><a href="#projects">View Projects</a></span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about" className="block p-2 rounded-full border border-accent/30 hover:border-accent transition-colors">
              <ArrowDown className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
