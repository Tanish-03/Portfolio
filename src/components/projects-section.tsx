import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoLink: string;
  githubLink: string;
}

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Health Assistant",
      description: "A machine learning-based health assistant that provides personalized health recommendations based on user data and medical history.",
      image: "https://img.heroui.chat/image/ai?w=800&h=600&u=123",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      category: "AI",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Smart Home Dashboard",
      description: "A comprehensive dashboard for monitoring and controlling smart home devices with real-time analytics and automation capabilities.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=456",
      technologies: ["React", "TypeScript", "MQTT", "Chart.js"],
      category: "Web",
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Financial Portfolio Analyzer",
      description: "An application that analyzes investment portfolios, provides risk assessments, and recommends optimization strategies.",
      image: "https://img.heroui.chat/image/finance?w=800&h=600&u=789",
      technologies: ["Python", "Pandas", "React", "D3.js"],
      category: "Data",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/20">
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
            Projects
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects, innovative solutions, and creative contributions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className={`capitalize font-medium px-6 py-3 transition-all duration-300 ${selectedCategory === category
                  ? 'shadow-lg hover:shadow-xl'
                  : 'hover:bg-primary/10 hover:border-primary/50'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 group-hover:scale-[1.02] overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-background/90 text-foreground font-medium"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-medium border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="px-6 py-4 gap-3">
                  <Button
                    variant="default"
                    className="flex-1 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <Icon icon="lucide:external-link" width={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Icon icon="lucide:github" width={16} className="mr-2" />
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};