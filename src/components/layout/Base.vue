<template>
    <v-app>

        <Navegador />
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
    import Navegador from './Navegador.vue';

    export default {
        name: 'App',

        components: {
            Navbar,
            Navegador
        },

        data: () => ({
            //
        }),
    };
</script>
