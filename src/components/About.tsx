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
    <section id="about" className="py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a seasoned DevOps Engineer, I specialize in building robust, scalable infrastructure 
              that empowers development teams to ship faster and more reliably.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans containerization with Docker and Kubernetes, cloud platforms 
              including AWS and Azure, and comprehensive monitoring solutions using Prometheus and Grafana.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about automation and have implemented numerous CI/CD pipelines that 
              have reduced deployment times by up to 70% while improving reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not optimizing infrastructure, I enjoy exploring new DevOps tools and 
              contributing to the community through my HomeLab projects.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
