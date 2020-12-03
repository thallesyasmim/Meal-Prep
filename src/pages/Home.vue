<template>
    <span>
        <HomeHero />
        <HomeDetails />
        <HomePlans />
    </span>
</template>

<script>
    import HomeHero from '../components/HomeHero.vue';
    import HomeDetails from '../components/HomeDetails.vue'; 
    import HomePlans from '../components/HomePlans.vue';

    export default {
        name: 'Home',
        components: {
            HomeHero,
            HomeDetails,
            HomePlans
        }
    };
</script>