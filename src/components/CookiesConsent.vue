<template>
    <div id="consent-popup" class="hidden w3-text-center">
       <div id="mauriNotice" class="w3-container">
         <div class="row">
           <div class="col-md-6 col-sm-12 p-3">
             <p class="w3-padding animate-left">
               Avec votre accord, nous utilisons des cookies ou technologies
               similaires pour stocker et accéder à des informations personnelles
               comme votre visite sur ce site. Vous pouvez retirer votre
               consentement ou vous opposer aux traitements basés sur l'intérêt
               légitime à tout moment en cliquant sur "En savoir plus" ou dans
               notre politique de confidentialité sur ce site.
             </p>
           </div>
           <div class="col-md-6 col-sm-12 p-3">
             <router-link to="/Privacypolicy" exact
               id="notice-learn-more-button"
               class="mx-auto my-3"
               aria-label="Configurer vos consentements"
               >
               <span>En savoir plus →</span>
               </router-link>
               <a
               id="accept"
               class="btn btn-success my-3"
               aria-label="Accepter notre traitement des données et fermer"
               href="/"
             >
               <span>Accepter &amp; Fermer</span>
             </a>
   
             <p class="w3-animate-right">
               VOUS ACCEPTEZ QUE LES INFORMATIONS DE VOTRE NAVIGATION SUR LE SITE
               SOIENT EXPLOITÉES DANS LE CADRE DE LA DEMANDE DE PROPOSITIONS ET DE
               LA RELATION COMMERCIALE QUI PEUT EN DÉCOULER.
             </p>
           </div>
         </div>
       </div>
   
             
           </div>
   </template>
   <script>
   export default {
     name: "CookiesConsent",
     created(){
      const cookieStorage = {
     getItem: (item) => {
         const cookies = document.cookie
             .split(';')
             .map(cookie => cookie.split('='))
             .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
         return cookies[item];
     },
     setItem: (item, value) => {
         document.cookie = `${item}=${value};`
     }
   }
   const storageType = cookieStorage ;
   const consentPropertyName = 'jdc_consent';
   const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
   const saveToStorage = () => storageType.setItem(consentPropertyName, true);
   
   window.onload = () => {
       function acceptFn() {
       saveToStorage(storageType);
       consentPopup.classList.add('hidden');
     }
       const consentPopup = document.getElementById('consent-popup');
       const acceptBtn = document.getElementById('accept');
       acceptBtn.addEventListener('click', acceptFn);
   
       if (shouldShowPopup(storageType)) {
           setTimeout(() => {
               consentPopup.classList.remove('hidden');
           }, 2000);
       }
   
   };
     }
   
   }
   </script>
   
   <style scoped>
   #consent-popup {
       position: fixed;
       bottom: 0;
       left: 0;
       right: 0;
       padding: 10px 2rem;
      background-color: #000000;
      color:#fff;
      opacity:1;
      z-index: 100;
       transition: opacity 1s ease;
     }
     #consent-popup a{
       color:#fff;
     }
     #consent-popup.hidden {
           opacity: 0;
       }
      #accept a{
        color:black;
       }
    /* #dialogbox > div{ background:#FFF; margin:8px; }
     #dialogbox > div > #dialogboxhead{ background: #666; font-size:19px; padding:10px; color:#CCC; }
     #dialogbox > div > #dialogboxbody{ background: #333; padding:20px; color:#FFF; }
     #dialogbox > div > #dialogboxfoot{ background: #666; padding:10px; text-align:right; }
     */
     .animate-left{
       position:relative;
       animation-name:animateleft;
       animation-duration: 5s;
       animation-timing-function:ease-in-out;
       animation-iteration-count:5s;
       
     }
     .animate-right{
       position:relative;
       animation-name:animateRight;
       animation-duration: 5s;
       animation-timing-function:ease-in-out;
       animation-iteration-count:2s;
       
     }
   </style>