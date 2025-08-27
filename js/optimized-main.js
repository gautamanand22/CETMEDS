/**
 * WebSapphire - Production Optimized JavaScript
 * Optimized for performance, accessibility, and SEO
 */

(function () {
    'use strict';

    // Performance monitoring
    const perfMetrics = {
        startTime: performance.now(),
        events: []
    };

    // Utility functions
    const utils = {
        // Debounce function for performance
        debounce(func, wait, immediate) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func.apply(this, args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(this, args);
            };
        },

        // Throttle function for scroll events
        throttle(func, limit) {
            let inThrottle;
            return function (...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport(element, threshold = 0.1) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;

            return (
                rect.top <= windowHeight * (1 + threshold) &&
                rect.bottom >= -windowHeight * threshold &&
                rect.left <= windowWidth * (1 + threshold) &&
                rect.right >= -windowWidth * threshold
            );
        },

        // Intersection Observer for better performance
        createObserver(callback, options = {}) {
            const defaultOptions = {
                threshold: 0.1,
                rootMargin: '50px'
            };
            const observerOptions = { ...defaultOptions, ...options };

            if ('IntersectionObserver' in window) {
                return new IntersectionObserver(callback, observerOptions);
            }
            return null;
        },

        // Error logging
        logError(error, context = '') {
            console.error(`WebSapphire Error ${context}:`, error);
            // In production, send to error tracking service
            if (typeof gtag !== 'undefined') {
                gtag('event', 'exception', {
                    description: error.message,
                    fatal: false
                });
            }
        }
    };

    // Core App Class
    class WebSapphireApp {
        constructor() {
            this.isInitialized = false;
            this.observers = new Map();
            this.eventListeners = new Map();
            this.components = new Map();

            this.init();
        }

        init() {
            if (this.isInitialized) return;

            try {
                // Wait for DOM to be ready
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => this.setup());
                } else {
                    this.setup();
                }

                this.isInitialized = true;
            } catch (error) {
                utils.logError(error, 'initialization');
            }
        }

        setup() {
            this.setupNavigation();
            this.setupScrollEffects();
            this.setupAnimations();
            this.setupLazyLoading();
            this.setupFormHandling();
            this.setupPerformanceMonitoring();
            this.setupAccessibility();
            this.setupPWA();

            // Mark app as loaded
            document.body.classList.add('app-loaded');

            // Trigger custom event
            window.dispatchEvent(new CustomEvent('websapphire:loaded', {
                detail: { loadTime: performance.now() - perfMetrics.startTime }
            }));
        }

        setupNavigation() {
            const navbar = document.getElementById('navbar');
            const mobileToggle = document.getElementById('mobileToggle');
            const mobileNav = document.getElementById('mobileNav');

            if (!navbar) return;

            // Navbar scroll effect with throttling
            const handleScroll = utils.throttle(() => {
                const scrolled = window.scrollY > 100;
                navbar.classList.toggle('scrolled', scrolled);
            }, 16); // ~60fps

            window.addEventListener('scroll', handleScroll, { passive: true });
            this.eventListeners.set('scroll', handleScroll);

            // Mobile navigation
            if (mobileToggle && mobileNav) {
                const toggleMobileNav = (e) => {
                    e.preventDefault();
                    const isActive = mobileNav.classList.toggle('active');
                    mobileToggle.setAttribute('aria-expanded', isActive);
                    mobileToggle.classList.toggle('active', isActive);

                    // Prevent body scroll when mobile nav is open
                    document.body.classList.toggle('mobile-nav-open', isActive);
                };

                mobileToggle.addEventListener('click', toggleMobileNav);
                this.eventListeners.set('mobileToggle', toggleMobileNav);

                // Close mobile nav on link click
                const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileNav.classList.remove('active');
                        mobileToggle.setAttribute('aria-expanded', 'false');
                        mobileToggle.classList.remove('active');
                        document.body.classList.remove('mobile-nav-open');
                    });
                });

                // Close mobile nav on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        mobileToggle.setAttribute('aria-expanded', 'false');
                        mobileToggle.classList.remove('active');
                        document.body.classList.remove('mobile-nav-open');
                        mobileToggle.focus();
                    }
                });
            }

            // Smooth scroll for navigation links
            this.setupSmoothScroll();
        }

        setupSmoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');

            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    const targetId = link.getAttribute('href');
                    const target = document.querySelector(targetId);

                    if (target) {
                        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });

                        // Update URL without triggering scroll
                        if (history.pushState) {
                            history.pushState(null, null, targetId);
                        }

                        // Focus management for accessibility
                        setTimeout(() => {
                            target.focus({ preventScroll: true });
                        }, 500);
                    }
                });
            });
        }

        setupScrollEffects() {
            // Scroll progress indicator
            const createScrollIndicator = () => {
                const indicator = document.createElement('div');
                indicator.className = 'scroll-progress';
                indicator.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 3px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    z-index: 10001;
                    transition: width 0.1s ease;
                `;
                document.body.appendChild(indicator);

                const updateProgress = utils.throttle(() => {
                    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                    indicator.style.width = `${Math.min(scrollPercent, 100)}%`;
                }, 16);

                window.addEventListener('scroll', updateProgress, { passive: true });
                this.eventListeners.set('scrollProgress', updateProgress);
            };

            createScrollIndicator();
        }

        setupAnimations() {
            // Enhanced intersection observer for animations
            const animationObserver = utils.createObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const animationClass = element.dataset.animation || 'fade-in';
                        const delay = parseInt(element.dataset.delay) || 0;

                        setTimeout(() => {
                            element.classList.add('animate', animationClass);
                        }, delay);

                        // Unobserve after animation to improve performance
                        animationObserver.unobserve(element);
                    }
                });
            });

            if (animationObserver) {
                const animatedElements = document.querySelectorAll('[data-animation], .fade-in, .slide-in-left, .slide-in-right');
                animatedElements.forEach(el => animationObserver.observe(el));
                this.observers.set('animation', animationObserver);
            }
        }

        setupLazyLoading() {
            // Image lazy loading
            const imageObserver = utils.createObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        const srcset = img.dataset.srcset;

                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                        }

                        if (srcset) {
                            img.srcset = srcset;
                            img.removeAttribute('data-srcset');
                        }

                        img.classList.remove('lazy');
                        img.classList.add('lazy-loaded');

                        imageObserver.unobserve(img);
                    }
                });
            });

            if (imageObserver) {
                const lazyImages = document.querySelectorAll('img[data-src], img.lazy');
                lazyImages.forEach(img => imageObserver.observe(img));
                this.observers.set('image', imageObserver);
            }

            // Content lazy loading
            this.setupContentLazyLoading();
        }

        setupContentLazyLoading() {
            const contentObserver = utils.createObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const contentUrl = element.dataset.loadUrl;

                        if (contentUrl) {
                            this.loadContent(element, contentUrl);
                            contentObserver.unobserve(element);
                        }
                    }
                });
            });

            if (contentObserver) {
                const lazyContent = document.querySelectorAll('[data-load-url]');
                lazyContent.forEach(el => contentObserver.observe(el));
                this.observers.set('content', contentObserver);
            }
        }

        async loadContent(element, url) {
            try {
                element.innerHTML = '<div class="loading-spinner">Loading...</div>';

                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const content = await response.text();
                element.innerHTML = content;

                // Re-initialize any components in the loaded content
                this.initializeComponentsIn(element);

            } catch (error) {
                utils.logError(error, 'content loading');
                element.innerHTML = '<div class="error-message">Failed to load content</div>';
            }
        }

        setupFormHandling() {
            const forms = document.querySelectorAll('form');

            forms.forEach(form => {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    await this.handleFormSubmission(form);
                });

                // Enhanced form validation
                this.setupFormValidation(form);
            });
        }

        async handleFormSubmission(form) {
            const submitBtn = form.querySelector('[type="submit"]');
            const originalText = submitBtn.innerHTML;

            try {
                // Show loading state
                submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
                submitBtn.disabled = true;

                // Collect form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                // Validate data
                const isValid = this.validateFormData(data);
                if (!isValid) {
                    throw new Error('Form validation failed');
                }

                // Submit form (simulate API call)
                await this.submitForm(data);

                // Success state
                submitBtn.innerHTML = '<span class="success-icon">✓</span> Message Sent!';
                submitBtn.style.background = '#10b981';

                // Reset form after delay
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);

                // Track success
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        event_category: 'engagement',
                        event_label: 'contact_form'
                    });
                }

            } catch (error) {
                utils.logError(error, 'form submission');

                // Error state
                submitBtn.innerHTML = '<span class="error-icon">✗</span> Error - Try Again';
                submitBtn.style.background = '#ef4444';

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        }

        setupFormValidation(form) {
            const inputs = form.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', utils.debounce(() => this.validateField(input), 300));
            });
        }

        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const required = field.required;

            let isValid = true;
            let message = '';

            // Remove existing error
            this.clearFieldError(field);

            // Required validation
            if (required && !value) {
                isValid = false;
                message = 'This field is required';
            }

            // Email validation
            else if (type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = 'Please enter a valid email address';
                }
            }

            // Phone validation
            else if (type === 'tel' && value) {
                const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                    isValid = false;
                    message = 'Please enter a valid phone number';
                }
            }

            if (!isValid) {
                this.showFieldError(field, message);
            }

            return isValid;
        }

        showFieldError(field, message) {
            field.classList.add('error');

            let errorElement = field.parentNode.querySelector('.field-error');
            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'field-error';
                errorElement.setAttribute('role', 'alert');
                field.parentNode.appendChild(errorElement);
            }

            errorElement.textContent = message;
        }

        clearFieldError(field) {
            field.classList.remove('error');
            const errorElement = field.parentNode.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
        }

        validateFormData(data) {
            // Implement comprehensive form validation
            return Object.values(data).every(value => value.trim().length > 0);
        }

        async submitForm(data) {
            // Simulate API call
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate success/failure
                    if (Math.random() > 0.1) {
                        resolve(data);
                    } else {
                        reject(new Error('Simulated network error'));
                    }
                }, 1500);
            });
        }

        setupPerformanceMonitoring() {
            // Core Web Vitals monitoring
            if ('PerformanceObserver' in window) {
                // Largest Contentful Paint
                new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lcp = entries[entries.length - 1];
                    perfMetrics.events.push({ type: 'LCP', value: lcp.renderTime || lcp.loadTime });
                }).observe({ entryTypes: ['largest-contentful-paint'] });

                // First Input Delay
                new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    entries.forEach(entry => {
                        perfMetrics.events.push({ type: 'FID', value: entry.processingStart - entry.startTime });
                    });
                }).observe({ entryTypes: ['first-input'] });

                // Cumulative Layout Shift
                new PerformanceObserver((entryList) => {
                    let clsValue = 0;
                    const entries = entryList.getEntries();
                    entries.forEach(entry => {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    });
                    perfMetrics.events.push({ type: 'CLS', value: clsValue });
                }).observe({ entryTypes: ['layout-shift'] });
            }

            // Resource loading monitoring
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const metrics = {
                        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                        domLoadTime: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        firstByteTime: perfData.responseStart - perfData.requestStart
                    };

                    perfMetrics.events.push({ type: 'PAGE_LOAD', ...metrics });

                    // Send to analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'page_load_performance', {
                            custom_parameter: JSON.stringify(metrics)
                        });
                    }
                }, 0);
            });
        }

        setupAccessibility() {
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                // Escape key handling
                if (e.key === 'Escape') {
                    this.handleEscapeKey();
                }

                // Tab trapping for modals
                if (e.key === 'Tab') {
                    this.handleTabKey(e);
                }
            });

            // Focus management
            this.setupFocusManagement();

            // ARIA live regions
            this.setupLiveRegions();
        }

        handleEscapeKey() {
            // Close any open modals, dropdowns, or mobile navigation
            const mobileNav = document.getElementById('mobileNav');
            if (mobileNav && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                document.getElementById('mobileToggle').focus();
            }
        }

        handleTabKey(e) {
            const activeElement = document.activeElement;
            const modal = activeElement.closest('[role="dialog"]');

            if (modal) {
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }

        setupFocusManagement() {
            // Add focus indicators for keyboard navigation
            const style = document.createElement('style');
            style.textContent = `
                .js-focus-visible :focus:not(.focus-visible) {
                    outline: none;
                }
                .js-focus-visible .focus-visible {
                    outline: 2px solid #667eea;
                    outline-offset: 2px;
                }
            `;
            document.head.appendChild(style);
            document.body.classList.add('js-focus-visible');
        }

        setupLiveRegions() {
            // Create ARIA live region for dynamic content announcements
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.id = 'live-region';
            document.body.appendChild(liveRegion);

            // Expose global function for announcements
            window.announceToScreenReader = (message) => {
                liveRegion.textContent = message;
                setTimeout(() => {
                    liveRegion.textContent = '';
                }, 1000);
            };
        }

        setupPWA() {
            // Service Worker registration
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', async () => {
                    try {
                        const registration = await navigator.serviceWorker.register('/sw.js');
                        console.log('ServiceWorker registered successfully');

                        // Listen for updates
                        registration.addEventListener('updatefound', () => {
                            this.handleServiceWorkerUpdate(registration);
                        });

                    } catch (error) {
                        utils.logError(error, 'service worker registration');
                    }
                });
            }

            // Install prompt handling
            this.setupInstallPrompt();
        }

        handleServiceWorkerUpdate(registration) {
            const newWorker = registration.installing;

            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Show update notification
                    this.showUpdateNotification();
                }
            });
        }

        showUpdateNotification() {
            const notification = document.createElement('div');
            notification.className = 'update-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <p>A new version is available!</p>
                    <button onclick="window.location.reload()">Update</button>
                    <button onclick="this.parentNode.parentNode.remove()">Later</button>
                </div>
            `;
            document.body.appendChild(notification);
        }

        setupInstallPrompt() {
            let deferredPrompt;

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;

                // Show custom install button
                const installBtn = document.getElementById('install-btn');
                if (installBtn) {
                    installBtn.style.display = 'block';
                    installBtn.addEventListener('click', () => {
                        deferredPrompt.prompt();
                        deferredPrompt.userChoice.then((choiceResult) => {
                            if (choiceResult.outcome === 'accepted') {
                                console.log('User accepted the install prompt');
                            }
                            deferredPrompt = null;
                        });
                    });
                }
            });
        }

        initializeComponentsIn(container) {
            // Re-initialize components in dynamically loaded content
            const forms = container.querySelectorAll('form');
            forms.forEach(form => this.setupFormValidation(form));

            const lazyImages = container.querySelectorAll('img[data-src], img.lazy');
            const imageObserver = this.observers.get('image');
            if (imageObserver) {
                lazyImages.forEach(img => imageObserver.observe(img));
            }
        }

        // Public API methods
        destroy() {
            // Clean up event listeners
            this.eventListeners.forEach((listener, event) => {
                window.removeEventListener(event, listener);
            });

            // Disconnect observers
            this.observers.forEach(observer => observer.disconnect());

            // Clear references
            this.eventListeners.clear();
            this.observers.clear();
            this.components.clear();

            this.isInitialized = false;
        }

        getPerformanceMetrics() {
            return perfMetrics;
        }
    }

    // Initialize app
    const app = new WebSapphireApp();

    // Expose app to global scope for debugging
    if (typeof window !== 'undefined') {
        window.WebSapphireApp = app;
    }

    // Export for module systems
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = WebSapphireApp;
    }

})();
