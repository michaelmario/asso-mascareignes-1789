<template>
    <div>
        <div class="overlay">
            <div class="p-5 bg-primary text-white rounded" id="serviesPage">
            </div>
        </div>
        <div class="container ">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center my-5">Réalisation détaillée</h1>
                </div>
                <div class="col-md-12 containerRealisationDetail">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <div class="card-title"   data-aos="fade-up" aos-duration="1000">
                                        <img :src="item.image" :alt="item.title" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2>{{ item.name }}</h2>
                            <p>{{ item.content }}</p>
                            <div class="my-5">
                                <a :href="item.url" target="_blank" class="btn btn-success">Visite {{ item.name }}</a>
                            </div>
                            <div class="my-5">
                                <button type="button" @click="goBackUsingBack" class="btn btn-primary"> <i
                                        class="bi bi-arrow-left-square-fill"></i> Retour</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "../firebase";
import { useRouter, useRoute } from "vue-router";
export default {
    name: 'RealisationDetail',
    data() {
        return {
            // routeTag:this.$route.params.id.substring(2),
            routeTag: this.$route.params.id,
            item: {},
            router: useRouter(),
            route: useRoute(),
        }
    },
    methods: {
        async getDetailData() {

            const sliceId = this.routeTag.split(":")[1];
            db.collection("portfolio").doc(sliceId).get()
                .then((querySnapshot) => {
                    let data = querySnapshot.data();
                    this.item = data;
                })
        },


        goBackUsingBack() {
            if (this.router) {
                this.router.back("/realisation");
            }
        }
    },
    mounted() {
        this.getDetailData();
    },
    head: {
        title: 'Asso-Mascareignes-1789, Réalisations-Detail',
        meta: [
            {
                name: 'description',
                content: "Notre association aide les association  à renforcer leur présence en ligne grâce à des sites web, et gestion des réseaux sociaux."
            },
            {
                name: "keyword",
                content: "Comment renforcer la présence en ligne des associations,Créer un site web performant pour votre association,La gestion des réseaux sociaux pour booster les association,Stratégie newsletter, marketing par email, newsletter pour associations"
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

<style scoped>
.containerRealisationDetail {
    background-color: rgba(204, 225, 227, 0.618);
    padding: 20px;
    height: 70vh;
}
</style>