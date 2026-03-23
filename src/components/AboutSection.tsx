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
    <section id="about" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-outfit tracking-[0.3em] uppercase text-primary mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-6">Passionate About People</h2>
          <div className="elegant-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              I am a Human Resources Professional, Talent Manager, and Data Analyst with over a decade of experience
              optimizing HR management in the maritime, oil and gas, and other sectors. My expertise lies in driving
              change, leading and developing people, and making sure employees have the best experience within the
              organization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              As a YALI Fellow, a Global Shaper with the World Economic Forum, a Chevening Scholar, and a ForbesBLK
              Member, I have led pivotal projects to promote sustainable development globally and supported young
              people. I am passionate about youth development and promoting the Sustainable Development Goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-justify">
              I hold an MSc in Human Resource Management from the University of Bradford, United Kingdom.
            </p>

            <div className="flex items-center gap-8">
              {highlights.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={16} className="text-primary" />
                  <span className="text-xs font-outfit tracking-wide text-foreground/80">{label}</span>
                  {i < highlights.length - 1 && (
                    <span className="ml-5 w-px h-4 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="section-card p-6 text-center">
                <div className="text-3xl font-ovo text-primary mb-2">{stat.value}</div>
                <p className="text-xs text-muted-foreground font-outfit tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
