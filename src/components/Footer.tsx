import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6">
      <div className="elegant-divider mb-10" />
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground font-outfit tracking-wide">
          © 2026 Odishika Abigail Adoh. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/in/odishika-abigail-adoh-acipd-acipm-35274a56"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={16} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
