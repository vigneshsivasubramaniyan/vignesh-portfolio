// Main JavaScript for Portfolio Website

// ============ Utility Functions ============
const utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Animate element when it enters viewport
    animateOnScroll(elements, className = 'animate-in') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => observer.observe(el));
    }
};

// ============ Navigation Functions ============
const navigation = {
    init() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');

        // Add scroll effect to navigation
        window.addEventListener('scroll', utils.debounce(() => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            this.updateActiveLink();
        }, 10));

        // Smooth scroll on nav click
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
};

// ============ Scroll Progress Indicator ============
const scrollProgress = {
    init() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);

        window.addEventListener('scroll', utils.debounce(() => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollable) * 100;
            progressBar.style.width = `${progress}%`;
        }, 10));
    }
};

// ============ Dynamic Content Loading ============
const contentLoader = {
    loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid || !portfolioData.projects) return;

        projectsGrid.innerHTML = '';

        portfolioData.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * config.animations.projectCardDelay}ms`;

            const techStackHTML = project.techStack.map(tech =>
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>

                <div class="tech-stack">
                     ${techStackHTML}
                </div>

                <div class="project-links">
                    ${project.githubUrl 
                        ? `<a href="${project.githubUrl}" target="_blank" class="github-link">GitHub →</a>` 
                        : ``}

                    ${project.websiteUrl 
                        ? `<a href="${project.websiteUrl}" target="_blank" class="live-link">Live Demo</a>` 
                        : ``}
                </div>
        `;

            projectsGrid.appendChild(projectCard);
        });

        // Animate project cards
        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.project-card'));
        }, 100);
    },

    loadGuides() {
        const guidesGrid = document.getElementById('guidesGrid');
        if (!guidesGrid || !portfolioData.guides) return;

        guidesGrid.innerHTML = '';

        portfolioData.guides.forEach((guide, index) => {
            const guideCard = document.createElement('a');
            guideCard.href = guide.url;
            guideCard.className = 'guide-card';
            guideCard.style.animationDelay = `${index * config.animations.guideCardDelay}ms`;

            guideCard.innerHTML = `
                <h3>${guide.icon} ${guide.title}</h3>
                <p>${guide.description}</p>
            `;

            guidesGrid.appendChild(guideCard);
        });

        // Animate guide cards
        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.guide-card'));
        }, 100);
    },

    loadContactInfo() {
        const contactList = document.getElementById('contactInfoList');
        if (!contactList || !portfolioData.contactInfo) return;

        contactList.innerHTML = '';

        portfolioData.contactInfo.forEach((contact, index) => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-info-item';
            contactItem.style.animationDelay = `${index * config.animations.contactItemDelay}ms`;

            contactItem.innerHTML = `
                <div class="contact-info-icon">
                    ${contact.icon}
                </div>
                <div class="contact-info-text">
                    <a href="${contact.href}" ${contact.type !== 'email' ? 'target="_blank"' : ''}>${contact.value}</a>
                </div>
            `;

            contactList.appendChild(contactItem);
        });

        // Animate contact items
        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.contact-info-item'));
        }, 100);
    }
};

// ============ Contact Form Handler ============
const contactForm = {
    init() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit(form);
        });
    },

    async handleSubmit(form) {
        const submitBtn = form.querySelector('.submit-btn');
        const messageDiv = document.getElementById('formMessage');

        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';

        const formData = {
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString(),
            source: 'Portfolio Contact Form'
        };

        try {
            const response = await fetch(config.contact.webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                this.showMessage(messageDiv, 'success', '✓ Message sent successfully! I\'ll get back to you soon.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            this.showMessage(messageDiv, 'error', '✗ Oops! Something went wrong. Please try again or email me directly.');
            console.error('Error:', error);
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    },

    showMessage(messageDiv, type, text) {
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
};

// ============ Chatbot Widget ============
const chatbot = {
    init() {
        // Set chatbot configuration
        window.ChatWidgetConfig = config.chatbot;

        // Load chatbot script
        const chatScript = document.createElement('script');
        chatScript.src = 'assets/js/chat-widget.js';
        chatScript.defer = true;
        chatScript.onerror = () => {
            console.warn('Chatbot widget failed to load');
        };
        document.body.appendChild(chatScript);
    }
};

// ============ Interactive Animations ============
const animations = {
    init() {
        // Add typing effect to subtitle
        this.typingEffect();

        // Add parallax effect to hero section
        this.parallaxEffect();

        // Add hover effects to tech badges
        this.techBadgeEffects();
    },

    typingEffect() {
        const subtitle = document.querySelector('.subtitle');
        if (!subtitle) return;

        const text = subtitle.textContent;
        subtitle.textContent = '';
        let index = 0;

        const type = () => {
            if (index < text.length) {
                subtitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        };

        // Start typing after page load
        setTimeout(type, 1000);
    },

    parallaxEffect() {
        const hero = document.getElementById('hero');
        if (!hero) return;

        window.addEventListener('scroll', utils.debounce(() => {
            const scrolled = window.pageYOffset;
            // Only apply parallax to subtitle and profile image, NOT h1
            const parallaxElements = hero.querySelectorAll('.subtitle, .profile-img');

            parallaxElements.forEach((el, index) => {
                const speed = (index + 1) * 0.05; // Reduced speed for subtler effect
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }, 10));
    },

    techBadgeEffects() {
        // Add click to copy functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tech-badge')) {
                const text = e.target.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = e.target.textContent;
                    e.target.textContent = '✓ Copied!';
                    setTimeout(() => {
                        e.target.textContent = originalText;
                    }, 1000);
                });
            }
        });
    },


};

// ============ Performance Optimization ============
const performance = {
    init() {
        // Lazy load images
        this.lazyLoadImages();

        // Preload critical resources
        this.preloadResources();
    },

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    preloadResources() {
        // Preload fonts
        const fonts = [
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        ];

        fonts.forEach(font => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = font;
            document.head.appendChild(link);
        });
    }
};

// ============ Initialization ============
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    navigation.init();
    scrollProgress.init();
    contentLoader.loadProjects();
    contentLoader.loadGuides();
    contentLoader.loadContactInfo();
    contactForm.init();
    chatbot.init();
    animations.init();
    performance.init();

    // Add page loaded class for animations
    document.body.classList.add('loaded');
});

// ============ Export for external use ============
window.Portfolio = {
    utils,
    navigation,
    contentLoader,
    contactForm,
    animations
};
