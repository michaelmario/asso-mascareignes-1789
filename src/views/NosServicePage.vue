<template>
  <div>
    <NosServicesComponent />
  </div>
</template>

<script>
import NosServicesComponent from '@/components/NosServicesComponent.vue';
export default {
  name: 'NosServicePage',
  components: {
    NosServicesComponent,
  },
  head: {
    title: 'Asso-Mascareignes-1789, Nos Services',
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
};
</script>

<style scoped>

</style>