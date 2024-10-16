<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container bg-primary text-white py-5 h-100">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Créer un compte</h3>
                                </div>
                                <div class="card-body">
                                    <RegisterComponent />
                                </div>
                                <div class="card-footer text-center py-3">
                                  
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
<style scoped></style>