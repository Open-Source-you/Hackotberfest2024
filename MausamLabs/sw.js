self.addEventListener("install", e => {
    e.waituntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./styles.css", "./images/logo192.png"])
        })
    );
});
 
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});