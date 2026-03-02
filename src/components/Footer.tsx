import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-outfit">
          © 2026 Odishika Abigail Adoh. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/odishika-abigail-adoh-acipd-acipm-35274a56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
