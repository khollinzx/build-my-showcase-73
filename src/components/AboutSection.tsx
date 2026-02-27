import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
];

const highlights = [
  { icon: Code, label: "Clean Code" },
  { icon: Palette, label: "Creative Design" },
  { icon: Rocket, label: "Fast Delivery" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-outfit text-sm tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">
            Passionate About Building
          </h2>
          <div className="gold-line w-20 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a full-stack developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With 5+ years
              in the field, I bring ideas to life using modern technologies
              and thoughtful design.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My approach combines technical excellence with creative
              problem-solving, ensuring every project not only works flawlessly
              but also delights users.
            </p>

            <div className="flex gap-6">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-outfit text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="text-3xl font-ovo text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground font-outfit">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
