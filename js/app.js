// Main app initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Initialize all components
    initCarousels();
    setupListeningChart();
    setupScrollAnimations();
    setupRippleEffects();
    setupParallaxBackground();
    setupPopupModal();
    
    // Update progress bar (simulated)
    setInterval(updateProgressBar, 1000);
});

function updateProgressBar() {
    const progress = document.querySelector('.progress');
    const thumb = document.querySelector('.progress-thumb');
    const currentTime = document.querySelector('.time-current');
    
    if (!progress || !thumb || !currentTime) return;
    
    // Simulate progress
    const currentWidth = parseFloat(progress.style.width) || 30;
    const newWidth = currentWidth + 0.2;
    
    if (newWidth <= 100) {
        progress.style.width = `${newWidth}%`;
        thumb.style.left = `${newWidth}%`;
        
        // Update time (simulated)
        const minutes = Math.floor(newWidth / 30);
        const seconds = Math.floor((newWidth % 30) * 2);
        currentTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
}