import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface ResearchPaper {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  tags: string[];
  link: string;
}

export const ResearchSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPaper, setSelectedPaper] = React.useState<ResearchPaper | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const papers: ResearchPaper[] = [
    {
      id: 1,
      title: "Human Activity Detection Using Deep Learning",
      journal: "International Journal of Advances in Electrical Engineering",
      date: "2023",
      abstract: "Led the development of advanced algorithms and technologies for human activity detection using deep learning techniques, resulting in a publication in the International Journal of Advances in Electrical Engineering, and designed a user-friendly frontend interface with intuitive navigation and detailed activity descriptions.",
      tags: ["Deep Learning", "Activity Recognition", "Frontend"],
      link: "#"
    },
    {
      id: 2,
      title: "Illegal Forum Detection",
      journal: "Chandigarh University, Punjab, India",
      date: "2023",
      abstract: "Led the Illegal Forum Detection project at Chandigarh University, Punjab, India, developing advanced algorithms using Natural Language Processing and Machine Learning to identify illicit online platforms. Designed and implemented a user-friendly frontend interface with HTML, CSS, JavaScript, and ReactJS.",
      tags: ["NLP", "Machine Learning", "Web Development"],
      link: "#"
    }
  ];

  const allTags = React.useMemo(() => {
    const tagsSet = new Set<string>();
    papers.forEach(paper => {
      paper.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, [papers]);

  const filteredPapers = React.useMemo(() => {
    return papers.filter(paper => {
      const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.journal.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = activeFilter ? paper.tags.includes(activeFilter) : true;

      return matchesSearch && matchesTag;
    });
  }, [papers, searchQuery, activeFilter]);

  const handlePaperClick = (paper: ResearchPaper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const handleFilterClick = (tag: string) => {
    setActiveFilter(activeFilter === tag ? null : tag);
  };

  return (
    <section id="research" className="py-24 md:py-32 bg-background">
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
            Research
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Academic Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My published research contributions in artificial intelligence, machine learning, and computer science.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Search research papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-base border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={activeFilter === tag ? "default" : "outline"}
                  className={`cursor-pointer font-medium px-4 py-2 transition-all duration-300 ${activeFilter === tag
                    ? 'shadow-lg'
                    : 'hover:bg-primary/10 hover:border-primary/50'
                    }`}
                  onClick={() => handleFilterClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10 group-hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {paper.title}
                      </CardTitle>
                      <Icon icon="lucide:file-text" width={20} className="text-primary mt-1 flex-shrink-0" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-primary font-semibold text-sm">{paper.journal}</p>
                      <p className="text-muted-foreground text-sm font-medium">{paper.date}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs font-medium border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => handlePaperClick(paper)}
                    className="flex-1 font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon icon="lucide:book-open" width={16} className="mr-2" />
                    Abstract
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => window.open(paper.link, "_blank")}
                    className="flex-1 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon icon="lucide:external-link" width={16} className="mr-2" />
                    View Paper
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <Icon icon="lucide:file-search" className="mx-auto mb-4 text-muted-foreground" width={48} />
            <h3 className="text-xl font-medium mb-2">No papers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Simple Modal */}
        {isModalOpen && selectedPaper && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>{selectedPaper.title}</CardTitle>
                <p className="text-muted-foreground font-medium">{selectedPaper.journal}</p>
                <p className="text-muted-foreground">{selectedPaper.date}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPaper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h4 className="font-medium mb-2">Abstract</h4>
                <p className="text-muted-foreground">{selectedPaper.abstract}</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => window.open(selectedPaper.link, "_blank")}
                >
                  View Full Paper
                  <Icon icon="lucide:external-link" width={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};