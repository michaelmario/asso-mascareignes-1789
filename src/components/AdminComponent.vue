<template>
  <div>
    <form id="loginForm">
      <div class="form-floating mb-3">
        <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="name@example.com" />
        <label for="inputEmail">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="password" id="inputPassword" type="password" placeholder="Password" />
        <label for="inputPassword">Password</label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" id="inputRememberPassword" type="checkbox" v-model="rememberPassword"
          value="" />
        <label class="form-check-label" for="inputRememberPassword">Se souvenir du mot de passe</label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
        <router-link class="small" to="/forgotPassword">Mot de passe oublié?</router-link>
        <router-link to="/registerPage">Besoin d'un compte ?Inscrivez-vous!</router-link> 
        </div>
        <div class="text-center my-3">
          <button class="btn btn-primary" type="button" @click="login">Se connecter</button>
        </div>
     
      
    </form>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router';
import { auth } from '@/firebase';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
});
export default {
  name: 'AdminComponent',
  data() {
    return {
      email: '',
      password: '',
      rememberPassword: false,
      user: null,
      errorCode: null,
      errorMessage: null,
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed up 
          this.user = userCredential.user;
          if (this.user) {
            localStorage.setItem('user', JSON.stringify(this.user));
            Toast.fire({
              icon: "success",
              title: "Votre etre bien admid",
            });
            this.$router.push(`/userPage`);
          } else {
            localStorage.removeItem('user');
            localStorage.clear();
            this.user = null;
            this.errorCode = null;
            this.errorMessage = null;


          }

          // ...
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          // ..
          Toast.fire({
            icon: "danger",
            title: "Votre compt n'existe pas",
          });
          document.getElementById('loginForm').reset();
        });
    }
  }
};
</script>