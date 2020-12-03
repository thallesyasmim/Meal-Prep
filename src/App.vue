<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <router-view></router-view> <!-- Visualization Routes -->
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
</style>