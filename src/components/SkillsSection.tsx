const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'C', 'HTML', 'CSS'] },
  { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'GCP', 'Linux', 'Shell Scripting'] },
  { category: 'Tools', items: ['Git', 'GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Skills &
            <span className="text-gradient"> Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-semibold mb-6 pb-4 border-b border-border">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's work <span className="text-gradient">together</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss 
              how we can bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
