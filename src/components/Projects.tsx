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
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card 
                key={index} 
                className="bg-card border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="w-5 h-5 text-foreground/50 group-hover:text-accent transition-colors" />
                  </div>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
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
