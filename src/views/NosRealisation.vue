<template>
    <div class="overlay">
        <div class="p-5 bg-primary text-white rounded" id="serviesPage">
        </div>
    </div>
    <div class="container-fluid" id="mainContentPortfolio">
        <main class="container">
            <section class="archive-description">
                <h1 class="page-title ast-archive-title">portfolios</h1>
            </section>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-md-4 col-sm-12 blog-post-preview" v-for="data in datas" :key="data.id">
                        <div class="card my-3">
                            <div class="card-header">
                                <div class="card-title">
                                    <div class="portfolioImage">
                                        <img :src="data.image" :alt="data.title" class="img-fluid">
                                    </div>
                                    <router-link :to="'/realisation/:' + data.id" exact
                                        class="w3-button  w3-border my-5">
                                        {{ data.name }}
                                    </router-link>
                                </div>
                            </div>
                            <div class="card-body excerptContent">
                                <p>{{ data.excerpt }}</p>
                            </div>
                            <div class="card-footer ">
                                <router-link :to="'/realisation/:' + data.id" exact class="btn btn-success text-white">
                                    Voir Plus ... {{ data.name }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import { db } from "../firebase";

export default {
    names: "realisation",
    data() {
        return {
            datas: []
        }
    },
    methods: {
        async getPortFoilos() {
            db.collection("portfolio").get()
            .then((querySnapshot) => {
                 querySnapshot.forEach((doc) => {
                let data = doc.data();
                this.datas.push(data);
            });
        
           
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        }
    },
    mounted() {
        this.getPortFoilos();
    },
    head: {
        title: 'Asso-Mascareignes-1789, Réalisations',
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
#mainContentPortfolio {
    background-color: rgba(204, 225, 227, 0.618);
    padding: 20px;
}

.archive-description {
    max-width: 1200px;
    width: 100%;
    text-align: left;
    padding: 3em;
    background: #FFF;
    /* margin-top: 50px; */
    margin-bottom: 30px;
}

.excerptContent {
    height: 200px;
    overflow: hidden;
}

.portfolioImage {
    height: 200px;
    overflow: hidden;
    border-radius: 8px;

}
</style>