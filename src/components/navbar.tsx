import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const NavbarComponent: React.FC = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#certifications", label: "Certifications" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Tanish
          </motion.a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => window.open("https://drive.google.com/file/d/1uVXO2gIB4C2Wz1MvpuQ5MGlX9Hy70UpH/view?usp=sharing", "_blank")}
              className="font-medium"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};