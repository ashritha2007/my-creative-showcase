const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-8 border border-primary/20 rounded-xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-gold shadow-glow" />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Passionate about creating
              <span className="text-gradient"> meaningful</span> work
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a creative developer with over 5 years of experience building 
                digital products. My passion lies in the intersection of design 
                and technology, where aesthetics meet functionality.
              </p>
              <p>
                I specialize in creating responsive, user-centered web applications 
                using modern technologies. Every project I take on is an opportunity 
                to push creative boundaries while delivering exceptional results.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border mt-8">
              <div>
                <p className="font-display text-3xl font-bold text-gradient">5+</p>
                <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gradient">50+</p>
                <p className="text-muted-foreground text-sm mt-1">Projects Done</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gradient">30+</p>
                <p className="text-muted-foreground text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
