<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container bg-primary text-white py-5 h-100">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Créer un compte</h3>
                                </div>
                                <div class="card-body">
                                    <RegisterComponent />
                                </div>
                                <div class="card-footer d-flex align-items-center justify-content-between  my-3">
                                    <a href="/forgotPassword">Mot de passe oublié?</a>
                                    <router-link :to="'/registerPage'">Besoin d'un compte ?Inscrivez-vous!</router-link>
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
import RegisterComponent from '@/components/RegisterComponent.vue';

export default {
    name: 'RegisterPage',
    components: {
        RegisterComponent
    },
};
</script>
<style scoped>
a{
    text-decoration: none;
    }
</style>