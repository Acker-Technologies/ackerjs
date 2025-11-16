// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .example-card, .doc-category, .install-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(card);
});

// Copy code on click
document.querySelectorAll('pre code').forEach(block => {
  block.style.cursor = 'pointer';
  block.title = 'Click to copy';
  
  block.addEventListener('click', async () => {
    const text = block.textContent;
    try {
      await navigator.clipboard.writeText(text);
      
      // Show feedback
      const originalText = block.textContent;
      block.textContent = 'Copied! ✓';
      block.style.color = '#10b981';
      
      setTimeout(() => {
        block.textContent = originalText;
        block.style.color = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});

// Add hover effect to code blocks
document.querySelectorAll('pre').forEach(pre => {
  pre.addEventListener('mouseenter', () => {
    pre.style.transform = 'scale(1.02)';
    pre.style.transition = 'transform 0.2s ease';
  });
  
  pre.addEventListener('mouseleave', () => {
    pre.style.transform = 'scale(1)';
  });
});

// Track scroll progress
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
  z-index: 9999;
  transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.pageYOffset / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

console.log('%c🚀 Built with AckerJS', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cVisit https://github.com/acker-technologies/ackerjs', 'color: #8b5cf6; font-size: 12px;');
