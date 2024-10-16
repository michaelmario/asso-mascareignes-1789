<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4 col-sm-12 blog-post-preview" v-for="post in posts" :key="post.id">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <img :src="post.image" :alt="post.title" class="img-fluid">
                            <router-link :to="'/media/:' + post.id" exact
                                class="w3-button w3-padding-large w3-white w3-border">
                                {{ post.title }}
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <p>{{ post.excerpt }}</p>
                    </div>
                    <div class="card-footer ">
                        <ul class="d-flex justify-content-between">
                            <li v-for="reactions in post.reactions" :key="reactions.id">
                                {{ reactions }}</li>
                        </ul>
                        <ul class="d-flex justify-content-between">
                            <li v-for="tags in post.tags" :key="tags.id">{{ tags }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
// import axios from 'axios';
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async readmediaPOST() {
            db.collection("media").get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        let data = doc.data();
                        this.posts.push(data);
                        console.log(doc.id);
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });


        }
    },
    mounted() {
        this.readmediaPOST();
    },
    head: {
        title: 'Asso-Mascareignes-1789, Media',
        meta: [
            {
                name: 'description',
                content: "Jetez un œil à nos dernières actualités et à notre conception de la fracture numérique et comment la surmonter."
            },
            {
                name: "keyword",
                content: "Fracture numérique, inclusion numérique, accès aux technologies pour tous,Faciliter l'accès aux nouvelles technologies, technologie pour tous, démocratisation du numérique,Surmonter la fracture numérique,Sensibilisation à la fracture numérique"
            },
            {
                name: "author",
                content: "Achille Michael Mario"
            },
            {
                name: "copyright",
                content: "asso-mascareignes-1789.com 2024"
            },
            {
                name: "language",
                content: "fr"
            }


        ]

    }
}




</script>
<style scoped></style>
