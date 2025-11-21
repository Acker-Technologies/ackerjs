import { component } from '../lib/index.js';

// Navbar Component
component('acker-navbar', (props) => {
    const active = props.active || '';
    return `
        <div class="navbar-container">
            <a href="index.html" class="logo">
                ⚡ AckerJS
            </a>
            <nav class="nav-links">
                <a href="index.html" class="nav-link ${active === 'home' ? 'active' : ''}">Home</a>
                <a href="docs.html" class="nav-link ${active === 'docs' ? 'active' : ''}">Docs</a>
                <a href="https://github.com/Acker-Technologies/ackerjs" class="nav-link" target="_blank">GitHub</a>
            </nav>
        </div>
    `;
}, ['active']);

// Hero Component
component('acker-hero', (props) => {
    return `
        <h1 class="hero-title">Build Faster with AckerJS</h1>
        <p class="hero-subtitle">
            A lightweight, modular JavaScript framework designed for modern web development. 
            Now with reusable components.
        </p>
        <div class="hero-cta">
            <a href="docs.html" class="btn btn-primary">Get Started</a>
            <a href="https://github.com/Acker-Technologies/ackerjs" class="btn btn-secondary" target="_blank">View on GitHub</a>
        </div>
    `;
});

// Features Component
component('acker-features', () => {
    const features = [
        { title: 'Lightweight', desc: 'Zero dependencies and tiny bundle size for maximum performance.' },
        { title: 'Modular', desc: 'Import only what you need. Tree-shakable by design.' },
        { title: 'TypeScript', desc: 'Built with TypeScript for excellent developer experience.' },
        { title: 'Components', desc: 'Create reusable custom elements with a simple API.' }
    ];

    return `
        <div class="features-grid">
            ${features.map(f => `
                <div class="feature-card">
                    <h3 class="feature-title">${f.title}</h3>
                    <p class="feature-desc">${f.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
});

// Sidebar Component
component('acker-sidebar', (props) => {
    const active = props.active || '';
    const groups = [
        {
            title: 'Getting Started',
            links: [
                { id: 'intro', text: 'Introduction' },
                { id: 'install', text: 'Installation' },
                { id: 'usage', text: 'Basic Usage' }
            ]
        },
        {
            title: 'Core Modules',
            links: [
                { id: 'dom', text: 'DOM Utilities' },
                { id: 'http', text: 'HTTP Client' },
                { id: 'format', text: 'Formatting' }
            ]
        },
        {
            title: 'Components',
            links: [
                { id: 'components', text: 'Component System' }
            ]
        }
    ];

    return `
        <nav>
            ${groups.map(group => `
                <div class="sidebar-group">
                    <div class="sidebar-title">${group.title}</div>
                    ${group.links.map(link => `
                        <a href="#${link.id}" class="sidebar-link ${active === link.id ? 'active' : ''}">
                            ${link.text}
                        </a>
                    `).join('')}
                </div>
            `).join('')}
        </nav>
    `;
}, ['active']);

// Footer Component
component('acker-footer', () => {
    return `
        <div class="footer-content">
            <p>© ${new Date().getFullYear()} Acker Technologies. Released under MIT License.</p>
        </div>
    `;
});
