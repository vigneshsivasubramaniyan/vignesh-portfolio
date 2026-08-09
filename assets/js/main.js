// Main JavaScript for Portfolio Website — Neo-Brutalist Redesign

// ============ Utility Functions ============
const utils = {
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

    // Animate elements on scroll using IntersectionObserver
    animateOnScroll(elements, className = 'animate-in') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(className);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(el => observer.observe(el));
    },

    // Reveal elements (for section-level reveals)
    setupReveal() {
        const revealEls = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });
        revealEls.forEach(el => revealObserver.observe(el));
    }
};

// ============ Navigation ============
const navigation = {
    init() {
        const nav = document.getElementById('mainNav');
        const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile-menu a');
        const hamburger = document.getElementById('navHamburger');
        const mobileMenu = document.getElementById('navMobileMenu');

        // Scroll effect
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
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        // Close mobile menu if open
                        if (mobileMenu) {
                            mobileMenu.classList.remove('open');
                            hamburger && hamburger.classList.remove('open');
                        }
                    }
                }
            });
        });

        // Hamburger toggle
        if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
                const isOpen = mobileMenu.classList.toggle('open');
                hamburger.classList.toggle('open', isOpen);
                hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }
    },

    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
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

// ============ Scroll Progress ============
const scrollProgress = {
    init() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);

        window.addEventListener('scroll', utils.debounce(() => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrollable > 0 ? (scrolled / scrollable) * 100 : 0;
            progressBar.style.width = `${progress}%`;
        }, 10));
    }
};

// ============ Dynamic Content Loading ============
const contentLoader = {

    loadExperience() {
        const expList = document.getElementById('experienceList');
        if (!expList || !portfolioData.experience) return;

        expList.innerHTML = '';

        portfolioData.experience.forEach((job, index) => {
            const card = document.createElement('div');
            card.className = 'exp-card reveal reveal-delay-' + (index + 1);

            const badgeColors = {
                yellow: 'background:var(--yellow);color:var(--text);',
                blue:   'background:var(--blue);color:#fff;',
                coral:  'background:var(--coral);color:#fff;'
            };
            const badgeStyle = badgeColors[job.dateColor] || badgeColors.yellow;

            const bulletsHTML = job.bullets.map(b =>
                `<div class="exp-bullet">${b}</div>`
            ).join('');

            const tagsHTML = job.tags.map(t =>
                `<span class="badge badge-dark">${t}</span>`
            ).join('');

            card.innerHTML = `
                <div class="exp-card-header">
                    <div>
                        <div class="exp-company">${job.company}</div>
                        <div class="exp-role">${job.role}</div>
                    </div>
                    <span class="exp-date-badge" style="${badgeStyle}">${job.date}</span>
                </div>
                <div class="exp-divider"></div>
                <div class="exp-bullets">${bulletsHTML}</div>
                <div class="exp-tags">${tagsHTML}</div>
            `;

            expList.appendChild(card);
        });
    },

    loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid || !portfolioData.projects) return;

        projectsGrid.innerHTML = '';

        portfolioData.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.animationDelay = `${index * config.animations.projectCardDelay}ms`;

            const techStackHTML = project.techStack.map(tech =>
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            card.innerHTML = `
                <div class="project-card-top">
                    <span class="project-number">0${index + 1}</span>
                    ${project.websiteUrl ? '<span class="badge badge-green">Live</span>' : ''}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">${techStackHTML}</div>
                <div class="project-links">
                    ${project.githubUrl
                        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
                               <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                               GitHub →
                           </a>`
                        : ''}
                    ${project.websiteUrl
                        ? `<a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer" class="live-link">
                               Live Demo ↗
                           </a>`
                        : ''}
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.project-card'));
        }, 100);
    },

    loadGuides() {
        const guidesGrid = document.getElementById('guidesGrid');
        if (!guidesGrid || !portfolioData.guides) return;

        guidesGrid.innerHTML = '';

        portfolioData.guides.forEach((guide, index) => {
            const card = document.createElement('a');
            card.href = guide.url;
            card.className = 'guide-card';
            card.style.animationDelay = `${index * config.animations.guideCardDelay}ms`;

            card.innerHTML = `
                <div class="guide-card-top">
                    <div class="guide-icon-wrap">${guide.icon}</div>
                    <span class="guide-arrow">READ →</span>
                </div>
                ${guide.category ? `<span class="badge badge-dark" style="width:fit-content;">${guide.category}</span>` : ''}
                <h3>${guide.title}</h3>
                <p>${guide.description}</p>
            `;

            guidesGrid.appendChild(card);
        });

        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.guide-card'));
        }, 100);
    },

    loadContactInfo() {
        // Contact links are now rendered directly in HTML using static data
        // but also render the fallback list if it exists
        const contactList = document.getElementById('contactInfoList');
        if (!contactList || !portfolioData.contactInfo) return;

        contactList.innerHTML = '';

        portfolioData.contactInfo.forEach((contact, index) => {
            const item = document.createElement('div');
            item.className = 'contact-info-item';
            item.style.animationDelay = `${index * config.animations.contactItemDelay}ms`;

            item.innerHTML = `
                <div class="contact-info-icon">${contact.icon}</div>
                <div class="contact-info-text">
                    <a href="${contact.href}" ${contact.type !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>${contact.value}</a>
                </div>
            `;

            contactList.appendChild(item);
        });

        setTimeout(() => {
            utils.animateOnScroll(document.querySelectorAll('.contact-info-item'));
        }, 100);
    },

    loadContactLinks() {
        const linksContainer = document.getElementById('contactLinks');
        if (!linksContainer || !portfolioData.contactInfo) return;

        linksContainer.innerHTML = '';

        portfolioData.contactInfo.forEach(contact => {
            const link = document.createElement('a');
            link.href = contact.href;
            link.className = 'contact-link-btn';
            if (contact.type !== 'email') {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }

            link.innerHTML = `
                <div class="contact-info-icon" style="width:40px;height:40px;background:#222;border:1px solid #444;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    ${contact.icon}
                </div>
                <div>
                    <span class="clink-label">${contact.label}</span>
                    <span class="clink-value">${contact.value}</span>
                </div>
            `;

            linksContainer.appendChild(link);
        });
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                this.showMessage(messageDiv, 'success', '✓ Message sent! I\'ll get back to you soon.');
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            this.showMessage(messageDiv, 'error', '✗ Something went wrong. Please email me directly.');
            console.error('Error:', error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    },

    showMessage(messageDiv, type, text) {
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        messageDiv.style.display = 'block';
        setTimeout(() => { messageDiv.style.display = 'none'; }, 5000);
    }
};

// ============ Chatbot Widget ============
const chatbot = {
    init() {
        window.ChatWidgetConfig = config.chatbot;
        const chatScript = document.createElement('script');
        chatScript.src = 'assets/js/chat-widget.js';
        chatScript.defer = true;
        chatScript.onerror = () => console.warn('Chatbot widget failed to load');
        document.body.appendChild(chatScript);
    }
};

// ============ Subtle Animations ============
const animations = {
    init() {
        this.techBadgeEffects();
        this.profileCardHover();
    },

    techBadgeEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tech-badge')) {
                const text = e.target.textContent;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        const orig = e.target.textContent;
                        e.target.textContent = '✓';
                        setTimeout(() => { e.target.textContent = orig; }, 900);
                    });
                }
            }
        });
    },

    profileCardHover() {
        const card = document.querySelector('.profile-card');
        if (!card) return;
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotate(-1deg) scale(1.01)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    }
};

// ============ Performance ============
const performance = {
    init() {
        this.lazyLoadImages();
    },

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        if (!images.length) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => observer.observe(img));
    }
};

// ============ Initialization ============
document.addEventListener('DOMContentLoaded', () => {
    navigation.init();
    scrollProgress.init();
    contentLoader.loadExperience();
    contentLoader.loadProjects();
    contentLoader.loadGuides();
    contentLoader.loadContactInfo();
    contentLoader.loadContactLinks();
    contactForm.init();
    chatbot.init();
    animations.init();
    performance.init();
    utils.setupReveal();

    document.body.classList.add('loaded');
});

// ============ Export ============
window.Portfolio = {
    utils,
    navigation,
    contentLoader,
    contactForm,
    animations
};
