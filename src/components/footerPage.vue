<template>
    <footer class="py-5 text-light">
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-4">
                    <h3 class="text-center my-2">Mascareignes-1789</h3>
                    <div class="logoBox" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to="/">
                            <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2Fcropped-Logo-mascareigne-1789-300x300.webp?alt=media&token=0719a6e8-3091-4c6e-83b8-a9c781bf3d6b"
                                alt="log-mascareignes-1789" class="imglogo">
                        </router-link>
                    </div>
                    <h4 class="text-center my-3">Nous Contacter</h4>
                    <ul class="text-center" data-aos="fade-right" data-aos-duration="1000">
                        <li>Avenue 14 juillet 1789</li>
                        <li>Résidence Mascarine</li>
                        <li >
                            <i class="bi bi-telephone-inbound mx-3"></i>
                            <a href="tel:0693041147" class="text-white text-decoration-none">0693041147</a>
                        </li>
                        
                        <li>
                            <i class="bi bi-envelope mx-3"></i>
                            <a href="mailto:maraioachil@gmail.com" class="text-white text-decoration-none">marioachil@gmail.com</a></li>
                    </ul>

                </div>
                <div class="col-sm-4">
                    <h3>A Propos</h3>
                    <ul class="list-group-flush">
                        <li class="list-group-item">Nous vous accompagnons dans votre démarche en vous proposant:</li>
                        <li class="list-group-item">Des formations adaptées à votre niveau et à vos aspirations.</li>
                        <li class="list-group-item">Un réseau de professionnels pour vous guider et vous conseiller.
                        </li>
                        <li class="list-group-item">Des ateliers et des événements pour développer vos compétences.</li>
                        <li class="list-group-item">Donnez un nouvel élan à votre carrière avec Mascareignes-1789 !</li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <h3>Abonnez-vous à notre newsletter</h3>
                    <form class="mx-5">
                         <p>Résumé mensuel de nos nouveautés et de nos actualités passionnantes.</p>
                        <div class="d-flex w-100 gap-2 my-5" data-aos="fade-left" data-aos-duration="1000">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="email" class="form-control" placeholder="Email address"
                                v-model="email" required="">
                            <button class="btn btn-primary" type="button" @click.prevent="subscribe">S'inscrire</button>
                        </div>
                    </form>
                </div>
                <div class="py-4 my-4 border-top">
                    <p class="text-center">© 2024 Mascareignes-1789, Inc. All rights reserved.</p>
                    <p class="text-center">WebMaster Achille Michael Mario ©2024 97420 Le Port </p>
                    <ul class="socialDown" data-aos="fade-right" data-aos-duration="1000">
                        <li class="ms-3">
                            <a class="link-light text-center"
                                href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmauricodeacademy.firebaseapp.com/"
                                aria-label="link Facebook" title="link Facebook" target="_blank">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="link-light text-center"
                                href="https://twitter.com/intent/tweet/?text=Apporter de l'inspiration et innovation dans l'apprentissage du codage avec le concept principal des vidéos tutoriels en créole Mauricien.&amp;url=http%3A%2F%2Fmauricodeacademy.firebaseapp.com/"
                                aria-label="share on twitter" target="_blank">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="link-light text-center" href="#" target="_blank" rel="noopener" aria-label="Share on instagram">
                                <i class="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="container-fluid px-4">
                    <div class="row">
                        <div class="col-sm-4 col-md-4  justify-content-start">
                            <div class="text-light" data-aos="zoom-in-up" data-aos-duration="1000">Copyright &copy; asso-mascareignes-1789.com 2024</div>
                        </div>
                        <div class="col-md-4 col-sm-4  justify-content-center">
                            <RouterLink to="/ml&pc" class="link-light">Privacy Policy</RouterLink>                           
                        </div>
                        <div class="col-md-4 col-sm-4  justify-content-end">
                            <router-link to="/ml&pc" class="link-light flex-end text-orange-500 mx-5"
                            >Terms &amp; Conditions</router-link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CookiesConsent />
    </footer>
</template>
<script>
import { RouterLink } from 'vue-router';
// import { collection, addDoc } from "firebase/firestore";
import CookiesConsent from './CookiesConsent.vue'
import { db } from '@/firebase';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export default {
    data() {
        return {
            email: '',
            reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
             };
    },
    components: {
        RouterLink,
        CookiesConsent
    },
    methods: {
        async subscribe() {
            if (this.reg.test(this.email)) {
                 try {
                    await  db.collection("newsletter")
                    .add({"newsEmail": this.email, "date": new Date()})
                    .then(() => {
                            Toast.fire({
                                icon: "success",
                                title: "Votre email a bien etait envoyer",
                            });
                            this.email = '';
                        })
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            } else {
                Toast.fire(
                    {
                        icon: "error",
                        title: "le format de l'email est incorrect",
                    });
            }
        }
    }
}
</script>
<style scoped>

.social-links.social-share {
    width: auto;
    margin: 16px 0;
    background: #4241415b;
    align-items: center;
}

.socialDown {
    display: flex;
    font-size: 32px;
    margin: 20px;
}

.list-group {
    background-color: transparent !important;
    --bs-list-group-border-width: 0px !important;

}

.list-group-item {
    color: white !important;
}

@media(max-width="") {}
</style>