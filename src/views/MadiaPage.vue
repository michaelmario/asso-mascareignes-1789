<template>
    <div class="overlay">
        <div class="p-5 bg-primary text-white rounded" id="serviesPage">
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <header>
                    <h2 class="text-center my-5">Nos Actualité</h2>
                </header>
            </div>
            <div class="col-md-8">
                <MediaData />
            </div>
            <div class="col-md-4">
                <aside class="aside">
                    <iframe name="f32048a8c06f5b5c1" data-testid="fb:page Facebook Social Plugin"
                        title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true"
                        allowfullscreen="true" scrolling="no" allow="encrypted-media"
                        src="https://www.facebook.com/v10.0/plugins/page.php?app_id=810156769611771&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb41ebd2c90c427f2%26domain%3Dpasubio-23b28.web.app%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fpasubio-23b28.web.app%252Ff4dc7341caf3ac07a%26relation%3Dparent.parent&amp;container_width=0&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100068592489163&amp;locale=fr_FR&amp;sdk=joey&amp;show_facepile=false&amp;width=480"
                        style="border: none; visibility: visible; width:100%; height:auto;" class="">
                    </iframe>
                    <hr>
                    <iframe name="f32048a8c06f5b5c1" data-testid="fb:page Facebook Social Plugin"
                        title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true"
                        allowfullscreen="true" scrolling="no" allow="encrypted-media"
                        src="https://www.facebook.com/v10.0/plugins/page.php?id=61566000578145&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb41ebd2c90c427f2%26domain%3Dcreation-digital.web.app%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcreation-digital.web.app%252Ff4dc7341caf3ac07a%26relation%3Dparent.parent&amp;container_width=0&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61566000578145&amp;locale=fr_FR&amp;sdk=joey&amp;show_facepile=false&amp;width=480"
                        style="border: none; visibility: visible; width:100%; height:auto;" class="">
                    </iframe>
                    <hr>
                    <ul v-for="data in datas" :key="data.id">
                        <li>
                            <router-link :to="'/media/:' + data.id" exact
                                class="w3-button w3-padding-large w3-white w3-border">
                                {{data.title }}
                            </router-link>
                        </li>
                    </ul>
                </aside>
            </div>

        </div>
    </div>
</template>
<script>
import { db } from "../firebase";
import MediaData from '../components/MediaData.vue'
export default {
    data() {
        return {
            datas: []
        }
    },
    methods: {
        async readmediaPOST() {
            db.collection("media").get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        let data = doc.data();
                        this.datas.push(data);
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
    components: {
        MediaData
    },
    head: {
        title: 'Asso-M-1789, Actualités',
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
.aside {
    width: 100%;
    height: 100vh;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;

    background-color: #ccc;
}
a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}
</style>