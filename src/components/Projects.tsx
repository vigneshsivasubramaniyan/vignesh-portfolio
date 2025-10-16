import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HomeLab Automation",
      description: "Complete home lab setup using Docker, Portainer, and Cloudflare Tunnel for secure remote access. Includes automated backups and monitoring.",
      tags: ["Docker", "Portainer", "Cloudflare", "Automation"],
      link: "https://github.com/vigneshsivasubramaniyan/HomeLab",
    },
    {
      title: "n8n AI Automation Pipelines",
      description: "Built intelligent automation workflows including voice assistants, movie dubbing automation, and Gemini AI integration for content processing.",
      tags: ["n8n", "AI", "Gemini", "Automation", "Voice AI"],
      link: "https://github.com/vigneshsivasubramaniyan/n8n-ai-pipelines",
    },
    {
      title: "MandiMap Platform",
      description: "Local vendor marketplace platform with containerized backend using Docker and n8n for workflow automation and vendor management.",
      tags: ["Docker", "n8n", "Backend", "Platform"],
      link: "https://github.com/MadrasMic1/kadimobileapp",
    },
  ];

  return (
    <section id="projects" className="py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
              key={index}
            >
              <Card 
                className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 cursor-pointer hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-secondary/70 hover:bg-accent/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
