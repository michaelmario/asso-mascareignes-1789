<template>
     <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container bg-primary text-white py-5 h-100">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Connexion</h3></div>
                                    <div class="card-body">
                                       <AdminComponent></AdminComponent>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
           
        </div>
</template>

<script>
import AdminComponent from '@/components/AdminComponent.vue';

export default {
  name: 'AdminPage',
  components: {
    AdminComponent,
  },
  head: {
        title: 'M-1789, Connexion',
        meta: [
            {
                name: 'description',
                content:"Notre mission est d'œuvrer pour réduire cette fracture en facilitant l'accès à des services informatiques et l'utilisation des outils numériques pour tous."
            },
            {
                name: "keyword",
                content: "Fracture numérique, inclusion numérique, accès aux technologies pour tous,Faciliter l'accès aux nouvelles technologies, technologie pour tous, démocratisation du numérique"
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