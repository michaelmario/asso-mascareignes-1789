<template>
  <div id="consent-popup" class="hidden w3-text-center">
    <div id="mauriNotice" class="w3-container">
      <div class="row">
        <div class="col-md-6 col-sm-12 p-3">
          <div class="card">
            <div class="card-header animate-right">
              <h4><i class="bi bi-info-circle"></i> Nous respectons votre vie privée</h4>
            </div>
            <div class="card-body">
              <p class="w3-padding animate-left">
                Nous utilisons des cookies pour améliorer votre expérience de navigation,
                diffuser des publicités ou du contenu personnalisés et analyser notre trafic.
                En cliquant sur «Accepter tout», vous consentez à notre utilisation de cookies
              </p>
            </div>
            <div class="card-footer justify-content-space-between">
              <router-link to="/ml&pc" exact id="notice-learn-more-button"
                class="btn btn-outline-sucess btn-success mx-3 my-3" aria-label="Configurer vos consentements">
                <span>En savoir plus →</span>
              </router-link>
              <button class="btn btn-danger my-3 mx-3" id="refuse" aria-label="Refuser notre traitement des données">
                <span>Refuser</span>
              </button>
              <a id="accept" class="btn btn-success my-3 mx-3"
                aria-label="Accepter notre traitement des données et fermer" href="/">
                <span>Accepter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CookiesConsent",
  created() {
    const cookieStorage = {
      getItem: (item) => {
        const cookies = document.cookie
          .split(';')
          .map(cookie => cookie.split('='))
          .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
      },
      clear: () => {
        document.cookie.split(';').forEach(function (c) {
          document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
        });
      },
      setItem: (item, value) => {
        document.cookie = `${item}=${value};`
      }
    }
    const storageType = cookieStorage;
    const consentPropertyName = 'jdc_consent';
    const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
    const saveToStorage = () => storageType.setItem(consentPropertyName, true);
    const loadFromStorage = () => storageType.getItem(consentPropertyName);
    if (loadFromStorage()) {
      return;
    }
    window.onload = () => {
      function acceptFn() {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
      }
      const consentPopup = document.getElementById('consent-popup');
      const acceptBtn = document.getElementById('accept');
      const refuseBtn = document.getElementById('refuse');
      acceptBtn.addEventListener('click', acceptFn);
      refuseBtn.addEventListener('click', () => {
        const consentTrue = loadFromStorage();
        if (consentTrue === 'true') {
          consentPopup.classList.add('hidden');
        } else {
          storageType.clear();
          consentPopup.classList.add('hidden')
        }
      })
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
  color: #fff;
  opacity: 1;
  z-index: 100;
  transition: opacity 1s ease;
}

#consent-popup a {
  color: #fff;
}

#consent-popup.hidden {
  opacity: 0;
}

#accept a {
  color: black;
}

/* #dialogbox > div{ background:#FFF; margin:8px; }
     #dialogbox > div > #dialogboxhead{ background: #666; font-size:19px; padding:10px; color:#CCC; }
     #dialogbox > div > #dialogboxbody{ background: #333; padding:20px; color:#FFF; }
     #dialogbox > div > #dialogboxfoot{ background: #666; padding:10px; text-align:right; }
     */
.animate-left {
  position: relative;
  animation-name: animateleft;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 5s;

}

.animate-right {
  position: relative;
  animation-name: animateRight;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2s;

}
</style>