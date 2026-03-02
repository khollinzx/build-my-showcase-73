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
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-outfit text-sm tracking-widest uppercase mb-3">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">My Expertise</h2>
          <div className="gold-line w-20 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-ovo mb-3">{service.title}</h3>
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
