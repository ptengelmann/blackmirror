// ============================================
// BLACK MIRROR STORE - INTERACTIVE EXPERIENCE
// ============================================

// Secret Codes Database (Episode References)
const SECRET_CODES = {
    'SANJUNIPERO': {
        message: 'Heaven is a place on earth. 20% off all neon collection!',
        discount: 'HEAVEN20'
    },
    'WHITECHRISTMAS': {
        message: 'Cookie detected. You\'ve unlocked the Digital Consciousness collection.',
        discount: 'COOKIE25'
    },
    'NOSEDIVE': {
        message: 'Your rating: 4.999 ⭐ - Free shipping unlocked!',
        discount: 'RATING5'
    },
    '15MILLION': {
        message: 'You\'ve earned your merits. Exclusive merch bundle unlocked.',
        discount: 'MERITS15'
    },
    'BANDERSNATCH': {
        message: 'Wrong path. Or is it? Choose again... or did you already?',
        discount: 'CHOICE10'
    },
    'ASHEYTOO': {
        message: 'I\'m On A Roll! Ashley Too collection unlocked.',
        discount: 'ASHLEY30'
    },
    'USSDEADASS': {
        message: 'Captain\'s orders: 30% off USS Callister merch.',
        discount: 'CAPTAIN30'
    }
};

// Track found codes
let foundCodes = new Set();
let userRating = 4.2;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initGlitchEffects();
    initSecretCodeSystem();
    initRatingSystem();
    initKonamiCode();
    initNewsletterForm();
    initInteractiveElements();
    initScrollEffects();
    updateCodesCounter();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// GLITCH EFFECTS
// ============================================

function initGlitchEffects() {
    // Random glitch overlay
    setInterval(() => {
        if (Math.random() > 0.95) {
            document.querySelector('.glitch-overlay').style.opacity = '0.2';
            setTimeout(() => {
                document.querySelector('.glitch-overlay').style.opacity = '0';
            }, 100);
        }
    }, 3000);

    // Glitch text effect on products
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            if (Math.random() > 0.7) {
                product.style.transform = 'translateY(-10px) translateX(2px)';
                setTimeout(() => {
                    product.style.transform = 'translateY(-10px)';
                }, 50);
            }
        });
    });

    // Random page glitches
    setInterval(() => {
        if (Math.random() > 0.98) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
    }, 5000);
}

// ============================================
// SECRET CODE SYSTEM
// ============================================

function initSecretCodeSystem() {
    const unlockBtn = document.getElementById('unlock-btn');
    const codeInput = document.getElementById('secret-code');

    unlockBtn.addEventListener('click', () => {
        checkSecretCode(codeInput.value.toUpperCase());
    });

    codeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkSecretCode(codeInput.value.toUpperCase());
        }
    });

    // Hidden codes in page elements
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('mirror-crack')) {
            revealCode('CRACK001');
        }
    });
}

function checkSecretCode(code) {
    const codeInput = document.getElementById('secret-code');

    if (SECRET_CODES[code]) {
        if (!foundCodes.has(code)) {
            foundCodes.add(code);
            showEasterEgg(SECRET_CODES[code].message);
            updateCodesCounter();

            // Glitch effect on success
            triggerSuccessGlitch();

            // Clear input
            codeInput.value = '';
        } else {
            showEasterEgg('You\'ve already unlocked this glitch!');
        }
    } else {
        // Wrong code - glitch effect
        codeInput.style.borderColor = '#ff0040';
        codeInput.style.animation = 'shake 0.3s ease';
        setTimeout(() => {
            codeInput.style.borderColor = '';
            codeInput.style.animation = '';
        }, 300);

        // Update hint
        updateHint();
    }
}

function updateHint() {
    const hints = [
        'Look where reality cracks...',
        'The year San Junipero took place...',
        'What\'s the captain\'s ship called?',
        'How many merits for your dreams?',
        'The perfect rating...',
        'Ashley\'s catchphrase...',
        'The winter holiday episode...'
    ];

    const hintText = document.getElementById('hint-text');
    hintText.textContent = hints[Math.floor(Math.random() * hints.length)];
}

function updateCodesCounter() {
    const counter = document.querySelector('.codes-count');
    if (counter) {
        counter.textContent = `${foundCodes.size}/7`;
    }
}

function triggerSuccessGlitch() {
    const overlay = document.querySelector('.glitch-overlay');
    overlay.style.background = 'repeating-linear-gradient(0deg, #00f5ff, #ff006e)';
    overlay.style.opacity = '0.3';

    setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.background = '';
    }, 500);
}

// ============================================
// EASTER EGG MODAL
// ============================================

function showEasterEgg(message) {
    const modal = document.getElementById('easter-egg-modal');
    const messageEl = document.getElementById('ee-message');
    const closeBtn = document.getElementById('close-ee');

    messageEl.textContent = message;
    modal.classList.remove('hidden');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// ============================================
// RATING SYSTEM (NOSEDIVE)
// ============================================

function initRatingSystem() {
    const ratingSystem = document.getElementById('rating-system');
    let scrollActivated = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500 && !scrollActivated) {
            ratingSystem.classList.add('active');
            scrollActivated = true;

            // Animate rating change
            animateRating();
        }
    });

    // Rating interaction
    ratingSystem.addEventListener('click', () => {
        userRating = (Math.random() * 1.5 + 3.5).toFixed(1);
        updateRating(userRating);

        if (userRating >= 4.8) {
            showEasterEgg('⭐⭐⭐⭐⭐ Perfect rating! You\'ve unlocked VIP access. Code: RATING5');
            foundCodes.add('NOSEDIVE');
            updateCodesCounter();
        }
    });
}

function animateRating() {
    const ratingValue = document.querySelector('.rating-value');
    let current = 0;

    const interval = setInterval(() => {
        current += 0.1;
        ratingValue.textContent = current.toFixed(1);

        if (current >= userRating) {
            clearInterval(interval);
            ratingValue.textContent = userRating.toFixed(1);
        }
    }, 50);
}

function updateRating(value) {
    const ratingValue = document.querySelector('.rating-value');
    ratingValue.textContent = value;

    // Color based on rating
    if (value >= 4.5) {
        ratingValue.style.color = '#00f5ff';
    } else if (value >= 3.5) {
        ratingValue.style.color = '#9d4edd';
    } else {
        ratingValue.style.color = '#ff006e';
    }
}

// ============================================
// KONAMI CODE EASTER EGG
// ============================================

function initKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                activateKonamiMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Click trigger
    const trigger = document.getElementById('konami-trigger');
    if (trigger) {
        trigger.addEventListener('click', activateKonamiMode);
    }
}

function activateKonamiMode() {
    showEasterEgg('🎮 CHEAT CODE ACTIVATED! You\'ve unlocked the secret Bandersnatch collection. Choose wisely... Code: CHOICE10');
    foundCodes.add('BANDERSNATCH');
    updateCodesCounter();

    // Visual effect
    document.body.style.animation = 'rainbow 2s linear infinite';

    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// ============================================
// NEWSLETTER FORM
// ============================================

function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;

        // Simulate success
        showEasterEgg(`✉️ Welcome to the loop, ${email.split('@')[0]}! Check your email for a special 25% discount code: REALITY25`);

        // Clear form
        form.reset();

        // Glitch effect
        triggerSuccessGlitch();
    });
}

// ============================================
// INTERACTIVE ELEMENTS
// ============================================

function initInteractiveElements() {
    // San Junipero button
    const sjBtn = document.getElementById('san-junipero-btn');
    if (sjBtn) {
        sjBtn.addEventListener('click', () => {
            showEasterEgg('🌴 Welcome to San Junipero! Where the beach is always perfect and the nights never end. Code: HEAVEN20');
            foundCodes.add('SANJUNIPERO');
            updateCodesCounter();
        });
    }

    // Grain button (The Entire History of You)
    const grainBtn = document.getElementById('grain-btn');
    if (grainBtn) {
        grainBtn.addEventListener('click', () => {
            showEasterEgg('👁️ Grain activated. Rewinding memories... You\'re now seeing everything.');

            // Visual effect - sepia filter
            document.body.style.filter = 'sepia(0.5)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);
        });
    }

    // Cart interaction
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            showEasterEgg('🛒 Your cart is empty... for now. But we\'re watching what you\'re interested in.');
        });
    }

    // Product quick add buttons
    const quickAddBtns = document.querySelectorAll('.quick-add');
    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            const productCard = btn.closest('.product-card');
            const episode = productCard.dataset.episode;

            // Animation
            btn.textContent = 'ADDED ✓';
            btn.style.background = '#00f5ff';

            setTimeout(() => {
                btn.textContent = 'QUICK ADD +';
                btn.style.background = '';
            }, 2000);

            // Update cart
            const cartCount = document.querySelector('.cart-count');
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;

            // Trigger glitch
            productCard.style.animation = 'glitch-product 0.3s ease';
            setTimeout(() => {
                productCard.style.animation = '';
            }, 300);
        });
    });

    // Episode cards
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        card.addEventListener('click', () => {
            const episode = card.dataset.episode;
            showEasterEgg(`📺 Loading episode: ${episode}... Reality distortion detected.`);
        });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initScrollEffects() {
    // Fade in elements on scroll
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.product-card, .episode-card');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Initialize product cards with initial state
    document.querySelectorAll('.product-card, .episode-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// ============================================
// HIDDEN CLICK AREAS (MORE EASTER EGGS)
// ============================================

// Mirror crack Easter egg
document.addEventListener('DOMContentLoaded', () => {
    const mirrorCrack = document.querySelector('.mirror-crack');
    if (mirrorCrack) {
        let clickCount = 0;
        mirrorCrack.style.cursor = 'pointer';

        mirrorCrack.addEventListener('click', () => {
            clickCount++;

            if (clickCount === 3) {
                showEasterEgg('🪞 You found the crack in reality! Code: WHITECHRISTMAS');
                foundCodes.add('WHITECHRISTMAS');
                updateCodesCounter();
                clickCount = 0;
            }
        });
    }

    // Merits counter Easter egg
    const meritsCounter = document.querySelector('.merits-counter');
    if (meritsCounter) {
        meritsCounter.style.cursor = 'pointer';

        meritsCounter.addEventListener('click', () => {
            showEasterEgg('🎵 You\'ve earned 15 million merits! Anyone who knows what they want can have it. Code: MERITS15');
            foundCodes.add('15MILLION');
            updateCodesCounter();
        });
    }
});

// ============================================
// SURVEILLANCE MODE (CREEPY FEATURE)
// ============================================

let mouseMovements = 0;
let timeOnSite = 0;

document.addEventListener('mousemove', () => {
    mouseMovements++;

    // After 1000 movements, show surveillance message
    if (mouseMovements === 1000) {
        showEasterEgg('👁️ We\'ve been watching. 1,000 mouse movements tracked. Welcome to the system.');
    }
});

// Track time on site
setInterval(() => {
    timeOnSite++;

    // After 5 minutes
    if (timeOnSite === 300) {
        showEasterEgg('⏰ You\'ve been here for 5 minutes. Time is relative. Or is it? Code: ASHLEY30');
        foundCodes.add('ASHEYTOO');
        updateCodesCounter();
    }
}, 1000);

// ============================================
// RANDOM GLITCH MESSAGES
// ============================================

const glitchMessages = [
    'Reality.exe has stopped working',
    'Simulation integrity: 94%',
    'Consciousness upload: FAILED',
    'Cookie instance detected',
    'Rating synchronization error',
    'Memory grain malfunction',
    'Timeline divergence detected'
];

setInterval(() => {
    if (Math.random() > 0.99) {
        const message = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];

        // Create temporary glitch message
        const glitchEl = document.createElement('div');
        glitchEl.textContent = message;
        glitchEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 0, 64, 0.9);
            color: white;
            padding: 20px 40px;
            border-radius: 8px;
            font-family: 'Space Mono', monospace;
            font-size: 18px;
            z-index: 10000;
            pointer-events: none;
            animation: glitch-message 0.5s ease;
        `;

        document.body.appendChild(glitchEl);

        setTimeout(() => {
            glitchEl.remove();
        }, 2000);
    }
}, 15000);

// ============================================
// CSS ANIMATIONS (Injected via JS)
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    @keyframes glitch-product {
        0%, 100% { transform: translateY(-10px); }
        25% { transform: translateY(-10px) translateX(-5px); filter: hue-rotate(90deg); }
        50% { transform: translateY(-10px) translateX(5px); filter: hue-rotate(180deg); }
        75% { transform: translateY(-10px) translateX(-5px); filter: hue-rotate(270deg); }
    }

    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }

    @keyframes glitch-message {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        10% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    }
`;
document.head.appendChild(style);

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c⚠️ REALITY CHECK ⚠️', 'color: #00f5ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00f5ff;');
console.log('%cYou\'re not supposed to be here...', 'color: #ff006e; font-size: 16px;');
console.log('%cBut since you are, here\'s a code: USSDEADASS', 'color: #9d4edd; font-size: 14px;');
console.log('%cType unlockAll() to reveal all codes.', 'color: #a0a0a0; font-size: 12px;');

// Debug function
window.unlockAll = () => {
    console.log('%c🔓 ALL CODES UNLOCKED', 'color: #00f5ff; font-size: 20px; font-weight: bold;');
    console.table(SECRET_CODES);

    Object.keys(SECRET_CODES).forEach(code => {
        foundCodes.add(code);
    });
    updateCodesCounter();
    showEasterEgg('🎉 Developer mode activated! All codes unlocked. You\'ve broken reality.');
};
