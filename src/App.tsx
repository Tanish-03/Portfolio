import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";

import { NavbarComponent } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { CertificationsSection } from "./components/certifications-section";
import { ResearchSection } from "./components/research-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { Footer } from "./components/footer";

function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarComponent />

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
      </main>

      <Footer />

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Button
              size="icon"
              className="shadow-lg rounded-full"
              onClick={scrollToTop}
              title="Scroll to top"
            >
              <Icon icon="lucide:chevron-up" width={20} />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;