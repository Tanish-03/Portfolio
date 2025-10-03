import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Projects Completed" },
    { number: "2", label: "Research Papers" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            About Me
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Get to Know Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my journey, passion, and the drive that fuels my work in technology and research.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-5xl"
          >
            <Card className="shadow-2xl border-0 bg-background/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Software Engineer & Researcher
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6"></div>
                </div>
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    I am an accomplished AI & Machine Learning professional with <span className="text-primary font-semibold">2+ years of experience</span>,
                    <span className="text-primary font-semibold"> 8+ projects completed</span>, and
                    <span className="text-primary font-semibold"> 2 research papers published</span>. My expertise lies in leveraging data and automation to build innovative solutions and drive efficiency.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    At <span className="font-semibold text-foreground">WNS Holdings Limited</span>, I've developed robust automation tools and predictive models, significantly optimizing processes and enabling proactive decision-making. My work at <span className="font-semibold text-foreground">Samsung Research and Development</span> focused on advanced human activity detection using cutting-edge deep learning techniques. Proficient in Python, SQL, and various ML/AI frameworks, I am driven by a passion for transforming complex challenges into efficient, data-driven solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="w-full flex flex-col items-center gap-12 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 group-hover:scale-105">
                    <CardContent className="p-0">
                      <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open("https://drive.google.com/file/d/1uVXO2gIB4C2Wz1MvpuQ5MGlX9Hy70UpH/view?usp=sharing", "_blank")}
              >
                <Icon icon="lucide:download" width={20} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};