import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "🐍 Core Programming",
      items: [
        "Python – Data engineering, automation & ML",
        "SQL – Complex queries & data modeling",
        "Bash/Shell – System automation & scripting",
        "Git – Version control & collaboration"
      ]
    },
    {
      title: "📊 Data Engineering",
      items: [
        "Apache Airflow – Workflow orchestration",
        "Apache Spark – Big data processing",
        "dbt – Data transformation & modeling",
        "Apache Kafka – Stream processing",
        "ETL/ELT Pipeline Design",
        "Data Lake & Warehouse Architecture"
      ]
    },
    {
      title: "🤖 Generative AI & ML",
      items: [
        "OpenAI GPT/Claude APIs – LLM integration",
        "LangChain – AI application framework",
        "Hugging Face – Transformers & models",
        "scikit-learn – Machine learning",
        "TensorFlow/PyTorch – Deep learning",
        "Vector Databases – Pinecone, Chroma"
      ]
    },
    {
      title: "☁️ Cloud & Databases",
      items: [
        "AWS (S3, Lambda, Glue, Redshift)",
        "Google Cloud (BigQuery, Vertex AI)",
        "PostgreSQL, MySQL – Relational DBs",
        "MongoDB – NoSQL databases",
        "Snowflake – Cloud data warehouse"
      ]
    },
    {
      title: "🔧 Python Libraries",
      items: [
        "pandas, numpy – Data manipulation",
        "requests, httpx – API integration",
        "FastAPI, Flask – Web frameworks",
        "pydantic – Data validation",
        "celery – Task queues",
        "prefect – Workflow management"
      ]
    },
    {
      title: "🚀 Automation & DevOps",
      items: [
        "Docker – Containerization",
        "Kubernetes – Orchestration",
        "CI/CD Pipelines – GitHub Actions",
        "Terraform – Infrastructure as Code",
        "Monitoring – Prometheus, Grafana",
        "Web Scraping – Selenium, BeautifulSoup"
      ]
    },
    {
      title: "📈 Analytics & Visualization",
      items: [
        "Tableau, Power BI – Business intelligence",
        "matplotlib, seaborn – Data visualization",
        "plotly, streamlit – Interactive dashboards",
        "Jupyter Notebooks – Data exploration",
        "Apache Superset – Open-source BI"
      ]
    },
    {
      title: "🛠️ Tools & Frameworks",
      items: [
        "Apache Airflow – Workflow scheduling",
        "Apache NiFi – Data flow management",
        "Great Expectations – Data validation",
        "Apache Beam – Stream/batch processing",
        "MLflow – ML lifecycle management",
        "Dagster – Data orchestration"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/20">
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
            Skills
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, tools, and technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group"
            >
              <Card className="shadow-2xl h-full hover:shadow-3xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 group-hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item: string) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="text-xs font-medium border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
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