import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with seamless checkout experience and real-time inventory management.',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive financial analytics dashboard with interactive charts and data visualization.',
    tags: ['TypeScript', 'D3.js', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Mobile App Design',
    category: 'Product Design',
    description: 'Health and wellness app focused on mental well-being with calming aesthetics and intuitive UX.',
    tags: ['Figma', 'Prototyping', 'Research'],
  },
  {
    id: 4,
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand identity for a sustainable fashion startup including logo, typography, and guidelines.',
    tags: ['Branding', 'Typography', 'Strategy'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-card/50 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="text-gradient"> Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of projects that showcase my skills and passion for 
            creating exceptional digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={18} />
                  </Button>
                </div>
                
                <h3 className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
