import { motion } from "framer-motion";

const projects = [
  {
    title: "Chevening Scholarship 2020",
    description: "Selected as a Chevening Scholar, pursuing MSc in Human Resource Management at the University of Bradford, United Kingdom.",
    tags: ["Chevening", "MSc HRM", "University of Bradford"],
  },
  {
    title: "World Economic Forum – Global Shapers",
    description: "Active member of the Global Shapers Community, driving initiatives for sustainable development and youth empowerment worldwide.",
    tags: ["WEF", "Global Shapers", "Leadership"],
  },
  {
    title: "YALI Fellowship",
    description: "Young African Leaders Initiative Fellow, contributing to leadership development and civic engagement across Africa.",
    tags: ["YALI", "Africa", "Youth Development"],
  },
  {
    title: "ForbesBLK Member",
    description: "Member of the ForbesBLK community, connecting with professionals driving innovation and impact across industries globally.",
    tags: ["ForbesBLK", "Networking", "Impact"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-outfit tracking-[0.3em] uppercase text-primary mb-4">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-6">
            Notable Milestones
          </h2>
          <div className="elegant-divider" />
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="border-l-2 border-primary/30 pl-8 py-6 hover:border-primary/60 transition-colors duration-300"
            >
              <h3 className="text-xl font-ovo mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 border border-border/60 text-muted-foreground font-outfit tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
