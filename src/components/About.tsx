import { Cloud, Code, Cog, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="w-8 h-8 text-accent" />,
      title: "Cloud Expert",
      description: "AWS, Azure, GCP infrastructure design and optimization",
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "CI/CD Master",
      description: "GitHub Actions, Jenkins, GitLab CI pipeline automation",
    },
    {
      icon: <Cog className="w-8 h-8 text-accent" />,
      title: "IaC Specialist",
      description: "Terraform, Ansible for infrastructure as code",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Monitoring Pro",
      description: "Prometheus, Grafana for system observability",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-lg text-foreground/80">
              As a seasoned DevOps Engineer, I specialize in building robust, scalable infrastructure 
              that empowers development teams to ship faster and more reliably.
            </p>
            <p className="text-lg text-foreground/80">
              My expertise spans containerization with Docker and Kubernetes, cloud platforms 
              including AWS and Azure, and comprehensive monitoring solutions using Prometheus and Grafana.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-foreground/80">
              I'm passionate about automation and have implemented numerous CI/CD pipelines that 
              have reduced deployment times by up to 70% while improving reliability.
            </p>
            <p className="text-lg text-foreground/80">
              When I'm not optimizing infrastructure, I enjoy exploring new DevOps tools and 
              contributing to the community through my HomeLab projects.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
