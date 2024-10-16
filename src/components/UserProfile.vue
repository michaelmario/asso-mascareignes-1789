<template>
  <div class="container my-5">
        <h3>Mettre à jour votre profil</h3>
    <form >
      <div class="input-group">
        <input type="file"  @change="onFileChange" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
          aria-label="Upload">
          <button class="btn btn-primary" @click="upLoadProfile" type="button" id="inputGroupFileAddon04">Button</button>
      </div>
      
    </form>
  </div>
</template>

<script>

import {  storage } from '@/firebase';
import { useUserStore } from '../stores/userStore'
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
      bio: "",
      image: null,
      store:useUserStore(),
    };
  },
  methods: {
    onFileChange(e) {
      this.image = e.target.files[0];
    },
    async upLoadProfile() {
      if (this.image) {
        // Upload image to Firebase Storage
        const storageRef = storage.ref();
        const fileRef = storageRef.child('Avatar/' + this.image.name);
        await fileRef.put(this.image, {
        contentType: "image/jpeg",
      })
      .then((snapshot) => {
        const imgUrl = {image:snapshot.ref.fullPath}
        this.store.updateUser(imgUrl)
        Toast.fire({
              icon: "success",
              title: "Votre image a été envoyée !",
              });
      });
  } else {
    alert("Please select a file")
  }

    
    },
  },
};
</script>