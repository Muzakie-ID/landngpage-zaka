/**
 * Nexus Landing Page - Interactive Animations
 * Pure vanilla JavaScript - no dependencies
 */

(function () {
    'use strict';

    // ===== CUSTOM CURSOR =====
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    });

    // Smooth trailing outline
    function animateCursor() {
        outlineX += (cursorX - outlineX) * 0.15;
        outlineY += (cursorY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .feature-card, .gallery-item');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        });
    });

    // ===== SCROLL PROGRESS BAR =====
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ===== MOBILE MENU =====
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ===== TYPEWRITER EFFECT =====
    const typewriterEl = document.getElementById('typewriter');
    const phrases = [
    'Registrasi IMEI Lebih Mudah.',
    'Proses Cepat & Responsif.',
    'Konsultasi Gratis via WhatsApp.',
    'Bantu Kendala Sinyal iPhone.',
    'Layanan Online Seluruh Indonesia.',
    'Fast Response Setiap Hari.',
    'Dukungan Teknis Profesional.',
    'Layanan Terpercaya & Aman.',
    'Solusi IMEI iPhone Terbaik.',
    'Kepuasan Pelanggan Prioritas.'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before next phrase
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // ===== PARTICLES =====
    const particlesContainer = document.getElementById('particles');

    function createParticles() {
        const colors = ['#7c3aed', '#06b6d4', '#ec4899', '#8b5cf6', '#14b8a6'];

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 10;

            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.background = color;
            particle.style.left = left + '%';
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = delay + 's';
            particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;

            particlesContainer.appendChild(particle);
        }
    }

    // ===== PAGE LOAD ANIMATIONS =====
    function triggerLoadAnimations() {
        const loadElements = document.querySelectorAll('.load-animate');
        loadElements.forEach((el) => {
            const delay = parseInt(el.dataset.delay) * 200 + 300;
            setTimeout(() => {
                el.classList.add('visible');
            }, delay);
        });
    }

    // ===== INTERSECTION OBSERVER - FEATURE CARDS =====
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the animation
                    const card = entry.target;
                    const cards = Array.from(card.parentElement.children);
                    const cardIndex = cards.indexOf(card);

                    setTimeout(() => {
                        card.classList.add('visible');
                    }, cardIndex * 150);

                    observer.unobserve(card);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });

        // Gallery items
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    const items = Array.from(item.parentElement.children);
                    const itemIndex = items.indexOf(item);

                    setTimeout(() => {
                        item.classList.add('visible');
                    }, itemIndex * 100);

                    galleryObserver.unobserve(item);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.gallery-item').forEach(item => {
            galleryObserver.observe(item);
        });
    }

    // ===== 3D TILT EFFECT ON CARDS =====
    function setupTiltEffect() {
        const cards = document.querySelectorAll('[data-tilt]');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / centerY * -8;
                const rotateY = (x - centerX) / centerX * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    // ===== COUNTER ANIMATION =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        let animated = false;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.target);
                        const duration = 2000;
                        const startTime = performance.now();

                        function updateCounter(currentTime) {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / duration, 1);

                            // Ease out cubic
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const current = Math.floor(eased * target);

                            counter.textContent = current.toLocaleString();

                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target.toLocaleString();
                            }
                        }

                        requestAnimationFrame(updateCounter);
                    });

                    // Animate circular progress bars
                    animateCircles();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const statsSection = document.getElementById('stats');
        if (statsSection) {
            counterObserver.observe(statsSection);
        }
    }

    // ===== CIRCULAR PROGRESS BARS =====
    function animateCircles() {
        const circles = document.querySelectorAll('.stat-circle');
        const circumference = 2 * Math.PI * 54; // r=54

        circles.forEach(circle => {
            const percent = parseInt(circle.dataset.percent);
            const offset = circumference - (percent / 100) * circumference;
            circle.style.setProperty('--target-offset', offset);
            circle.classList.add('animated');
        });
    }

    // ===== PARALLAX EFFECT ON GALLERY =====
    function setupParallax() {
        const parallaxItems = document.querySelectorAll('[data-parallax]');

        function updateParallax() {
            parallaxItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const speed = parseFloat(item.dataset.parallax);
                const yPos = (rect.top - window.innerHeight) * speed;

                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    item.style.transform = `translateY(${yPos}px)`;
                }
            });
        }

        window.addEventListener('scroll', updateParallax, { passive: true });
    }

    // ===== SCROLL EVENT HANDLER =====
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateScrollProgress();
                updateNavbar();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ===== SMOOTH ANCHOR SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== LIGHTBOX GALLERY =====
    const defaultGalleryImages = [
        'images/6080217220941287695.jpg',
        'images/6080217220941287697.jpg',
        'images/6080217220941287698.jpg',
        'images/6080217220941287700.jpg',
        'images/6080217220941287701.jpg',
        'images/6080217220941287726.jpg',
        'images/6080217220941287727.jpg',
        'images/testimoni-1.jpg',
        'images/testimoni-2.jpg',
        'images/testimoni-3.jpg'
    ];
    let galleryImages = [...defaultGalleryImages];
    let currentImageIndex = 0;

    // Di Vercel, PHP tidak dijalankan. Default ke file statis, lalu
    // coba ambil daftar dinamis hanya jika endpoint PHP benar-benar mengembalikan JSON.
    fetch('get_images.php', { cache: 'no-store' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Endpoint PHP tidak tersedia');
            }

            const contentType = response.headers.get('content-type') || '';

            if (!contentType.includes('application/json')) {
                throw new Error('Endpoint bukan JSON');
            }

            return response.json();
        })
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                galleryImages = data;
            }
        })
        .catch(() => {});

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const openGalleryBtn = document.getElementById('openGalleryBtn');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Buka Lightbox ketika tumpukan foto diklik
    if(openGalleryBtn) {
        openGalleryBtn.addEventListener('click', () => {
            currentImageIndex = 0;
            showImage(currentImageIndex);
            lightbox.style.display = 'flex';
        });
    }

    // Tutup tombol X
    if(closeBtn) {
        closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    }

    // Tombol Prev
    if(prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(currentImageIndex);
        });
    }

    // Tombol Next
    if(nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            showImage(currentImageIndex);
        });
    }

    // Tampilkan gambar berdasarkan index
    function showImage(index) {
        if (!galleryImages.length) {
            galleryImages = [...defaultGalleryImages];
        }

        lightboxImg.src = galleryImages[index] || defaultGalleryImages[0];
    }

    // Klik di luar gambar untuk menutup modal
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // ===== INITIALIZE =====
    function init() {
        createParticles();
        triggerLoadAnimations();
        setupScrollAnimations();
        setupTiltEffect();
        animateCounters();
        setupParallax();
        typeWriter();
        updateScrollProgress();
        updateNavbar();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
