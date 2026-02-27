import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and Kanban boards.",
    tags: ["TypeScript", "PostgreSQL", "WebSocket"],
    color: "from-muted to-secondary/50",
  },
  {
    title: "Portfolio Generator",
    description: "A drag-and-drop portfolio builder with customizable templates and themes.",
    tags: ["Next.js", "Tailwind", "Prisma"],
    color: "from-primary/15 to-muted",
  },
  {
    title: "Health & Fitness Tracker",
    description: "Mobile-first fitness app with workout tracking, nutrition logging, and analytics.",
    tags: ["React Native", "Firebase", "Charts"],
    color: "from-secondary to-primary/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-outfit text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">
            Featured Projects
          </h2>
          <div className="gold-line w-20 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-end p-6`}
              >
                <h3 className="text-2xl font-ovo">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-outfit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
