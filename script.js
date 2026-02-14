/* ============================================
   CHAITANYA ALLU - 3D ANIMATED PORTFOLIO
   Three.js + GSAP + Custom Animations
   ============================================ */

// ========== LOADER ==========
// Ensure hero name is visible immediately (in case gradient or animation hides it)
document.addEventListener('DOMContentLoaded', () => {
    const heroName = document.querySelector('.hero-name');
    const nameLetters = document.querySelectorAll('.hero-name .name-letter');
    if (heroName) {
        heroName.style.setProperty('opacity', '1', 'important');
        heroName.style.setProperty('visibility', 'visible', 'important');
    }
    nameLetters.forEach(el => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('-webkit-text-fill-color', '#6366f1', 'important');
        el.style.setProperty('color', '#6366f1', 'important');
    });
});

// Respect reduced motion preference (shorter loader)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const loaderDelay = prefersReducedMotion ? 400 : 2500;

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        initAnimations();
    }, loaderDelay);
});

// ========== THREE.JS 3D BACKGROUND ==========
(function initThreeJS() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const canvas = document.getElementById('bg-canvas');
        if (canvas) canvas.style.display = 'none';
        return;
    }
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 30;

    // Mouse tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // ---------- Particle System ----------
    const particlesCount = 1500;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 80;
        positions[i3 + 1] = (Math.random() - 0.5) * 80;
        positions[i3 + 2] = (Math.random() - 0.5) * 80;

        // Purple-blue gradient colors
        const mixFactor = Math.random();
        colors[i3] = 0.39 + mixFactor * 0.15;     // R
        colors[i3 + 1] = 0.36 + mixFactor * 0.1;  // G
        colors[i3 + 2] = 0.94 + mixFactor * 0.06;  // B

        sizes[i] = Math.random() * 2 + 0.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // ---------- Floating Geometric Shapes ----------
    const shapes = [];

    // Torus
    const torusGeometry = new THREE.TorusGeometry(3, 0.8, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(15, 5, -10);
    scene.add(torus);
    shapes.push({ mesh: torus, rotSpeed: { x: 0.005, y: 0.008, z: 0.003 }, floatSpeed: 0.001, floatAmp: 2 });

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(2.5, 0);
    const icoMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.12
    });
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    ico.position.set(-18, -8, -15);
    scene.add(ico);
    shapes.push({ mesh: ico, rotSpeed: { x: 0.008, y: 0.005, z: 0.006 }, floatSpeed: 0.0015, floatAmp: 3 });

    // Octahedron
    const octGeometry = new THREE.OctahedronGeometry(2, 0);
    const octMaterial = new THREE.MeshBasicMaterial({
        color: 0xa78bfa,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const oct = new THREE.Mesh(octGeometry, octMaterial);
    oct.position.set(-12, 10, -8);
    scene.add(oct);
    shapes.push({ mesh: oct, rotSpeed: { x: 0.006, y: 0.007, z: 0.004 }, floatSpeed: 0.002, floatAmp: 2.5 });

    // Dodecahedron
    const dodGeometry = new THREE.DodecahedronGeometry(2, 0);
    const dodMaterial = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    const dod = new THREE.Mesh(dodGeometry, dodMaterial);
    dod.position.set(20, -10, -12);
    scene.add(dod);
    shapes.push({ mesh: dod, rotSpeed: { x: 0.004, y: 0.006, z: 0.005 }, floatSpeed: 0.0012, floatAmp: 2 });

    // Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(2, 0.5, 100, 16);
    const knotMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.08
    });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    knot.position.set(8, -15, -20);
    scene.add(knot);
    shapes.push({ mesh: knot, rotSpeed: { x: 0.003, y: 0.004, z: 0.002 }, floatSpeed: 0.001, floatAmp: 1.5 });

    // ---------- Connection Lines ----------
    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.04
    });

    const linesGroup = new THREE.Group();
    for (let i = 0; i < 20; i++) {
        const lineGeometry = new THREE.BufferGeometry();
        const linePositions = new Float32Array(6);
        linePositions[0] = (Math.random() - 0.5) * 60;
        linePositions[1] = (Math.random() - 0.5) * 60;
        linePositions[2] = (Math.random() - 0.5) * 40;
        linePositions[3] = (Math.random() - 0.5) * 60;
        linePositions[4] = (Math.random() - 0.5) * 60;
        linePositions[5] = (Math.random() - 0.5) * 40;
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
        const line = new THREE.Line(lineGeometry, linesMaterial);
        linesGroup.add(line);
    }
    scene.add(linesGroup);

    // ---------- Animation Loop ----------
    let time = 0;

    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Smooth mouse follow
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Rotate particles
        particles.rotation.y = time * 0.05 + mouse.x * 0.1;
        particles.rotation.x = mouse.y * 0.1;

        // Animate particle positions (wave effect)
        const pos = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            pos[i3 + 1] += Math.sin(time + pos[i3] * 0.01) * 0.01;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        // Animate shapes
        shapes.forEach((shape, index) => {
            shape.mesh.rotation.x += shape.rotSpeed.x;
            shape.mesh.rotation.y += shape.rotSpeed.y;
            shape.mesh.rotation.z += shape.rotSpeed.z;

            // Floating motion
            shape.mesh.position.y += Math.sin(time * shape.floatSpeed * 100 + index) * 0.02 * shape.floatAmp;

            // Mouse influence
            shape.mesh.position.x += (mouse.x * 2 - shape.mesh.position.x) * 0.001;
            shape.mesh.position.y += (-mouse.y * 2 - shape.mesh.position.y) * 0.001;
        });

        // Rotate lines
        linesGroup.rotation.y = time * 0.02;
        linesGroup.rotation.x = time * 0.01;

        renderer.render(scene, camera);
    }

    animate();

    // ---------- Event Listeners ----------
    document.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Scroll-based camera movement
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        camera.position.y = -scrollY * 0.005;
        camera.position.z = 30 + scrollY * 0.005;
    });
})();


// ========== CUSTOM CURSOR ==========
(function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Cursor (fast follow)
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;

        // Follower (slow follow)
        followerX += (mouseX - followerX) * 0.08;
        followerY += (mouseY - followerY) * 0.08;
        follower.style.transform = `translate(${followerX - 17.5}px, ${followerY - 17.5}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover effect on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-category, .highlight, .contact-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
})();


// ========== NAVIGATION ==========
(function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlighting
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
})();


// ========== SCROLL PROGRESS ==========
(function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
})();


// ========== THEME TOGGLE ==========
(function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('i');

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.documentElement.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
})();


// ========== TYPED TEXT EFFECT ==========
(function initTypedText() {
    const phrases = [
        'scalable web apps',
        'secure REST APIs',
        'React interfaces',
        'Spring Boot services',
        'cloud solutions',
        'blockchain systems'
    ];

    const typedEl = document.getElementById('typed-text');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
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

        setTimeout(type, typeSpeed);
    }

    // Start after loader
    setTimeout(type, 3000);
})();


// ========== GSAP ANIMATIONS ==========
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance animations
    gsap.fromTo('.hero-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
    gsap.fromTo('.hero-greeting', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });

    // Stagger name letters - ensure they're visible first, then animate
    // Set initial state without affecting visibility
    const nameLetters = document.querySelectorAll('.name-letter');
    const heroName = document.querySelector('.hero-name');

    // Immediately make name visible
    if (heroName) {
        heroName.style.opacity = '1';
        heroName.style.visibility = 'visible';
        heroName.style.display = 'block';
    }

    nameLetters.forEach(letter => {
        letter.style.opacity = '1';
        letter.style.visibility = 'visible';
        letter.style.display = 'inline-block';
        letter.style.color = ''; // Let CSS handle color
    });

    // Use GSAP to animate only transforms, not opacity
    gsap.set('.name-letter', {
        y: 50,
        rotateX: -90,
        opacity: 1,
        immediateRender: false
    });

    gsap.to('.name-letter', {
        y: 0,
        rotateX: 0,
        opacity: 1,  // Explicitly maintain opacity
        duration: 0.8,
        stagger: 0.04,
        delay: 0.6,
        ease: 'back.out(1.7)'
    });

    gsap.fromTo('.hero-role', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.2 });
    gsap.fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.4 });
    gsap.fromTo('.hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.6 });
    gsap.fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.8 });
    gsap.fromTo('.scroll-indicator', { opacity: 0 }, { opacity: 1, duration: 1, delay: 2.2 });

    // Scroll-triggered animations for all sections
    document.querySelectorAll('[data-animate]').forEach(el => {
        const delay = parseFloat(el.getAttribute('data-delay') || 0);
        const direction = el.getAttribute('data-animate');

        let fromVars = { opacity: 0 };
        if (direction === 'fade-up') fromVars.y = 40;
        else if (direction === 'fade-right') fromVars.x = -40;
        else if (direction === 'fade-left') fromVars.x = 40;

        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.fromTo(el, fromVars, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    delay: delay,
                    ease: 'power3.out'
                });
                el.classList.add('visible');
            }
        });
    });

    // Skill bars animation
    document.querySelectorAll('.skill-fill').forEach(bar => {
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                bar.classList.add('animated');
            }
        });
    });

    // Counter animation for stats
    document.querySelectorAll('.stat-number').forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                const target = parseFloat(counter.getAttribute('data-count'));
                const isDecimal = counter.getAttribute('data-decimal') === 'true';
                const duration = 2;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = (currentTime - startTime) / 1000;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = target * eased;

                    if (isDecimal) {
                        counter.textContent = current.toFixed(1);
                    } else {
                        counter.textContent = Math.floor(current);
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
            }
        });
    });

    // Parallax effects
    gsap.to('.image-frame', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -30,
        rotation: 3
    });

    // Project cards stagger
    gsap.fromTo('.project-card', {
        opacity: 0,
        y: 60,
        scale: 0.95
    }, {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            once: true
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Timeline animation
    gsap.fromTo('.timeline-item', {
        opacity: 0,
        x: -30
    }, {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            once: true
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Section headers animation
    document.querySelectorAll('.section-line').forEach(line => {
        gsap.fromTo(line, { scaleX: 0 }, {
            scrollTrigger: {
                trigger: line,
                start: 'top 85%',
                once: true
            },
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}


// ========== 3D TILT EFFECT FOR CARDS ==========
(function initTiltEffect() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

            // Move glow
            const glow = card.querySelector('.project-glow');
            if (glow) {
                glow.style.left = `${x - rect.width}px`;
                glow.style.top = `${y - rect.height}px`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
})();


// ========== MAGNETIC BUTTONS ==========
(function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
})();




// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// ========== INTERSECTION OBSERVER FOR VISIBILITY ==========
(function initVisibilityObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
})();


// ========== KONAMI CODE EASTER EGG ==========
(function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.style.animation = 'rainbow 2s linear';
                konamiIndex = 0;
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        } else {
            konamiIndex = 0;
        }
    });
})();


// ========== TEXT SCRAMBLE EFFECT ON SECTION TITLES ==========
(function initTextScramble() {
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }

        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }

            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }

        update() {
            let output = '';
            let complete = 0;

            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];

                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: var(--accent-primary); opacity: 0.6">${char}</span>`;
                } else {
                    output += from;
                }
            }

            this.el.innerHTML = output;

            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    // Apply to section titles on hover
    document.querySelectorAll('.section-title').forEach(title => {
        const fx = new TextScramble(title);
        const originalText = title.textContent;

        title.addEventListener('mouseenter', () => {
            fx.setText(originalText);
        });
    });
})();


// ========== BACK TO TOP ==========
(function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    function toggle() {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
})();

// ========== PERFORMANCE: REDUCE ANIMATIONS ON LOW-END DEVICES ==========
(function checkPerformance() {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.documentElement.style.setProperty('--transition-speed', '0s');
        const canvas = document.getElementById('bg-canvas');
        if (canvas) canvas.style.display = 'none';
    }
})();

// ========== CONTACT FORM: SUCCESS MESSAGE (Formspree redirect) ==========
// If you use Formspree's redirect, the form will go to your thank-you page.
// Optional: handle form submit via JS and show a message without redirect:
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form || !form.action.includes('formspree')) return;
    form.addEventListener('submit', function (e) {
        const btn = this.querySelector('[type="submit"]');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span>Sending...</span>';
        }
    });
});
