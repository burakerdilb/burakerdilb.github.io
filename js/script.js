// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    console.log('Mobile menu elements found:', { hamburger, navMenu });
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked!');
            
            const isActive = navMenu.classList.contains('active');
            console.log('Menu currently active:', isActive);
            
            if (isActive) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                console.log('Menu closed');
            } else {
                navMenu.classList.add('active');
                hamburger.classList.add('active');
                console.log('Menu opened');
            }
        });
        
        // Also add touch event for mobile
        hamburger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log('Hamburger touched!');
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    } else {
        console.error('Mobile menu elements not found!');
    }
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Dropdown navigation functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        // Handle dropdown menu clicks
        if (dropdownMenu) {
            const dropdownLinks = dropdownMenu.querySelectorAll('a');
            
            dropdownLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // If it's an anchor link on the same page, handle smooth scrolling
                    if (this.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        
                        if (targetSection) {
                            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                            
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }
                    // If it's a link to another page, let it navigate normally
                });
            });
        }
    });

    // Photo filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            photoItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Work experience filtering
    const workFilterBtns = document.querySelectorAll('.work-filters .filter-btn');
    const workItems = document.querySelectorAll('.timeline-item[data-category]');
    
    workFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            workFilterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            workItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        // Don't hide sections by default - they should be visible immediately
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Article cards hover effect
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Contact links hover effect
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // CV button click handler - now links to actual resume
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function() {
            // CV now opens in new tab via href
            console.log('Opening CV in new tab');
        });
    }




});

// Add fadeIn animation for photo filtering
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll behavior for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scrolling
    const smoothScrollPolyfill = function(target, duration) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - 70;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    };

    // Override smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                smoothScrollPolyfill(targetSection, 1000);
            }
        });
    });
}
