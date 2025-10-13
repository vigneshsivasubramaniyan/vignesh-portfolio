import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern relative">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full border-4 border-accent/50 bg-transparent overflow-hidden">
              <img 
                src={profileImage} 
                alt="Vignesh Sivasubramaniyan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Vignesh Sivasubramaniyan</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            A DevOps Engineer with <span className="text-accent font-semibold">8+ years</span> of experience 
            in automating infrastructure, managing CI/CD pipelines, and optimizing cloud operations.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity">
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a href="#about">
              <ArrowDown className="w-6 h-6 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
