<template>
  <div class="overlay">
    <div class="p-5 bg-primary text-white rounded" id="serviesPage">
    </div>
  </div>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-8">
        <h3>{{ datas.title }}</h3>
        <div v-html="datas.content" class="my-5"></div>

      </div>
      <div class="col-md-4">
        <img :src="datas.image" alt="image">
        <ul class="d-flex justify-content-between" >
          <li v-for="reactions in datas.reactions" :key="reactions.id">{{ reactions}}</li>
          
        </ul>
        <ul class="d-flex justify-content-between">
          <li v-for="tags in datas.tags" :key="tags.id">{{ tags }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      datas: {},
      media_id: this.$route.params.id
    }
  },
  methods: {
    async readmediaPOST() {
      const sliceId = this.media_id.split(":")[1];
      db.collection("media").doc(sliceId).get()
      .then((querySnapshot) => {
        let data = querySnapshot.data();
             this.datas= data; })
            }
  },

  mounted() {
    this.readmediaPOST();
  },

  head: {
    title: 'My awesome site'
  }
};
</script>


