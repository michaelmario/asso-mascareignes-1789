const  cacheName = 'v1';
const cacheAssets = [
    '/',
    '/index.html',
    
            
];
self.addEventListener('install',(e)=>{
    console.log('service-worker:installed');
  e.waitUntil(
    caches.open(cacheName)
    .then(cache =>{
        console.log('service-worker:caching assets');
        cache.addAll(cacheAssets);
    })
    .then(()=>self.skipWaiting())
)
})
self.addEventListener('activate',(e)=>{
    console.log('service-worker:activated');
    self.clients.claim();
    //remove unwanted caches 
   e.waitUntil(
    caches.keys().then(cacheNames=>{
        return Promise.all(
            cacheNames.map(cache=>{
                if(cache !== cacheName){
                    console.log('service-worker:clearing old cache');
                    return caches.delete(cache);
                }
            })
        )
    })

   )

})

//Call fetch Event
self.addEventListener('fetch',(e)=>{
    console.log('service-worker:fetch');
 e.respondWith(
    caches.match(e.request).then(response=>{
        return response || fetch(e.request);
    })
 )
})
self.addEventListener('push',()=>{
    console.log('service-worker:push');
})
self.addEventListener('sync',()=>{
    console.log('service-worker:sync');
})