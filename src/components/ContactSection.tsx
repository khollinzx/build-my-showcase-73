import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-outfit tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-ovo mb-6">Contact Me</h2>
          <div className="elegant-divider" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail size={16} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-outfit text-sm font-medium text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">odishika.adoh@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Linkedin size={16} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-outfit text-sm font-medium text-foreground mb-1">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/odishika-abigail-adoh-acipd-acipm-35274a56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-outfit text-sm font-medium text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Nigeria</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-outfit text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-outfit text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-outfit text-sm"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors font-outfit text-sm resize-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-outfit text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
