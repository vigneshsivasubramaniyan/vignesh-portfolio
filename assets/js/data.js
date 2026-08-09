// Portfolio Data Configuration
const portfolioData = {

    // Experience Data
    experience: [
        {
            company: "TCS",
            role: "Cloud & DevOps Engineer",
            date: "2024 — Present",
            dateColor: "yellow",
            bullets: [
                "Managed and supported containerized workloads using AWS, EKS, OpenShift, and Docker, ensuring reliable and scalable application environments.",
                "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating application builds, deployments, and release workflows across environments.",
                "Implemented Infrastructure as Code using Terraform to provision and manage cloud infrastructure consistently and efficiently.",
                "Worked with Kubernetes and OpenShift platforms to manage deployments, services, ingress, scaling, resource allocation, and container workloads.",
                "Automated deployment and infrastructure operations by integrating AWS, Terraform, Jenkins, GitHub Actions, Docker, and Kubernetes into streamlined DevOps workflows."
            ],
            tags: ["AWS", "EKS", "OpenShift", "Docker", "Terraform", "Jenkins", "GitHub Actions"]
        },
        {
            company: "Accenture",
            role: "Platform Engineer",
            date: "2021 — 2024",
            dateColor: "blue",
            bullets: [
                "Managed and supported containerized application environments using Docker, Kubernetes, and OpenShift, ensuring reliable and consistent platform operations.",
                "Worked with AWS and Amazon EKS to deploy, manage, and support scalable cloud-based application workloads across multiple environments.",
                "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating application builds, testing, and deployment workflows.",
                "Implemented Infrastructure as Code using Terraform to provision and manage cloud resources consistently across development and production environments.",
                "Automated operational and deployment tasks using scripting and DevOps tooling, reducing manual effort and improving deployment reliability."
            ],
            tags: ["AWS", "EKS", "OpenShift", "Docker", "Terraform", "Jenkins", "GitHub Actions"]
        },
        {
            company: "Mphasis Pvt Ltd",
            role: "Infrastructure Specialist Engineer",
            date: "2017 — 2021",
            dateColor: "blue",
            bullets: [
                "Managed VMware vSphere environments including ESXi hosts, vCenter, virtual machines, clusters, and enterprise infrastructure operations.",
                "Automated VM lifecycle operations such as provisioning, cloning, patching, snapshots, hardware upgrades, and OS configuration using PowerCLI and PowerShell.",
                "Developed reusable automation scripts for Windows and Linux server provisioning, health checks, log cleanup, storage management, and routine infrastructure operations.",
                "Monitored infrastructure performance and availability, performing log analysis, troubleshooting, storage optimization, and remediation of VMware and operating system issues.",
                "Supported infrastructure modernization and DevOps initiatives by working with Docker, Kubernetes, Terraform, Jenkins, Git, and automation practices."
            ],
            tags: ["VMware", "vSphere", "ESXi", "vCenter", "PowerCLI", "PowerShell", "Docker", "Kubernetes", "Terraform", "Jenkins"]
        }
    ],

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
            description: "RAG-based AI chatbot embedded in my portfolio website that answers user queries about my profile and experience.",
            techStack: ["n8n", "AI", "Gemini API"],
            githubUrl: "https://github.com/vigneshsivasubramaniyan/cicd_jenkins_to_docker"
        },
        {
            title: "AI ATS Resume Optimizer",
            description: "Python web app that parses uploaded resumes and regenerates ATS-optimized versions using the Perplexity API.",
            techStack: ["Python", "AI", "Perplexity API"],
            githubUrl: "https://github.com/vigneshsivasubramaniyan/ai-ats-optimizer",
            websiteUrl: "https://ats.madrasmic.in"
        }
    ],

    // Guides Data
    guides: [
        {
            icon: "🐳",
            category: "Containers",
            title: "Docker Notes",
            description: "Comprehensive Docker guide covering containerization, multi-stage builds, networking, volumes, and Docker Compose orchestration.",
            url: "assets/guides/docker-notes.html"
        },
        {
            icon: "☸️",
            category: "Orchestration",
            title: "Kubernetes Notes",
            description: "K8s fundamentals including pods, deployments, services, ingress, configmaps, secrets, and cluster management best practices.",
            url: "assets/guides/kubernetes-notes.html"
        },
        {
            icon: "⚙️",
            category: "DevOps",
            title: "DevOps Notes",
            description: "DevOps principles, CI/CD pipeline design, infrastructure as code, monitoring, logging, and deployment strategies.",
            url: "assets/guides/devops-guide.html"
        },
        {
            icon: "🤖",
            category: "AI / Automation",
            title: "AI Workflow Docs",
            description: "Building AI automation pipelines with n8n, API integrations, voice assistants, and machine learning workflows.",
            url: "assets/guides/ai-workflow.html"
        },
        {
            icon: "🔧",
            category: "CI/CD",
            title: "CI/CD Best Practices",
            description: "Jenkins pipelines, GitOps workflows, automated testing, deployment automation, and infrastructure provisioning.",
            url: "assets/guides/cicd-best-practices.html"
        },
        {
            icon: "☁️",
            category: "Cloud",
            title: "Cloud Architecture",
            description: "AWS cloud architecture patterns, serverless design, microservices, scalability, security, and cost optimization.",
            url: "assets/guides/cloud-architecture.html"
        }
    ],

    // Contact Information
    contactInfo: [
        {
            icon: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>`,
            type: "email",
            label: "Email",
            value: "vigneshsivasubramaniyan@gmail.com",
            href: "mailto:vigneshsivasubramaniyan@gmail.com"
        },
        {
            icon: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
            type: "phone",
            label: "Phone",
            value: "+91-8122227828",
            href: "tel:+91-8122227828"
        },
        {
            icon: `<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
            type: "github",
            label: "GitHub",
            value: "github.com/vigneshsivasubramaniyan",
            href: "https://github.com/vigneshsivasubramaniyan"
        },
        {
            icon: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
            type: "linkedin",
            label: "LinkedIn",
            value: "linkedin.com/in/vigneshwaran-sivasubramaniyan",
            href: "https://www.linkedin.com/in/vigneshwaran-sivasubramaniyan/"
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
            name: 'AI Assistant',
            welcomeText: 'Hi! Ask me anything about Vignesh.',
            responseTimeText: 'Usually responds right away'
        },
        style: {
            primaryColor: '#F5D800',
            secondaryColor: '#D4B800',
            position: 'right',
            backgroundColor: '#F5F0E8',
            fontColor: '#111111'
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
