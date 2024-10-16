<template>
  <HeaderPage />
  <router-view />
  <FooterPage />
</template>

<script>
import HeaderPage from './components/headerPage.vue'
import FooterPage from './components/footerPage.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
 
}
</style>
