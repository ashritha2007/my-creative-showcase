import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative grain overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Creative Developer & Designer
          </p>
          
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Crafting Digital
            <br />
            <span className="text-gradient">Experiences</span>
          </h1>
          
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            I create beautiful, functional websites and applications that 
            leave lasting impressions. Turning complex ideas into elegant solutions.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
