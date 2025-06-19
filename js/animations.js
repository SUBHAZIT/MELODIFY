// Animations functionality
function setupScrollAnimations() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate albums on scroll
    gsap.utils.toArray('.album').forEach((album, i) => {
        gsap.from(album, {
            scrollTrigger: {
                trigger: album,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    // Animate cards on scroll
    gsap.utils.toArray('.card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1
        });
    });
}

function setupRippleEffects() {
    document.querySelectorAll('.btn, .player-bar, .card, .album').forEach(element => {
        element.addEventListener('click', function(e) {
            // Check if element already has a ripple to prevent multiple ripples
            if (this.querySelector('.ripple-effect')) return;
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            // Position ripple
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add ripple to element
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });
}

function setupParallaxBackground() {
    const scene = document.querySelector('.bg-objects');
    if (!scene) return;
    
    new Parallax(scene, {
        relativeInput: true,
        hoverOnly: true,
        calibrateX: true,
        calibrateY: true,
        invertX: false,
        invertY: false,
        limitX: 20,
        limitY: 20
    });
    
    // Additional GSAP animations for continuous subtle movement
    gsap.to('.obj-1', {
        duration: 20,
        x: '+=50',
        y: '+=30',
        rotation: '+=5',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.obj-2', {
        duration: 25,
        x: '-=40',
        y: '+=20',
        rotation: '-=3',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.obj-3', {
        duration: 30,
        x: '+=30',
        y: '-=40',
        rotation: '+=7',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

function setupPopupModal() {
    const popup = document.querySelector('.popup-modal');
    if (!popup) return;
    
    const closeBtn = document.querySelector('.close-popup');
    
    document.querySelectorAll('.card, .album').forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't open if clicking on play button
            if (e.target.closest('.play-btn')) return;
            
            // In a real app, you would load content based on what was clicked
            gsap.to(popup, {
                duration: 0.3,
                opacity: 1,
                display: 'flex',
                ease: 'power2.out'
            });
            
            // Prevent scrolling when popup is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', () => {
        gsap.to(popup, {
            duration: 0.3,
            opacity: 0,
            display: 'none',
            ease: 'power2.in'
        });
        
        // Restore scrolling
        document.body.style.overflow = '';
    });
    
    // Close when clicking outside content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            gsap.to(popup, {
                duration: 0.3,
                opacity: 0,
                display: 'none',
                ease: 'power2.in'
            });
            document.body.style.overflow = '';
        }
    });
}