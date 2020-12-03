<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content class="pl-2">
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`" class="mb-2 mt-2"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-3" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">
              <v-icon name="bars" color="#e5e5e5" size="2" />
            </v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link style="color: white;" to="/">
                <v-toolbar-title class="mr-4" to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>    
            <v-btn flat class="hidden-sm-and-down ml-2" to="/about">About</v-btn>    
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down mr-4" to="/sign-in">SIGN IN</v-btn>
            <v-btn to="/join" color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
        </v-toolbar>  
    </span>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon';

    export default {
        name: 'AppNavigation',
        data() { // Data In Component
            return {
                appTitle: 'Meal Prep',
                drawer: false, // Side bar
                items: [ // Items In Side bar
                    { title: 'Menu' },
                    { title: 'Profile' },
                    { title: 'Sign In' },
                    { title: 'Join' }
                ]
            };
        },
        components: {
            'v-icon': Icon
        }
    };
</script>

<style scoped>
    a {
        color: white;
        text-decoration: none;
    }
</style>