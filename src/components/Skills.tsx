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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Tech Stack
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-accent">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-accent hover:text-primary-foreground transition-colors"
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
