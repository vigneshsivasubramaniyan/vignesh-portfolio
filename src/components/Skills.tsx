import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
    },
    {
      title: "CI/CD",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
    },
    {
      title: "Monitoring",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
    },
    {
      title: "Scripting",
      skills: ["Bash", "Python", "Go", "PowerShell"],
    },
    {
      title: "Containers",
      skills: ["Docker", "Podman", "Kubernetes", "Helm"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/70 hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-default font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
