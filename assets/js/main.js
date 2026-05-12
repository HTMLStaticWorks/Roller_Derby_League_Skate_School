/* 
    ROLLER DERBY LEAGUE & SKATE SCHOOL
    Main JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
    // 0. Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Dark Mode Toggle
    const darkModeToggles = document.querySelectorAll('.dark-mode-toggle, #dark-mode-toggle');
    const body = document.body;

    // Check saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });

    // 3. RTL Toggle
    const rtlToggles = document.querySelectorAll('.rtl-toggle, #rtl-toggle');
    const html = document.documentElement;

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir');
            if (currentDir === 'rtl') {
                html.setAttribute('dir', 'ltr');
            } else {
                html.setAttribute('dir', 'rtl');
            }
        });
    });

    // 4. Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // 5. Scroll Reveal
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elTop < windowHeight - 100) {
                el.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 6. Smooth Scroll
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

    // 7. Page Transition Effect
    window.addEventListener('load', () => {
        body.classList.add('loaded');
    });

    // 8. Livestream Video Control (10s Loop)
    const ninjaVideo = document.getElementById('ninja-video');
    if (ninjaVideo) {
        ninjaVideo.addEventListener('timeupdate', function() {
            if (this.currentTime >= 10) {
                this.currentTime = 0;
                this.play();
            }
        });
    }
    // 9. Password Visibility Toggle
    document.querySelectorAll('.toggle-password').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // 10. Back to Top
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
