<template>
    <v-container fluid fill-height class="home-hero mb-6" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
            <div class="display-xs font-weight-black white--text text-xs-center">Finally be a foodie at home  with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn x-large elevation="13" class="mt-5 brown darken-4 white--text" d-flex justify-center align-center>
                Expand More
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeHero'
    }
</script>

<style scoped>
    .home-hero {
        background-image: url('http://source.unsplash.com/0BhSKStVtdM');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>