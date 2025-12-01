// ===================================
// Navigation & Scroll Effects
// ===================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    }
});

// ===================================
// Smooth Scroll
// ===================================
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

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Scroll Reveal Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
const animateOnScroll = document.querySelectorAll('.product-card, .gallery-item, .testimonial-card, .feature, .about-image');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Product Card Hover Effects
// ===================================
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

// Check if running on local file or web server
function isLocalFile() {
    return window.location.protocol === 'file:';
}

// Show local file notice and mailto fallback if needed
if (isLocalFile()) {
    document.getElementById('localFileNotice').style.display = 'block';
    document.getElementById('mailtoFallback').style.display = 'block';
}

// Mailto fallback function
function sendViaEmail() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    const emailSubject = `New Contact Form Submission - Maycie Furniture`;
    const emailBody = `Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}

---
Sent from Maycie Furniture Website Contact Form`;
    
    const mailtoLink = `mailto:yancyalmiranez@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    showNotification('Opening your email client...', 'success');
}

// Add event listener for mailto fallback
document.getElementById('mailtoFallback').addEventListener('click', sendViaEmail);

// Add form validation and user feedback
contactForm.addEventListener('submit', (e) => {
    if (isLocalFile()) {
        // Prevent form submission on local file and use mailto instead
        e.preventDefault();
        sendViaEmail();
        return;
    }
    
    // Let the form submit naturally to FormSubmit when on web server
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Show notification
    showNotification('Sending your message...', 'success');
    
    // Note: Form will redirect to thank-you page automatically
    // This is just for immediate user feedback
});

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Gallery Lightbox Effect
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');
let currentGalleryIndex = 0;
let activeLightbox = null;

// Create gallery data array
const galleryData = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    caption: item.querySelector('.gallery-overlay span').textContent
}));

function openLightbox(index) {
    currentGalleryIndex = index;
    
    // Create lightbox if it doesn't exist
    if (!activeLightbox) {
        activeLightbox = document.createElement('div');
        activeLightbox.className = 'lightbox';
        activeLightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <button class="lightbox-nav lightbox-prev" title="Previous Image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button class="lightbox-nav lightbox-next" title="Next Image">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <img class="lightbox-image" src="" alt="">
                <p class="lightbox-caption"></p>
                <div class="lightbox-counter"></div>
            </div>
        `;
        
        // Style lightbox
        activeLightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;
        
        const lightboxContent = activeLightbox.querySelector('.lightbox-content');
        lightboxContent.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
        `;
        
        const img = activeLightbox.querySelector('.lightbox-image');
        img.style.cssText = `
            max-width: 100%;
            max-height: 80vh;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            transition: opacity 0.3s ease;
        `;
        
        const caption_el = activeLightbox.querySelector('.lightbox-caption');
        caption_el.style.cssText = `
            color: white;
            text-align: center;
            margin-top: 1rem;
            font-size: 1.2rem;
        `;
        
        const counter = activeLightbox.querySelector('.lightbox-counter');
        counter.style.cssText = `
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            margin-top: 0.5rem;
            font-size: 0.9rem;
        `;
        
        const closeBtn = activeLightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -50px;
            right: 0;
            color: white;
            font-size: 3rem;
            cursor: pointer;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
            z-index: 100;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        `;
        
        const navButtons = activeLightbox.querySelectorAll('.lightbox-nav');
        navButtons.forEach(btn => {
            btn.style.cssText = `
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255, 255, 255, 0.9);
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                color: #2c3e50;
                z-index: 100;
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            `;
        });
        
        activeLightbox.querySelector('.lightbox-prev').style.left = '20px';
        activeLightbox.querySelector('.lightbox-next').style.right = '20px';
        
        // Event listeners
        closeBtn.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2) rotate(90deg)';
            this.style.background = 'rgba(199, 149, 109, 0.9)';
        });
        
        closeBtn.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        navButtons.forEach(btn => {
            btn.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-50%) scale(1.1)';
                this.style.background = '#c7956d';
                this.style.color = 'white';
            });
            
            btn.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(-50%) scale(1)';
                this.style.background = 'rgba(255, 255, 255, 0.9)';
                this.style.color = '#2c3e50';
            });
        });
        
        // Click events
        closeBtn.addEventListener('click', closeLightbox);
        const prevBtn = activeLightbox.querySelector('.lightbox-prev');
        const nextBtn = activeLightbox.querySelector('.lightbox-next');
        
        prevBtn.addEventListener('click', () => navigateGallery('prev'));
        nextBtn.addEventListener('click', () => navigateGallery('next'));
        
        // Touch events for mobile
        prevBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateGallery('prev');
        }, { passive: false });
        
        nextBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateGallery('next');
        }, { passive: false });
        
        closeBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeLightbox();
        }, { passive: false });
        
        activeLightbox.addEventListener('click', (e) => {
            if (e.target === activeLightbox) {
                closeLightbox();
            }
        });
        
        document.body.appendChild(activeLightbox);
    }
    
    // Update content
    updateLightboxContent();
    document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
    const data = galleryData[currentGalleryIndex];
    const img = activeLightbox.querySelector('.lightbox-image');
    const caption = activeLightbox.querySelector('.lightbox-caption');
    const counter = activeLightbox.querySelector('.lightbox-counter');
    
    img.style.opacity = '0';
    
    setTimeout(() => {
        img.src = data.src;
        img.alt = data.caption;
        caption.textContent = data.caption;
        counter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;
        img.style.opacity = '1';
    }, 150);
}

function navigateGallery(direction) {
    if (direction === 'next') {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    } else {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    }
    updateLightboxContent();
}

function closeLightbox() {
    if (activeLightbox) {
        activeLightbox.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            activeLightbox.remove();
            activeLightbox = null;
            document.body.style.overflow = '';
        }, 300);
    }
}

// Add click listeners to gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

// ===================================
// Touch Swipe Support for Mobile
// ===================================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    // Gallery lightbox swipe
    if (activeLightbox && Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateGallery('prev');
        } else {
            navigateGallery('next');
        }
    }
    
    // Product modal swipe
    const modal = document.getElementById('productModal');
    if (modal && modal.classList.contains('active') && Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            navigateProduct('prev');
        } else {
            navigateProduct('next');
        }
    }
}

// Add fadeIn/fadeOut animations
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(fadeStyle);

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%c Welcome to Maycie Furniture & Fixture Trading! ', 'background: #c7956d; color: white; font-size: 20px; padding: 10px;');
console.log('%c Crafting Quality Furniture for Your Perfect Space ', 'background: #2c3e50; color: white; font-size: 14px; padding: 5px;');

// ===================================
// Product Details Data
// ===================================
const productOrder = ['living-room', 'bedroom', 'dining', 'office', 'cabinets', 'tables', 'kitchen', 'tvracks'];
let currentProductIndex = 0;

const productData = {
    'living-room': {
        title: 'Living Room Collection',
        description: 'Transform your living space into a haven of comfort and style with our premium living room furniture collection. Each piece is carefully designed to blend elegance with functionality, creating the perfect gathering space for family and friends.',
        image: 'images/products/couches.jpg',
        features: [
            'Premium quality sofas with custom upholstery options',
            'Handcrafted coffee tables with elegant finishes',
            'Modern entertainment units with cable management',
            'Accent chairs and ottomans for extra seating',
            'Modular sectionals for flexible arrangements',
            'TV stands with ample storage space'
        ],
        materials: 'Solid hardwood frames, premium fabric and leather upholstery, tempered glass surfaces, and eco-friendly finishes. All pieces are built to last with reinforced joints and quality craftsmanship.'
    },
    'bedroom': {
        title: 'Bedroom Collection',
        description: 'Create your personal sanctuary with our luxurious bedroom furniture. From comfortable beds to spacious wardrobes, every piece is designed to provide the ultimate comfort and storage solutions for a restful retreat.',
        image: 'images/products/bedframes.jpg',
        features: [
            'King, Queen, and Double size bed frames available',
            'Orthopedic mattress options for better sleep',
            'Spacious wardrobes with smart storage solutions',
            'Elegant nightstands with drawer storage',
            'Full-length mirrors and dressing tables',
            'Comfortable bedding and decorative pillows'
        ],
        materials: 'Solid oak and mahogany frames, high-quality veneers, soft-close drawer mechanisms, premium fabric headboards, and scratch-resistant finishes for long-lasting beauty.'
    },
    'dining': {
        title: 'Dining Room Collection',
        description: 'Gather around beautifully crafted dining furniture that turns every meal into a special occasion. Our dining collection combines timeless design with practical features for memorable dining experiences.',
        image: 'images/products/dining.jpg',
        features: [
            'Extendable dining tables for flexible seating',
            'Ergonomic dining chairs with cushioned seats',
            'Elegant buffets and sideboards for storage',
            'Bar stools and counter-height options',
            'Glass-top and wood dining table options',
            'Complete dining sets available'
        ],
        materials: 'Solid wood construction, heat-resistant table surfaces, stain-resistant fabrics, reinforced chair frames, and elegant wood stains that showcase natural grain patterns.'
    },
    'office': {
        title: 'Office Chairs Collection',
        description: 'Boost productivity with our professional ergonomic chairs designed for comfort and efficiency. Create an inspiring workspace that combines functionality with sophisticated style.',
        image: 'images/products/chairs.jpg',
        features: [
            'Ergonomic office chairs with lumbar support',
            'Spacious executive desks with cable management',
            'Adjustable height standing desks available',
            'Filing cabinets and storage solutions',
            'Bookcases and display shelving',
            'Conference tables for meeting rooms'
        ],
        materials: 'Commercial-grade materials, breathable mesh fabrics, adjustable hydraulic mechanisms, scratch-resistant desk surfaces, and durable powder-coated metal frames.'
    },
    'cabinets': {
        title: 'Cabinets & Storage Collection',
        description: 'Maximize your space with our modular cabinet systems and storage solutions. From wardrobes to display cabinets, every piece is designed to organize your space beautifully and efficiently.',
        image: 'images/products/cabinets.jpg',
        features: [
            'Modular wardrobe systems with customizable layouts',
            'Kitchen cabinets with modern finishes',
            'Display cabinets for showcasing collections',
            'Storage solutions for every room',
            'Soft-close mechanisms and quality hardware',
            'Custom sizing available for any space'
        ],
        materials: 'Premium engineered wood, solid wood frames, high-quality laminates, soft-close hinges, adjustable shelving, and durable finishes that resist wear and moisture.'
    },
    'tables': {
        title: 'Tables Collection',
        description: 'Discover our versatile collection of custom tables and specialty furniture pieces. Perfect for any space, combining functionality with elegant design for your unique needs.',
        image: 'images/products/tables.jpg',
        features: [
            'Custom dining tables in various sizes',
            'Coffee tables and side tables',
            'Study desks and work tables',
            'Console tables and accent pieces',
            'Bar tables and counter-height options',
            'Specialty furniture for unique spaces'
        ],
        materials: 'Premium hardwood construction, engineered wood surfaces, metal accents and legs, glass-top options, and durable finishes that resist scratches and stains for long-lasting beauty.'
    },
    'kitchen': {
        title: 'Kitchen Furniture Collection',
        description: 'Transform your kitchen into a culinary masterpiece with our modern kitchen furniture and cabinetry. Designed for both style and functionality, perfect for the heart of your home.',
        image: 'images/products/kitchen.jpg',
        features: [
            'Modern kitchen cabinet designs',
            'Custom countertop solutions',
            'Storage-optimized layouts',
            'High-quality finishes and materials',
            'Soft-close drawers and doors',
            'Complete kitchen renovation packages'
        ],
        materials: 'Water-resistant materials, heat-resistant surfaces, premium laminates, stainless steel hardware, and easy-to-clean finishes designed for kitchen environments.'
    },
    'tvracks': {
        title: 'TV Racks & Entertainment Centers',
        description: 'Elevate your entertainment space with our stylish TV racks and media centers. Designed to organize your electronics while adding elegance to your living room.',
        image: 'images/products/tv racks.jpg',
        features: [
            'Modern TV stand designs',
            'Cable management systems',
            'Storage for media devices and accessories',
            'Various sizes for different TV dimensions',
            'Floating and floor-standing options',
            'Integrated lighting options available'
        ],
        materials: 'Solid wood construction, tempered glass shelves, metal accents, cable management cutouts, and scratch-resistant finishes for long-lasting beauty.'
    }
};

// ===================================
// Product Modal Functions
// ===================================
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const data = productData[productId];
    
    if (!data) {
        console.error('Product not found:', productId);
        return;
    }
    
    // Update current product index
    currentProductIndex = productOrder.indexOf(productId);
    
    // Populate modal content
    updateModalContent(data);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalContent(data) {
    document.getElementById('modalProductTitle').textContent = data.title;
    document.getElementById('modalProductDescription').textContent = data.description;
    document.getElementById('modalProductImage').src = data.image;
    document.getElementById('modalProductMaterials').textContent = data.materials;
    
    // Populate features list
    const featuresList = document.getElementById('modalProductFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
}

function navigateProduct(direction) {
    if (direction === 'next') {
        currentProductIndex = (currentProductIndex + 1) % productOrder.length;
    } else {
        currentProductIndex = (currentProductIndex - 1 + productOrder.length) % productOrder.length;
    }
    
    const productId = productOrder[currentProductIndex];
    const data = productData[productId];
    
    // Add slide animation
    const modalBody = document.querySelector('.modal-body');
    modalBody.style.opacity = '0';
    modalBody.style.transform = direction === 'next' ? 'translateX(20px)' : 'translateX(-20px)';
    
    setTimeout(() => {
        updateModalContent(data);
        modalBody.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        modalBody.style.opacity = '1';
        modalBody.style.transform = 'translateX(0)';
    }, 150);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function scrollToContact() {
    closeProductModal();
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }, 300);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeProductModal();
    }
});

// Add touch event support for mobile devices
document.addEventListener('DOMContentLoaded', () => {
    // Product modal navigation buttons
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    
    if (modalPrev) {
        modalPrev.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateProduct('prev');
        }, { passive: false });
    }
    
    if (modalNext) {
        modalNext.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navigateProduct('next');
        }, { passive: false });
    }
});

// Unified keyboard navigation for both modal and lightbox
document.addEventListener('keydown', (e) => {
    // Check if gallery lightbox is open
    if (activeLightbox) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            navigateGallery('next');
        } else if (e.key === 'ArrowLeft') {
            navigateGallery('prev');
        }
        return;
    }
    
    // Check if product modal is open
    const modal = document.getElementById('productModal');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProductModal();
        } else if (e.key === 'ArrowRight') {
            navigateProduct('next');
        } else if (e.key === 'ArrowLeft') {
            navigateProduct('prev');
        }
    }
});


