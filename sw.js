const CACHE_NAME = 'websapphire-v1.0.0';
const STATIC_CACHE_NAME = 'websapphire-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'websapphire-dynamic-v1.0.0';

// Assets to cache on install
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/optimized-main.css',
    '/js/optimized-main.js',
    '/manifest.json',
    '/images/favicon.ico',
    '/images/favicon-32x32.png',
    '/images/favicon-16x16.png',
    '/images/apple-touch-icon.png',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// Network-first strategies for these patterns
const NETWORK_FIRST_PATTERNS = [
    /\/api\//,
    /\/contact/,
    /\/forms/
];

// Cache-first strategies for these patterns
const CACHE_FIRST_PATTERNS = [
    /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    /\.(?:css|js)$/,
    /\.(?:woff|woff2|ttf|eot)$/
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('[SW] Installing...');

    event.waitUntil(
        caches.open(STATIC_CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] Skip waiting');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[SW] Install failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE_NAME &&
                            cacheName !== DYNAMIC_CACHE_NAME &&
                            cacheName.startsWith('websapphire-')) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Claiming clients');
                return self.clients.claim();
            })
            .catch(error => {
                console.error('[SW] Activation failed:', error);
            })
    );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Network-first strategy for API calls and forms
    if (NETWORK_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
        event.respondWith(networkFirst(request));
        return;
    }

    // Cache-first strategy for static assets
    if (CACHE_FIRST_PATTERNS.some(pattern => pattern.test(url.pathname))) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Stale-while-revalidate for HTML pages
    if (request.headers.get('accept').includes('text/html')) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    // Default to network-first
    event.respondWith(networkFirst(request));
});

// Network-first strategy
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            // Clone response for caching
            const responseClone = networkResponse.clone();

            // Cache successful responses
            caches.open(DYNAMIC_CACHE_NAME)
                .then(cache => cache.put(request, responseClone))
                .catch(error => console.warn('[SW] Failed to cache:', error));
        }

        return networkResponse;
    } catch (error) {
        console.warn('[SW] Network failed, trying cache:', error);

        // Fallback to cache
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page for navigation requests
        if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/offline.html') || new Response(
                '<h1>Offline</h1><p>You are currently offline. Please check your connection.</p>',
                { headers: { 'Content-Type': 'text/html' } }
            );
        }

        throw error;
    }
}

// Cache-first strategy
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            // Cache the response
            const responseClone = networkResponse.clone();
            caches.open(STATIC_CACHE_NAME)
                .then(cache => cache.put(request, responseClone))
                .catch(error => console.warn('[SW] Failed to cache:', error));
        }

        return networkResponse;
    } catch (error) {
        console.error('[SW] Cache-first failed:', error);
        throw error;
    }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
    const cachedResponse = await caches.match(request);

    // Fetch fresh version in background
    const fetchPromise = fetch(request)
        .then(networkResponse => {
            if (networkResponse.ok) {
                const responseClone = networkResponse.clone();
                caches.open(DYNAMIC_CACHE_NAME)
                    .then(cache => cache.put(request, responseClone))
                    .catch(error => console.warn('[SW] Failed to cache:', error));
            }
            return networkResponse;
        })
        .catch(error => {
            console.warn('[SW] Network fetch failed:', error);
            return cachedResponse; // Return cached version if network fails
        });

    // Return cached version immediately if available
    return cachedResponse || fetchPromise;
}

// Background sync for form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'contact-form') {
        event.waitUntil(syncContactForm());
    }
});

async function syncContactForm() {
    try {
        // Get pending form submissions from IndexedDB
        const pendingForms = await getPendingForms();

        for (const form of pendingForms) {
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form.data)
                });

                if (response.ok) {
                    // Remove from pending queue
                    await removePendingForm(form.id);
                    console.log('[SW] Form synced successfully');
                }
            } catch (error) {
                console.warn('[SW] Form sync failed:', error);
            }
        }
    } catch (error) {
        console.error('[SW] Background sync failed:', error);
    }
}

// Push notification handling
self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'New update available!',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png',
        vibrate: [100, 50, 100],
        actions: [
            {
                action: 'view',
                title: 'View',
                icon: '/images/view-icon.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/images/close-icon.png'
            }
        ],
        tag: 'websapphire-notification',
        renotify: true,
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification('WebSapphire', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Cache management utilities
async function cleanupCaches() {
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(name =>
        name.startsWith('websapphire-') &&
        name !== STATIC_CACHE_NAME &&
        name !== DYNAMIC_CACHE_NAME
    );

    return Promise.all(oldCaches.map(name => caches.delete(name)));
}

// IndexedDB helpers for offline form storage
async function getPendingForms() {
    // Implementation would depend on IndexedDB setup
    return [];
}

async function removePendingForm(id) {
    // Implementation would depend on IndexedDB setup
    return true;
}

// Error handling
self.addEventListener('error', event => {
    console.error('[SW] Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', event => {
    console.error('[SW] Unhandled promise rejection:', event.reason);
});

// Periodic background sync for cache cleanup
self.addEventListener('periodicsync', event => {
    if (event.tag === 'cache-cleanup') {
        event.waitUntil(cleanupCaches());
    }
});

console.log('[SW] Service Worker loaded');
