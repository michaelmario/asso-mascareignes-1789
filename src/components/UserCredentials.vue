<template>
  <div class="container-fluid p-5 bg-primary text-white text-center">
   <div class="">
    <h1>{{ userdata.Name }}</h1>
   </div>
    
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-sm-4">
        <div class="bg-secondary p-3">
          <img :src="userdata.image" alt="image" class="img-fluid">
         
        </div>
         <UserProfile />
        <p class="mt-3">Cliquez ici pour mettre à jour vos données !</p>
        <button data-bs-toggle="collapse" data-bs-target="#profile" class="btn btn-primary my-3">Mettre à jour les données</button>
        <div id="profile" class="cards collapse">
          <form @submit.prevent="createUseraddData" novalidate autocomplete="off" id="profileForm"  class="was-validated">
             <div class="mb-3">
              <label for="pwd" class="form-label">Nom:</label>
              <input type="text" class="form-control" id="pwd" v-model="name" placeholder="Nom" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="uname" class="form-label">Prénom:</label>
              <input type="text" class="form-control" id="uname" v-model="username" placeholder="Prénom" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Numéro de Tel:</label>
              <input type="number" class="form-control" id="phone" v-model="phone" placeholder="Phone" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="mb-3 mt-3">
              <label for="adresse" class="form-label">Adresse:</label>
              <input type="text" class="form-control" id="adresse" v-model="adresse" placeholder="adresse" required>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Veuillez remplir ce champ.</div>
            </div>           
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
              <label class="form-check-label" for="myCheck">Toutes vos données seront définitivement effacées et remplacées par les nouvelles</label>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Cochez cette case pour continuer.</div>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
      <div class="col-sm-4">       
        <div class="card bg-primary text-white">
          <ul class="list-group" >
            <li> 
              <address class="list-group-item">Email:
                <a href="mailto:`${{userdata.Email}}`">{{ userdata.Email }}</a>
              </address>
              </li>
            <li class="list-group-item">Nom : {{ userdata.Name }}</li>
            <li class="list-group-item">Prénom:  {{ userdata.Username }}</li>
            <li class="list-group-item">Numéro de téléphone:<a href="tel:{{userdata.Phone}}">{{ userdata.Phone }}</a></li>
            <li>
              <address class="list-group-item">
                 Adress: {{ userdata.Adress }}
              </address>
             </li>
          </ul>
        </div>
        </div>
      <div class="col-sm-4">
        <h3>Column 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
   
  </div>

</template>

<script>
import { useUserStore } from '../stores/userStore'
import { ref } from 'vue';
import UserProfile from './UserProfile.vue';
// import { db} from '@/firebase'
import Swal from "sweetalert2";
const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    });
export default {
  data() {
    return {
      store:useUserStore(),
      name:ref(''),
      username:ref(''),
      phone:ref(''),
      userdata:{}
    };
  },
  components:{
    UserProfile
  },
 methods:{
  async createUseraddData(){
      let profile = {
        "Name": this.name,
        "Username": this.username,
        "Phone": this.phone
      };
      await this.store.updateUser(profile);
      Toast.fire({
              icon: "success",
              title: "Vos information a etait mise a jour",
              });
              document.getElementById("profileForm").reset();
              setTimeout(function () {
                        location.reload(true)
                    }, 1500)
    },
    async getUser(){
   this.userdata = await this.store.getUser(this.store.uid);
   
      }
 
  },
  mounted(){
  this.getUser();
    
}
}


</script>

<style lang="css" scoped></style>