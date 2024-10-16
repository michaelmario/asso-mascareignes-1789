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
                                    <div class="card-footer text-center py-3">
                                        <div class="small">
                                            <RouterLink to="/registerPage">Besoin d'un compte ? Inscrivez-vous!</RouterLink>
                                        </div>
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
};
</script>
<style scoped>

</style>