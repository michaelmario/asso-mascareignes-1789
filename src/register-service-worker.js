if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
  navigator.serviceWorker.register('./sw_cached_pages.js', { scope: "./" })
  .then(
   (registration) => {
     console.log("Service worker registration succeeded:", registration);
   },
   (error) => {
     console.error(`Service worker registration failed: ${error}`);
   },
 );
}  )
}