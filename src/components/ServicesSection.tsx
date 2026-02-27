import { motion } from "framer-motion";
import { Globe, Smartphone, Server, PenTool, Search, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, performant websites with modern frameworks and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that feel native and deliver great user experiences.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Scalable server architecture and RESTful APIs that power your applications reliably.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive interfaces and engaging user experiences crafted with purpose and precision.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical SEO strategies that improve visibility and drive organic traffic.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Data-driven insights and dashboards to measure and optimize performance.",
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
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">My Services</h2>
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
