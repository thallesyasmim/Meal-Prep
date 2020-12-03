<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <AppNavigation />
      <router-view></router-view> <!-- Visualization Routes -->
    </v-content>
  </v-app>
</template>

<script>
  import AppNavigation from './components/AppNavigation.vue';

  export default {
    name: 'App',
    components: {
      AppNavigation
    }
  }
</script>

<style>
</style>