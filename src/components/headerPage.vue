<template>
    <header id="header" class="fixed-top">
        <div class="navbar  navbar-expand-lg navbar-light">
            <div class="container">
                <a href="#" class="navbar-brand text-uppercase">
                    <img src="https://firebasestorage.googleapis.com/v0/b/creation-digital/o/images%2FLogo-mascareigne-1789-2.png?alt=media&token=ce1a7a5e-379e-45b9-9ca2-317293a44108" id="logo" class="img fluid pt-1 mx-5 "
                        alt="logo-mascareignes-1789">
                </a>
                <button type="button" class="navbar-toggler bg-primary text-white  mx-3"  aria-label="UP button" title="UP button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" id="navbarButton">
                    <span class="navbar-toggler-icon text-white"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <ul class="menu">
                        <li class="nav-item">
                            <RouterLink to="/"  aria-label="link-Accueil">
                                Accueil
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/about"  aria-label="link-apropos">A Propos</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/media"  aria-label="link-media">Media</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/contact"  aria-label="link-contact">Contact</RouterLink>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Nos Actions
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li class="dropdown-item">
                                    <router-link to="/admindPage" class="dropdown-item">
                                        Profile</router-link>
                                </li>
                                <li>
                                    <router-link to="nosService" class="dropdown-item">Nos Services</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/notre-methode-de-travail">Notre méthode de travail</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'realisation'}" class="dropdown-item">Nos réalisation</router-link>
                                </li>
                                <li><a href="/formation/" class="dropdown-item">
                                        Formation</a></li>
                                <li>
                                    <a href="/courses/" class="dropdown-item">
                                        Nos Formations</a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

export default {
    components: {

    },

}
</script>