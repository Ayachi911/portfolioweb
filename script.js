document.addEventListener('DOMContentLoaded', function() {

    // PART 3: PINTEREST METRICS - Dynamic API Integration
    async function fetchPinterestMetrics() {
        const currentDisplay = document.getElementById('pinterest-current');
        const maxDisplay = document.getElementById('pinterest-max');
        
        try {
            const mockData = {
                currentMonth: {
                    impressions: 423156,
                    month: "January 2026"
                },
                maxMonth: {
                    impressions: 402198,
                    month: "March 2025"
                }
            };
            
            await new Promise(resolve => setTimeout(resolve, 500));
            const data = mockData;
            
            const currentFormatted = (data.currentMonth.impressions / 1000).toFixed(0) + 'K+';
            currentDisplay.textContent = currentFormatted;
            
            let displayMax = data.maxMonth;
            if (data.currentMonth.impressions > data.maxMonth.impressions) {
                displayMax = data.currentMonth;
            }
            
            const maxFormatted = (displayMax.impressions / 1000).toFixed(0) + 'K';
            maxDisplay.textContent = `All-time high: ${maxFormatted} (${displayMax.month})`;
            
        } catch (error) {
            console.error('Failed to fetch Pinterest metrics:', error);
            currentDisplay.textContent = '400K+';
            maxDisplay.textContent = 'All-time high: 402K (March 2025)';
        }
    }
    
    fetchPinterestMetrics();

    // TAB NAVIGATION
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const navLogo = document.querySelector('.nav-logo');

    function switchTab(tabName) {
        const targetTab = document.getElementById(`tab-${tabName}`);
        
        if (!targetTab) {
            console.warn(`Tab "${tabName}" not found`);
            return;
        }
        
        navTabs.forEach(tab => {
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.id === `tab-${tabName}`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // FIXED: Scroll logic to prevent navbar overlap
        // We jump to top immediately to ensure the new tab starts at the top
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    navLogo.addEventListener('click', () => {
        switchTab('home');
    });

    // CLICKABLE HIGHLIGHTS ON HOME
    const metricCards = document.querySelectorAll('.metric-card');
    const highlightSections = document.querySelectorAll('.highlight-section');
    const highlightCards = document.querySelectorAll('.highlight-card');

    metricCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetTab = card.dataset.navigate;
            if (targetTab) {
                switchTab(targetTab);
            }
        });
    });

    highlightSections.forEach(section => {
        section.addEventListener('click', (e) => {
            if (e.target === section || e.target.classList.contains('highlight-title') || e.target.classList.contains('title-underline')) {
                const targetTab = section.dataset.navigate;
                if (targetTab) {
                    switchTab(targetTab);
                }
            }
        });
    });

    highlightCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const targetTab = card.dataset.navigate;
            const targetSection = card.dataset.section;
            
            if (targetTab) {
                switchTab(targetTab);
                
                if (targetSection) {
                    setTimeout(() => {
                        const sectionElement = document.getElementById(`${targetTab}-${targetSection}`);
                        if (sectionElement) {
                            // FIXED: Added offset for section-specific scrolling
                            const yOffset = -100; 
                            const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }, 200);
                }
            }
        });
    });

    // EXPANDABLE SECTIONS
    const expandTriggers = document.querySelectorAll('.expandable-trigger');
    expandTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetId = trigger.dataset.target;
            const content = document.getElementById(targetId);
            if (content) {
                content.classList.toggle('active');
                trigger.textContent = content.classList.contains('active') ? 'Hide Events ↑' : 'View Events & Reports ↓';
            }
        });
    });

    // SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#report-placeholder' && href !== '#blog-placeholder') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const yOffset = -100;
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        });
    });

    // IMMERSIVE INTERACTIONS
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroTitle = document.querySelector('.hero-title');
                if (heroTitle && document.getElementById('tab-home').classList.contains('active')) {
                    const offset = scrolled * 0.3;
                    heroTitle.style.transform = `translateY(${offset}px)`;
                    heroTitle.style.opacity = Math.max(0.3, 1 - scrolled / 400);
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // RIPPLE EFFECT
    const interactiveElements = document.querySelectorAll('.clickable');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .ripple { position: absolute; border-radius: 50%; background: rgba(255, 59, 0, 0.15); transform: scale(0); animation: ripple-animation 0.6s ease-out; pointer-events: none; }
        @keyframes ripple-animation { to { transform: scale(2); opacity: 0; } }
        .clickable { position: relative; overflow: hidden; }
    `;
    document.head.appendChild(style);

    // KEYBOARD NAV
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '6') {
            const tabs = ['home', 'por', 'international', 'arts', 'technical', 'competitions'];
            const index = parseInt(e.key) - 1;
            if (tabs[index]) switchTab(tabs[index]);
        }
    });

    // PERFORMANCE
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }

    window.addEventListener('beforeunload', () => {
        document.body.style.opacity = '0';
    });
});