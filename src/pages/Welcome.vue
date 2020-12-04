<template>
    <span>
        <v-carousel>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
    </span>
</template>

<script>
    export default {
        name: 'Welcome', 
        data() {
            return {
                items: [
                    { src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                    { src: 'https://images.pexels.com/photos/953710/pexels-photo-953710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                    { src: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                    { src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
                ]
            }
        }
    }
</script>

<style scoped>
</style>