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
       <MediaData />
    </div>
 </div>   
</template>
<script>
import MediaData from '../components/MediaData.vue'
export default {
 components:{
    MediaData
 }, 
 head: {
    title: 'Asso-Mascareignes-1789, Actualités',
    meta: [
            {
                name: 'description',
                content:"Notre association aide les association  à renforcer leur présence en ligne grâce à des sites web, et gestion des réseaux sociaux."
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

</style>