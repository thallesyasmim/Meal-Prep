<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-3" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">
              <v-icon name="bars" color="#e5e5e5" size="2" />
            </v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="mr-4">{{appTitle}}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Menu</v-btn>    
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down mr-4">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
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
</style>