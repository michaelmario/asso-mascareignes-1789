<template>  
    <form>
      <div class="form-floating mb-3">        
        <input class="form-control" v-model="username" id="inputusername" type="text" placeholder="Prénom"
          autocomplete="off" />
        <label for="inputusername">Prénom</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="email" id="inputEmail" type="email" placeholder="name@example.com"  autocomplete="off" />
        <label for="inputEmail">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input class="form-control" v-model="password" id="inputPassword" type="password" placeholder="Password" />
        <label for="inputPassword">Password</label>
      </div>
      <div class="form-floating mb-3">
        <label for="inputConfirmPassword">Confirm Password</label>
        <input class="form-control" v-model="confirmPassword" id="inputConfirmPassword" type="password"
          placeholder="Confirm Password" />         
      </div>
         <div class="form-floating my-3">
          <button class="btn btn-primary" type="submit" @click.prevent="register">S'inscrire</button> 
         </div>   
    </form> 
    
</template>

<script>
import { auth, db } from '@/firebase';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "top",
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