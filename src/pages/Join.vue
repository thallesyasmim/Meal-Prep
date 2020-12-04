<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="brown">
                        <v-toolbar-title class="font-weight-black white--text text-xs-center">JOIN FORM</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field 
                                prepend-icon="mdi-account"
                                name="email" 
                                label="Email" 
                                type="email"
                                v-model="email" 
                                :rules="emailRules" 
                                required>
                            </v-text-field>
                            <v-text-field 
                                prepend-icon="mdi-lock"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                name="password" 
                                label="Password" 
                                id="password"
                                :type="show1 ? 'text' : 'password'"
                                hint="At least 6 characters"
                                required 
                                v-model="password"
                                :rules="passwordRules"
                                @click:append="show1 = !show1"
                                >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="brown" :disabled="!valid" @click="submit" class="white--text mb-1 mr-2">Join    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'Join',
        data() {
            return {
                valid: false,
                email: '',
                password: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v =>  v.length >= 6 || 'Password must be greater than 6 characters'
                ],
                show1: false
            }
        },
        methods: {
            async submit() {
                if(this.$refs.form.validate()) {
                    try {
                        await this.userJoin();
                        this.$router.push('sign-in')
                    } catch(error) { 
                        console.log(error) 
                    }
                }
            },
            userJoin() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            }
        }
    }
</script>

<style scoped>
</style>