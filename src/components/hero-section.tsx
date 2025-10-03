import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:pr-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Available for work
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg font-medium text-muted-foreground"
              >
                Hello, I'm
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Tanish
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-muted-foreground h-12 flex items-center"
            >
              <TypeAnimation
                sequence={[
                  'Data Enthusiast',
                  2000,
                  'Data Analyst',
                  2000,
                  'Automation Specialist',
                  2000,
                  'AI/ML Researcher',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              I'm a passionate software engineer and researcher with expertise in artificial intelligence,
              machine learning, and web development. I create elegant solutions to complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <Icon icon="lucide:arrow-right" width={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-6 text-base border-2 hover:bg-muted transition-all duration-300"
                onClick={() => window.open("https://drive.google.com/file/d/1uVXO2gIB4C2Wz1MvpuQ5MGlX9Hy70UpH/view?usp=sharing", "_blank")}
              >
                <Icon icon="lucide:download" width={20} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-sm font-medium text-muted-foreground">Follow me:</span>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                  <Icon icon="logos:github-icon" width={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/tanish-b0363621b/" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                  <Icon icon="logos:linkedin-icon" width={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                  <Icon icon="logos:google-scholar" width={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl"></div>

              {/* Main Image Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  {/* Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>

                  {/* Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img
                      src="/MyImage.jpeg"
                      alt="Tanish"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Icon icon="lucide:sparkles" width={16} className="text-primary-foreground" />
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-muted rounded-full flex items-center justify-center shadow-lg border-2 border-background">
                    <Icon icon="lucide:code" width={20} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};