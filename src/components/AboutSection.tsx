import { motion } from "framer-motion";
import { Users, Award, Globe } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5K+", label: "LinkedIn Network" },
  { value: "6K+", label: "Followers" },
];

const highlights = [
  { icon: Users, label: "People Operations" },
  { icon: Award, label: "Chevening Scholar" },
  { icon: Globe, label: "Global Shaper" },
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
          <p className="text-primary font-outfit text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-4">Passionate About People</h2>
          <div className="gold-line w-20 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 justify text-justify">
              I am a Human Resources Professional, Talent Manager, and Data Analyst with over a decade of experience
              optimizing HR management in the maritime, oil and gas, and other sectors. My expertise lies in driving
              change, leading and developing people, and making sure employees have the best experience within the
              organization.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 justify text-justify">
              As a YALI Fellow, a Global Shaper with the World Economic Forum, a Chevening Scholar, and a ForbesBLK
              Member, I have led pivotal projects to promote sustainable development globally and supported young
              people. I am passionate about youth development and promoting the Sustainable Development Goals.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 justify text-justify">
              I hold an MSc in Human Resource Management from the University of Bradford, United Kingdom.
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
                <div className="text-3xl font-ovo text-primary mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground font-outfit">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
