<template>
    <v-app>

        <Navegador />
        <Navbar />

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <Footer />
    </v-app>

</template>

<script>
import Navbar from './Navbar.vue';
import Navegador from './Navegador.vue';
import Footer from './Footer.vue';

export default {
    name: 'App',

    components: {
        Navbar,
        Navegador,
        Footer
    },

    data: () => ({
        //
    }),
};
</script>
