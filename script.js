@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray: #808080;
    --color-accent: #FF3B00;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Inter', -apple-system, sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    color: var(--color-black);
    background: var(--color-white);
    -webkit-font-smoothing: antialiased;
}

::selection {
    background: var(--color-accent);
    color: var(--color-white);
}

/* MAIN NAVIGATION */
.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--color-white);
    border-bottom: 1px solid var(--color-black);
    z-index: 1000;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}

.nav-logo {
    font-family: var(--font-display);
    font-size: 20px;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.nav-logo:hover {
    color: var(--color-accent);
}

.nav-tabs {
    display: flex;
    gap: 0;
}

.nav-tab {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: none;
    border: none;
    padding: 24px 20px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
}

.nav-tab:hover {
    color: var(--color-accent);
}

.nav-tab.active {
    border-bottom-color: var(--color-accent);
    color: var(--color-accent);
}

@media (max-width: 768px) {
    .nav-tabs {
        display: none;
    }
}

/* TAB CONTENT */
.tab-content {
    display: none;
    padding-top: 70px;
    min-height: 100vh;
}

.tab-content.active {
    display: block;
}

/* HOME TAB */
.hero-home {
    padding: 12vh 6vw 8vh;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-title {
    font-family: var(--font-display);
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 400;
    line-height: 0.9;
    margin-bottom: 16px;
}

.hero-subtitle {
    font-size: clamp(16px, 2vw, 20px);
    margin-bottom: 32px;
    color: var(--color-gray);
}

.hero-taglines {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.05em;
}

.tagline {
    color: var(--color-accent);
}

/* HOME METRICS */
.home-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
    padding: 6vh 6vw;
    max-width: 1200px;
    margin: 0 auto;
    background: #fafafa;
}

.metric-card {
    cursor: pointer;
    transition: transform 0.3s var(--ease);
}

.metric-card:hover {
    transform: translateY(-4px);
}

.metric-number {
    font-family: var(--font-display);
    font-size: clamp(48px, 6vw, 72px);
    line-height: 1;
    color: var(--color-accent);
    margin-bottom: 12px;
}

.metric-label {
    font-size: 15px;
    line-height: 1.5;
}

/* HOME HIGHLIGHTS */
.home-highlights {
    padding: 6vh 6vw;
    max-width: 1200px;
    margin: 0 auto;
}

.highlight-section {
    margin-bottom: 8vh;
    cursor: pointer;
}

.highlight-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 4vw, 48px);
    margin-bottom: 32px;
    border-bottom: 1px solid var(--color-black);
    padding-bottom: 12px;
    transition: color 0.3s;
}

.highlight-section:hover .highlight-title {
    color: var(--color-accent);
}

.highlight-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.highlight-card {
    padding: 24px;
    border-left: 2px solid var(--color-black);
    transition: all 0.3s var(--ease);
    cursor: pointer;
}

.highlight-card:hover {
    border-left-color: var(--color-accent);
    transform: translateX(4px);
}

.highlight-card h3 {
    font-size: 20px;
    margin-bottom: 8px;
    font-family: var(--font-display);
}

.highlight-card p {
    font-size: 15px;
    line-height: 1.5;
    color: #333;
}

/* DISCIPLINE TABS */
.tab-discipline {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4vh 6vw 8vh;
}

.discipline-header {
    margin-bottom: 4vh;
}

.discipline-title {
    font-family: var(--font-display);
    font-size: clamp(56px, 8vw, 96px);
    line-height: 0.95;
    margin-bottom: 24px;
}

.discipline-intro {
    font-size: 20px;
    line-height: 1.6;
    max-width: 800px;
    color: #333;
}

.discipline-content {
    margin-top: 6vh;
}

/* POR SECTION - ENHANCED */
#tab-por .discipline-title {
    font-size: clamp(64px, 10vw, 110px);
}

#tab-por .discipline-content {
    margin-top: 4vh;
}

.por-section {
    margin-bottom: 6vh;
    padding-bottom: 4vh;
    border-bottom: 1px solid #e0e0e0;
}

.por-section:last-child {
    border-bottom: none;
}

.por-section-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 5vw, 48px);
    margin-bottom: 24px;
    color: var(--color-black);
}

.por-description {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 24px;
    max-width: 900px;
}

.por-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin: 32px 0;
    padding: 24px;
    background: #fafafa;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-label {
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-gray);
    margin-bottom: 8px;
}

.stat-value {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-accent);
}

.por-responsibilities {
    margin: 32px 0;
}

.por-responsibilities h3 {
    font-size: 20px;
    margin-bottom: 16px;
}

.por-responsibilities ul {
    list-style: none;
    padding: 0;
}

.por-responsibilities li {
    padding: 8px 0 8px 20px;
    position: relative;
    font-size: 16px;
}

.por-responsibilities li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-accent);
}

.expandable-trigger {
    font-family: var(--font-mono);
    font-size: 13px;
    letter-spacing: 0.05em;
    background: var(--color-black);
    color: var(--color-white);
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    transition: all 0.3s;
    margin: 24px 0;
}

.expandable-trigger:hover {
    background: var(--color-accent);
    transform: translateY(-2px);
}

.expandable-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s var(--ease);
}

.expandable-content.active {
    max-height: 2000px;
}

.event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 24px;
}

.event-card {
    padding: 24px;
    background: #fafafa;
    border-left: 2px solid var(--color-accent);
}

.event-card h4 {
    font-size: 18px;
    margin-bottom: 12px;
}

.event-card p {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 16px;
}

.event-link {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--color-accent);
    text-decoration: none;
    transition: transform 0.2s;
    display: inline-block;
}

.event-link:hover {
    transform: translateX(4px);
}

/* INTERNATIONAL SECTION */
.program-title {
    font-family: var(--font-display);
    font-size: clamp(36px, 5vw, 56px);
    font-style: italic;
    margin-bottom: 16px;
}

.program-subhead {
    font-family: var(--font-mono);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-accent);
    margin-bottom: 32px;
}

.detail-block {
    margin-bottom: 32px;
}

.detail-block h3 {
    font-size: 24px;
    margin-bottom: 16px;
}

.detail-block p {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 12px;
}

.detail-block ul {
    list-style: none;
    padding: 0;
}

.detail-block li {
    padding: 8px 0;
    font-size: 16px;
}

.detail-block strong {
    color: var(--color-accent);
}

.blog-cta {
    margin: 48px 0;
    padding: 32px;
    background: #fafafa;
    text-align: center;
}

.blog-link {
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--color-accent);
    text-decoration: none;
    border: 2px solid var(--color-accent);
    padding: 12px 32px;
    display: inline-block;
    transition: all 0.3s;
}

.blog-link:hover {
    background: var(--color-accent);
    color: var(--color-white);
}

/* ARTS SECTION */
.arts-section {
    margin-bottom: 6vh;
}

.arts-section-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 4vw, 44px);
    margin-bottom: 32px;
    border-bottom: 1px solid var(--color-black);
    padding-bottom: 12px;
}

.publication-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
}

.publication-item {
    border-left: 2px solid var(--color-black);
    padding-left: 20px;
    transition: border-color 0.3s;
}

.publication-item:hover {
    border-left-color: var(--color-accent);
}

.pub-year {
    font-family: var(--font-mono);
    font-size: 11px;
    text-transform: uppercase;
    color: var(--color-gray);
    display: block;
    margin-bottom: 8px;
}

.publication-item h3 {
    font-size: 20px;
    margin-bottom: 8px;
}

.publication-item p {
    font-size: 15px;
    line-height: 1.6;
}

.digital-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-bottom: 24px;
}

.digital-platform h3 {
    font-size: 22px;
    margin-bottom: 12px;
}

.platform-metric {
    font-size: 36px;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 12px;
}

.digital-note {
    font-size: 16px;
    padding: 20px;
    background: #fafafa;
    margin-top: 24px;
}

.speaking-items {
    display: grid;
    gap: 24px;
}

.speaking-item {
    padding: 20px;
    border-left: 2px solid var(--color-black);
    padding-left: 24px;
}

.speaking-item h3 {
    font-size: 20px;
    margin-bottom: 8px;
}

/* TECHNICAL SECTION */
.tech-section {
    margin-bottom: 6vh;
}

.tech-section-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 4vw, 44px);
    margin-bottom: 32px;
}

.research-item {
    margin-bottom: 32px;
    padding: 24px;
    background: #fafafa;
}

.research-item h3 {
    font-size: 22px;
    margin-bottom: 8px;
}

.research-org {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--color-accent);
    display: block;
    margin-bottom: 16px;
}

.research-item p {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 12px;
}

.research-tech {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-gray);
}

.project-item {
    margin-bottom: 24px;
    padding: 20px;
    border-left: 2px solid var(--color-black);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.project-status {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-accent);
}

.project-tech {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--color-gray);
    margin-top: 12px;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}

.skill-category h4 {
    font-size: 16px;
    margin-bottom: 8px;
}

.skill-category p {
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1.8;
}

/* COMPETITIONS SECTION */
.comp-section {
    margin-bottom: 6vh;
}

.comp-section-title {
    font-family: var(--font-display);
    font-size: clamp(32px, 4vw, 44px);
    margin-bottom: 32px;
}

.comp-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.comp-item {
    padding: 24px;
    border: 1px solid #e0e0e0;
    transition: all 0.3s;
}

.comp-item.highlight {
    background: #fafafa;
    border-left: 3px solid var(--color-accent);
}

.comp-item h3 {
    font-size: 28px;
    color: var(--color-accent);
    margin-bottom: 8px;
}

.comp-event {
    font-family: var(--font-mono);
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.comp-item p {
    font-size: 15px;
    line-height: 1.6;
}

/* FOOTER */
.site-footer {
    background: var(--color-black);
    color: var(--color-white);
    padding: 32px 6vw;
    margin-top: 8vh;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-text {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.05em;
}

.footer-links {
    display: flex;
    gap: 24px;
}

.footer-link {
    color: var(--color-white);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
}

.footer-link:hover {
    color: var(--color-accent);
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
}
