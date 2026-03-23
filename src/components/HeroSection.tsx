import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src={profileImg}
            alt="Odishika Abigail Adoh"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full mx-auto object-cover ring-2 ring-primary/20 shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs font-outfit tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Human Resources Professional
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl md:text-7xl font-ovo leading-tight mb-4"
        >
          Odishika Abigail
          <br />
          <span className="text-gradient">Adoh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="elegant-divider my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="max-w-xl mx-auto text-muted-foreground text-sm tracking-wide mb-12"
        >
          MSc, MCIPM, ACIPD &nbsp;·&nbsp; Chevening Alumnus &nbsp;·&nbsp; WEF Global Shaper &nbsp;·&nbsp; ForbesBLK Member
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-primary-foreground font-outfit text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-outfit text-xs tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
