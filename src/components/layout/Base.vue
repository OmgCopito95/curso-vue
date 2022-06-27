<template>
    <v-app>
        <v-navigation-drawer app>
            <!-- -->
        </v-navigation-drawer>

        <Navbar />

        
        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>

</template>

<script>
    import Navbar from './Navbar.vue';
    export default {
        name: 'App',

        components: {
            Navbar
        },

        data: () => ({
            //
        }),
    };
</script>
