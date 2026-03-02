import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Chevening Scholarship 2020",
    description: "Selected as a Chevening Scholar, pursuing MSc in Human Resource Management at the University of Bradford, United Kingdom.",
    tags: ["Chevening", "MSc HRM", "University of Bradford"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "World Economic Forum – Global Shapers",
    description: "Active member of the Global Shapers Community, driving initiatives for sustainable development and youth empowerment worldwide.",
    tags: ["WEF", "Global Shapers", "Leadership"],
    color: "from-muted to-secondary/50",
  },
  {
    title: "YALI Fellowship",
    description: "Young African Leaders Initiative Fellow, contributing to leadership development and civic engagement across Africa.",
    tags: ["YALI", "Africa", "Youth Development"],
    color: "from-primary/15 to-muted",
  },
  {
    title: "ForbesBLK Member",
    description: "Member of the ForbesBLK community, connecting with professionals driving innovation and impact across industries globally.",
    tags: ["ForbesBLK", "Networking", "Impact"],
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
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">
            Notable Milestones
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

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-outfit"
                    >
                      {tag}
                    </span>
                  ))}
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
