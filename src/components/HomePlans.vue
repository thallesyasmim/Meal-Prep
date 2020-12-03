<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="display-2 font-weight-black brown--text text-xs-center my-5">AVALIABLE MEAL PLANS</v-flex>
            <v-layout row wrap>
               <v-flex xs12 sm12 md4>
                   <v-card>
                       <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">KETO</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                       </v-img>

                       <v-card-title primary-title>
                           <div>
                               <h3 class="headline md-1 mb-1">Keto</h3>
                               <div>
                                 The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.
                               </div>
                           </div>
                       </v-card-title>
                       <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="brown" @click="showRecipes('kateo')" class="white--text mb-1">Select This Plan</v-btn>
                    </v-card-actions>
                   </v-card>
                </v-flex> 

                <v-flex xs12 sm12 md4>
                    <v-card>
                        <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text mb-1">PALEO</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-1">Paleo</h3>
                                <div>The Paleo diet requires the sole or predominant consumption of foods presumed to have been the only foods available to or consumed by humans during the Paleolithic era.
                                </div>
                            </div>
                        </v-card-title>

                        <v-card-actions v-if="['Menu'].includes($route.name)">
                            <v-btn outline block color="brown" @click="showRecipes('paleo')" class="white--text mb-1">Select This Plan</v-btn>
                        </v-card-actions>
                    </v-card>
              </v-flex>

              <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">VEGAN</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-1">Vegan</h3>
                            <div>The vegan diet abstains from the use of animal products. The vegan diet does not consume meat, diary products, eggs or any all other animal-derived ingredients.
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="brown" class="white--text" @click="showRecipes('vegan')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

|<script>
    import axios from 'axios';

    export default {
        name: 'HomePlans',
        data() {
            return {
                recipes: []
            }
        },
        methods: {
            async showRecipes(plan) {
                    try {
                        const response = await axios.get('https://api.edamam.com/search', {
                        params: {
                            q: plan,
                            app_id: process.env.APP_ID,
                            app_key: process.env.APP_KEY,
                            from: 0,
                            to: 9
                          }
                      });

                        const hits = response.data;
                        this.recipes = hits.hits;
                        console.log(this.recipes);
                   }
                   catch(error) {
                       this.recipes = [];
                   };
                }
        }
    }
</script>

<style scoped>
</style>