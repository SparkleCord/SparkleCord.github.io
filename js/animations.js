// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
});

// Initialize feature cards with initial state
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
});
