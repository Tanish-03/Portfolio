import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: string;
  color: string;
}

export const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 102,
      role: "Data Analyst",
      company: "WNS Analytics",
      period: "June 2024 - Present",
      description: "Gurgaon, India",
      achievements: [
        "Working on advanced analytics projects, leveraging data-driven insights to support business decisions.",
        "Collaborating with cross-functional teams to deliver actionable solutions using modern analytics tools."
      ],
      icon: "https://media.licdn.com/dms/image/v2/D4D0BAQFI5jL6AnZYYQ/company-logo_100_100/company-logo_100_100/0/1724237042549/wnsanalytics_logo?e=1755129600&v=beta&t=PEckpolg1sDeqATlxqm-L7uY8XrRZxvzNLJwZzWFAAw",
      color: "bg-green-100"
    },
    {
      id: 100,
      role: "Prism Intern",
      company: "Samsung research and development",
      period: "June 2023 - June 2024",
      description: "Remote",
      achievements: [
        "Developed a sophisticated device leveraging cutting-edge technologies such as Memgraph, KnowledgeGraph, and Graph Machine Learning to accurately predict human activity.",
        "Implemented robust algorithms and data models within the device, enabling real-time analysis and interpretation of complex activity patterns."
      ],
      icon: "logos:samsung",
      color: "bg-blue-100"
    },
    {
      id: 101,
      role: "Frontend Intern",
      company: "Oasis Infobyte",
      period: "July 2023 - Aug. 2023",
      description: "Delhi, India",
      achievements: [
        "Developed a responsive website using HTML, CSS, JavaScript, Spring Boot and MySQL integrating user authentication, and checkout functionality."
      ],
      icon: "logos:html-5",
      color: "bg-orange-100"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
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
            Experience
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My career path and the incredible companies that have shaped my professional growth.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-16 relative"
            >

              {/* Experience Card */}
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 group hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Company Icon */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${exp.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon icon={exp.icon} width={32} />
                    </div>

                    {/* Role & Company Info */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <CardTitle className="text-2xl font-bold text-foreground">{exp.role}</CardTitle>
                        <Badge variant="secondary" className="w-fit text-sm font-medium px-3 py-1">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-xl font-semibold text-primary mb-1">{exp.company}</p>
                      <p className="text-muted-foreground font-medium">{exp.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Icon icon="lucide:target" width={20} className="text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};