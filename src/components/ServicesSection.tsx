import { motion } from "framer-motion";
import { Users, BarChart3, Heart, Target, BookOpen, Globe } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Talent Management",
    description: "Strategic talent acquisition, development, and retention to build high-performing teams.",
  },
  {
    icon: Heart,
    title: "People Operations & Culture",
    description: "Creating exceptional employee experiences and fostering inclusive workplace cultures.",
  },
  {
    icon: BarChart3,
    title: "HR Analytics",
    description: "Data-driven insights to optimize workforce planning, performance, and organizational effectiveness.",
  },
  {
    icon: Target,
    title: "Change Management",
    description: "Leading organizational transformation initiatives and driving strategic change across teams.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Designing training programs and career development pathways to grow organizational capability.",
  },
  {
    icon: Globe,
    title: "SDG Advocacy",
    description: "Championing sustainable development goals and youth empowerment through global initiatives.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-outfit tracking-[0.3em] uppercase text-primary mb-4">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-6">My Expertise</h2>
          <div className="elegant-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="section-card p-8 group"
            >
              <service.icon size={20} className="text-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-ovo mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
