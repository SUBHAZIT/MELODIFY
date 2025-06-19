// Carousel functionality
function initCarousels() {
    document.querySelectorAll('.carousel-container').forEach(container => {
        new Carousel(container);
    });
}

class Carousel {
    constructor(container) {
        this.track = container.querySelector('.carousel-track');
        this.items = Array.from(this.track.children);
        this.nextBtn = container.querySelector('.carousel-next');
        this.prevBtn = container.querySelector('.carousel-prev');
        
        this.itemWidth = this.items[0].getBoundingClientRect().width;
        this.currentIndex = 0;
        
        this.setupEventListeners();
        this.updateCarousel();
    }
    
    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.moveToNext());
        this.prevBtn.addEventListener('click', () => this.moveToPrev());
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) this.moveToNext();
            if (touchEndX > touchStartX + 50) this.moveToPrev();
        });
    }
    
    moveToNext() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }
    
    moveToPrev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }
    
    updateCarousel() {
        const offset = -this.currentIndex * this.itemWidth;
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Add active class to current item
        this.items.forEach(item => item.classList.remove('active'));
        this.items[this.currentIndex].classList.add('active');
    }
}