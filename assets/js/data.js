// Portfolio Data Configuration
const portfolioData = {
    // Projects Data
    projects: [
        {
            title: "HomeLab — Modular Self-Hosted DevOps & AI Stack",
            description: "Complete home lab setup using Docker, Portainer, Cloudflare Tunnel for secure remote access. Includes automated backups and monitoring.",
            techStack: ["Docker", "Portainer", "Jenkins"],
            githubUrl: "https://github.com/vigneshsivasubramaniyan/HomeLab"
        },
        {
            title: "Two Tier Web Application with CI/CD Automation",
            description: "Complete CI/CD pipeline with Docker containerization, Jenkins and AWS deployment",
            techStack: ["Docker", "Jenkins", "AWS"],
            githubUrl: "https://github.com/vigneshsivasubramaniyan/cicd_jenkins_to_docker"
        },
        {
            title: "MandiMap",
            description: "Micro-SaaS platform for vendor management with real-time inventory tracking",
            techStack: ["SaaS", "PostgreSQL", "APIs"],
            githubUrl: "https://github.com/MadrasMic1/kadimobileapp"
        },
        {
            title: "N8N Chatbot on Website",
            description: "AI-powered movie dubbing pipeline with automated voice synthesis and translation",
            techStack: ["n8n", "AI", "Gemini API"],
            githubUrl: "https://github.com/vigneshsivasubramaniyan/cicd_jenkins_to_docker"
        }
    ],

    // Guides Data
    guides: [
        {
            icon: "🐳",
            title: "Docker Notes",
            description: "Comprehensive Docker guide covering containerization, multi-stage builds, networking, volumes, and Docker Compose orchestration",
            url: "assets/guides/docker-notes.html"
        },
        {
            icon: "☸️",
            title: "Kubernetes Notes",
            description: "K8s fundamentals including pods, deployments, services, ingress, configmaps, secrets, and cluster management best practices",
            url: "assets/guides/kubernetes-notes.html"
        },
        {
            icon: "⚙️",
            title: "DevOps Notes",
            description: "DevOps principles, CI/CD pipeline design, infrastructure as code, monitoring, logging, and deployment strategies",
            url: "assets/guides/devops-guide.html"
        },
        {
            icon: "☁️",
            title: "Cloud Architecture",
            description: "AWS cloud architecture patterns, serverless design, microservices, scalability, security, and cost optimization",
            url: "assets/guides/cloud-architecture.html"
        },
        {
            icon: "🤖",
            title: "AI Workflow Docs",
            description: "Building AI automation pipelines with n8n, API integrations, voice assistants, and machine learning workflows",
            url: "assets/guides/ai-workflow.html"
        },
        {
            icon: "🔧",
            title: "CI/CD Best Practices",
            description: "Jenkins pipelines, GitOps workflows, automated testing, deployment automation, and infrastructure provisioning",
            url: "assets/guides/cicd-best-practices.html"
        }
    ],

    // Contact Information
    contactInfo: [
        {
            icon: `<svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 6l10 7 10-7"/>
            </svg>`,
            type: "email",
            value: "vigneshsivasubramaniyan@gmail.com",
            href: "mailto:vigneshsivasubramaniyan@gmail.com"
        },
        {
            icon: `<svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>`,
            type: "phone",
            value: "+91-8122227828",
            href: "tel:+91-8122227828"
        },
        {
            icon: `<svg viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>`,
            type: "github",
            value: "GitHub Profile",
            href: "https://github.com/vigneshsivasubramaniyan"
        }
    ]
};

// Configuration for dynamic features
const config = {
    chatbot: {
        webhook: {
            url: '/api/chat',
            route: 'general'
        },
        branding: {
            logo: 'assets/images/chatbot_icon.png',
            name: 'AI ChatBot',
            welcomeText: 'Hi, how can we help?',
            responseTimeText: 'We usually respond right away'
        },
        style: {
            primaryColor: '#3498db',
            secondaryColor: '#3498db',
            position: 'right',
            backgroundColor: '#ffffff',
            fontColor: '#333333'
        }
    },
    contact: {
        webhookURL: '/api/contact'
    },
    animations: {
        projectCardDelay: 100,
        guideCardDelay: 80,
        contactItemDelay: 150
    }
};
