import React from "react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Tanish</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Software engineer and researcher specializing in artificial intelligence,
              machine learning, and web development.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon icon="logos:github-icon" width={20} />
              </a>
              <a href="https://www.linkedin.com/in/tanish-b0363621b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon icon="logos:linkedin-icon" width={20} />
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon icon="logos:google-scholar" width={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#research" className="text-muted-foreground hover:text-primary transition-colors">Research</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon icon="lucide:mail" width={16} />
                <a href="mailto:tanishkaur03@gmail.com" className="hover:text-primary transition-colors">tanishkaur03@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Icon icon="lucide:phone" width={16} />
                <a href="tel:+917494896065" className="hover:text-primary transition-colors">+917494896065</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tanish. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Designed & Built with <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};