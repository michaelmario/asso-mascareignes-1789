<template>
     <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header">
                                        <h3 class="text-center font-weight-light my-4">Récupération du mot de passe</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.</div>
                                        <form id="resetForm">
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" v-model="email" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a class="small" href="/adminPage">Connexion</a>
                                                <button class="btn btn-primary" type="button" @click="resetPassword">Réinitialiser le mot de passe</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><a href="/registerPage">Besoin d'un compte ? Inscrivez-vous!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </div>
</template>
<script>
import { auth } from '@/firebase';
import { ref } from 'vue';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    });
export default {
    name: 'RegisterComponent',
    data(){
        return {
            email:ref(''),           
          
        }
    },
    methods:{
    resetPassword() {
        auth.sendPasswordResetEmail(this.email)
    .then(() => {
        Toast.fire({
            icon: "success",
            title: "E-mail de réinitialisation du mot de passe envoyé", 
           text:"veuillez vérifier votre e-mail pour réinitialiser le mot de passe",
        });
        document.getElementById('#resetForm').reset();
    })
    .catch((error) => {
        Toast.fire({
            icon: "success",
            title: "Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe",
            text:error.message
        });
      console.error("Error sending reset email:", );
    });   
    }
}



}

</script>