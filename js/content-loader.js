// Content Loader - Dynamically loads content from Markdown files
class ContentLoader {
    constructor() {
        this.contentCache = new Map();
        this.currentPage = this.getCurrentPage();
    }

    // Get current page name from URL
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('academics')) return 'academics';
        if (path.includes('work-experience')) return 'work-experience';
        if (path.includes('skills')) return 'skills';
        if (path.includes('portfolio')) return 'portfolio';
        if (path.includes('writing')) return 'writing';
        if (path.includes('photography')) return 'photography';
        if (path.includes('contact')) return 'contact';
        return 'index';
    }

    // Load content from Markdown file
    async loadContent() {
        try {
            const response = await fetch(`../content/${this.currentPage}.md`);
            if (!response.ok) {
                throw new Error(`Failed to load content: ${response.status}`);
            }
            const markdown = await response.text();
            this.parseAndUpdate(markdown);
        } catch (error) {
            console.error('Error loading content:', error);
            // Fallback to static content if Markdown fails to load
        }
    }

    // Parse Markdown and update HTML
    parseAndUpdate(markdown) {
        const sections = this.parseMarkdown(markdown);
        this.updatePageContent(sections);
    }

    // Parse Markdown into structured sections
    parseMarkdown(markdown) {
        const sections = {};
        const lines = markdown.split('\n');
        let currentSection = '';
        let currentContent = [];

        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('#')) {
                // Save previous section
                if (currentSection && currentContent.length > 0) {
                    sections[currentSection] = currentContent.join('\n').trim();
                }
                
                // Start new section
                currentSection = this.getSectionKey(line);
                currentContent = [];
            } else if (line && currentSection) {
                currentContent.push(line);
            }
        }

        // Save last section
        if (currentSection && currentContent.length > 0) {
            sections[currentSection] = currentContent.join('\n').trim();
        }

        return sections;
    }

    // Convert Markdown headers to section keys
    getSectionKey(header) {
        const text = header.replace(/^#+\s*/, '').toLowerCase();
        if (text.includes('introduction')) return 'introduction';
        if (text.includes('education')) return 'education';
        if (text.includes('research projects')) return 'researchProjects';
        if (text.includes('key academic achievements')) return 'achievements';
        if (text.includes('research interests')) return 'interests';
        if (text.includes('academic skills')) return 'skills';
        return text.replace(/\s+/g, '');
    }

    // Update page content based on parsed sections
    updatePageContent(sections) {
        switch (this.currentPage) {
            case 'academics':
                this.updateAcademicsPage(sections);
                break;
            case 'work-experience':
                this.updateWorkExperiencePage(sections);
                break;
            case 'skills':
                this.updateSkillsPage(sections);
                break;
            case 'portfolio':
                this.updatePortfolioPage(sections);
                break;
            case 'writing':
                this.updateWritingPage(sections);
                break;
            case 'photography':
                this.updatePhotographyPage(sections);
                break;
            case 'contact':
                this.updateContactPage(sections);
                break;
        }
    }

    // Update Academics page content
    updateAcademicsPage(sections) {
        // Update introduction if available
        if (sections.introduction) {
            const introElement = document.querySelector('.intro-text p');
            if (introElement) {
                introElement.textContent = sections.introduction;
            }
        }

        // Update research projects if available
        if (sections.researchProjects) {
            this.updateResearchProjects(sections.researchProjects);
        }

        // Update achievements if available
        if (sections.achievements) {
            this.updateAchievements(sections.achievements);
        }

        // Update interests if available
        if (sections.interests) {
            this.updateInterests(sections.interests);
        }

        // Update skills if available
        if (sections.skills) {
            this.updateAcademicSkills(sections.skills);
        }
    }

    // Update research projects section
    updateResearchProjects(content) {
        const projectCards = document.querySelectorAll('.project-card');
        if (!projectCards.length) return;

        const projects = this.parseProjects(content);
        
        projectCards.forEach((card, index) => {
            if (projects[index]) {
                const project = projects[index];
                
                // Update title
                const title = card.querySelector('h3, h4');
                if (title && project.title) {
                    title.textContent = project.title;
                }
                
                // Update description
                const description = card.querySelector('p');
                if (description && project.description) {
                    description.textContent = project.description;
                }
                
                // Update tags
                const tags = card.querySelector('.project-tags');
                if (tags && project.technologies) {
                    tags.innerHTML = project.technologies.map(tech => 
                        `<span class="tag">${tech}</span>`
                    ).join('');
                }
            }
        });
    }

    // Parse projects from Markdown content
    parseProjects(content) {
        const projects = [];
        const lines = content.split('\n');
        let currentProject = {};
        
        for (let line of lines) {
            line = line.trim();
            
            if (line.startsWith('###')) {
                // Save previous project
                if (currentProject.title) {
                    projects.push(currentProject);
                }
                
                // Start new project
                currentProject = {
                    title: line.replace(/^###\s*/, ''),
                    description: '',
                    technologies: []
                };
            } else if (line.startsWith('**Technologies**:')) {
                const techText = line.replace('**Technologies**:', '').trim();
                currentProject.technologies = techText.split(',').map(t => t.trim());
            } else if (line && !line.startsWith('**') && currentProject.title) {
                if (!currentProject.description) {
                    currentProject.description = line;
                }
            }
        }
        
        // Add last project
        if (currentProject.title) {
            projects.push(currentProject);
        }
        
        return projects;
    }

    // Update achievements section
    updateAchievements(content) {
        const achievementsList = document.querySelector('.achievements-list');
        if (achievementsList) {
            const achievements = content.split('\n').filter(line => line.trim().startsWith('-'));
            achievementsList.innerHTML = achievements.map(achievement => 
                `<li>${achievement.replace(/^-\s*/, '')}</li>`
            ).join('');
        }
    }

    // Update interests section
    updateInterests(content) {
        // Skip updating interests - use HTML content instead of markdown
        // This allows the HTML to override the markdown content
        return;
    }

    // Update academic skills section
    updateAcademicSkills(content) {
        const skillsList = document.querySelector('.academic-skills-list');
        if (skillsList) {
            const skills = content.split('\n').filter(line => line.trim().startsWith('-'));
            skillsList.innerHTML = skills.map(skill => 
                `<li>${skill.replace(/^-\s*/, '')}</li>`
            ).join('');
        }
    }

    // Update other page types (placeholder methods)
    updateWorkExperiencePage(sections) {
        // Implementation for work experience page
    }

    updateSkillsPage(sections) {
        // Implementation for skills page
    }

    updatePortfolioPage(sections) {
        // Implementation for portfolio page
    }

    updateWritingPage(sections) {
        // Implementation for writing page
    }

    updatePhotographyPage(sections) {
        // Implementation for photography page
    }

    updateContactPage(sections) {
        // Implementation for contact page
    }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const contentLoader = new ContentLoader();
    contentLoader.loadContent();
});
