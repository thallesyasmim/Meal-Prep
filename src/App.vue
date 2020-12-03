<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <AppNavigation />
      <router-view></router-view> <!-- Visualization Routes -->
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
  import AppNavigation from './components/AppNavigation.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      AppNavigation,
      Footer
    }
  }
</script>

<style>
</style>