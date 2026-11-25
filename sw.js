// OrderPro — service worker فاضي عمداً: بيخلّي الموقع يتثبّت كتطبيق
// من غير أي كاش، فكل تحديث بيوصل على طول زي الموقع العادي.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
