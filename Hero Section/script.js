          // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');
        const closeBtn = document.querySelector('.close-btn');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = 'hidden';
        });
         closeBtn.addEventListener('click', () => {
            closeMobileNav();
        });

        overlay.addEventListener('click', () => {
            closeMobileNav();
        });

        function closeMobileNav() {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
  document.querySelectorAll('.mobile-links a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileNav();
            });
        });
       // Simple animations for elements when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            // Stats counter animation
            const statNumbers = document.querySelectorAll('.stat-number');
            const statsSection = document.querySelector('.stats');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        statNumbers.forEach((number, index) => {
                            let targetValue = parseInt(number.textContent);
                            let currentValue = 0;
                            let increment = targetValue / 30;
                            
                            const counter = setInterval(() => {
                                currentValue += increment;
                                if (currentValue >= targetValue) {
                                    clearInterval(counter);
                                    number.textContent = targetValue;
                                } else {
                                    number.textContent = Math.floor(currentValue);
                                }
                            }, 50);
                        });
                        
                        // Stop observing after animation
                        observer.unobserve(statsSection);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
        }); 
     