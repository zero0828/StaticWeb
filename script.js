document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.style.display = 'none';
        });
    });

    const navDots = document.querySelectorAll('.nav-dot');
    const caseItems = document.querySelectorAll('.case-item');

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            navDots.forEach(d => d.classList.remove('active'));
            caseItems.forEach(item => item.classList.remove('active'));
            
            dot.classList.add('active');
            caseItems[index].classList.add('active');
        });
    });

    let currentIndex = 0;
    setInterval(function() {
        navDots.forEach(d => d.classList.remove('active'));
        caseItems.forEach(item => item.classList.remove('active'));
        
        currentIndex = (currentIndex + 1) % caseItems.length;
        
        navDots[currentIndex].classList.add('active');
        caseItems[currentIndex].classList.add('active');
    }, 5000);

    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        alert('感謝您的留言！我們會儘快與您聯繫。');
        this.reset();
    });

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});