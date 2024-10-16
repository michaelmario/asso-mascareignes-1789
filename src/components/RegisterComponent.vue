<template>
  <div>
    <form>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="username" id="inputusername" type="text" placeholder="Prénom"
          autocomplete="off" />
        <label for="inputusername">Prénom</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="name@example.com" />
        <label for="inputEmail">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="password" id="inputPassword" type="password" placeholder="Password" />
        <label for="inputPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="confirmPassword" id="inputConfirmPassword" type="password"
          placeholder="Confirm Password" />
        <label for="inputConfirmPassword">Confirm Password</label>
      </div>
      <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
        <router-link class="small" to="/admindPage">Déjà inscrit?</router-link>
        <button class="btn btn-primary" type="button" @click="register">S'inscrire</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth, db } from '@/firebase';
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
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      user: null,
      errorCode: null,
      errorMessage: null,
      };
  },
  methods: {
    register(e) {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          this.user = userCredential.user;
          let userRef = db.collection('users').doc(auth.currentUser.uid);
          userRef.set({
           "Email":this.email,
           "Name":this.username,
           "Username":this.username,
          
          }, { merge: true })          
          .then(() => {
            Toast.fire({
                       icon: "success",
                       title: "Félicitations, votre identifiant a été accepté",
                        });
            console.log("Document successfully written!");
            this.$router.push('/admindPage');
          });

    })
        .catch((error) => {
      this.errorCode = error.code;
      this.errorMessage = error.message;
      Toast.fire({
                  icon: "danger",
                  title: "Recréez votre identifiant, car celui-ci n'a pas été approuvé",
                });
    });
  }
}
};
</script>