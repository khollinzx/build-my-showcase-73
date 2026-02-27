import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={profileImg}
            alt="Odishika"
            className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-primary/30 shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-outfit tracking-widest uppercase text-muted-foreground mb-4"
        >
          Hi, I'm Odishika ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-ovo leading-tight mb-6"
        >
          Human Resource Specialist
          <br />
          <span className="text-gradient">& Talent Manager</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-xl mx-auto text-muted-foreground text-lg mb-10"
        >
          I am a Human Resources Professional, Talent Manager, and Data Analyst with over a decade of experience
          optimizing HR management in the maritime, oil and gas, and other sectors. My expertise lies in driving change,
          leading and developing people, and making sure employees have the best experience within the organization. I
          am a YALI Fellow, a Global Shaper with the World Economic Forum, and a Chevening Scholar 2020, I have led
          pivotal projects to promote sustainable development globally and supported young people. I am very passionate
          about youth development and promoting the Sustainable Development Goals. I hold an MSc in Human Resource
          Management from the University of Bradford, United Kingdom.{" "}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
