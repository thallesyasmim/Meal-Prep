<template>
    <span>
        <AppNavigation />
        <HomeHero />
    </span>
</template>

<script>
    import AppNavigation from '../components/AppNavigation.vue'; // Component Navigation
    import HomeHero from '../components/HomeHero.vue';

    export default {
        name: 'Home',
        components: {
            AppNavigation,
            HomeHero
        }
    };
</script>