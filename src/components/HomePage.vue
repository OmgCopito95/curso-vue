<template>
    <div>
        <h1> Hola Universo </h1>
        <h1> Hola {{ nombreCompleto }}</h1>
        <!-- <h1> Hola {{ auth }}</h1> -->

        <button @click="mostrarDatos">Mostrar nombre</button>


        <!-- DIRECTIVAS -->
        <h2 v-for="user in usuarios" v-bind:key="user">{{user}}</h2>
        <h2 v-if="nombre == 'Pedro'">Holaaaaa Pedro</h2>
        <!-- ---------- -->


        <HelloWorldVue />
    </div>

</template>

<script>

import HelloWorldVue from './HelloWorld.vue'
export default {
    name: 'HomePage',

    //------- PROPIEDADES ----------

    props: ["auth"], // Propiedades que se pueden pasar desde afuera

    components: {
        HelloWorldVue,
    }, // <-- Componentes que se usan en el componente

    data: () => ({ //VARIABLES LOCALES DEL COMPONENTE
        nombre: "Pedro",
        apellido: "Gomez",
        edad: "25",
        usuarios: ['Juan', 'Pedro', 'Maria', 'Juana'],
    }), // <-- Datos que se usan en el componente

    mounted() {
        // Se ejecuta cuando el componente se carga
        console.log('Componente cargado');
    },

    methods: {
        mostrarDatos() {
            this.mostrarNombre()
            this.setNombre("Juan");
            console.log(this.nombre);
        },
        mostrarNombre() {
            console.log(this.nombre)
            console.log(this.auth)
        },
        mostrarApellido() {
            console.log(this.apellido)
        },
        mostrarEdad() {
            console.log(this.edad)
        },
        mostrarUsuarios() {
            console.log(this.usuarios)
        },
        setNombre(nombre) {
            this.nombre = nombre
        },

    }, // <-- Metodos que se usan en el componente

    computed: {
        nombreCompleto() {
            return this.nombre + ' ' + this.apellido
        }
    },
    watch: { // cuando cambia un atributo del componente se ejecuta esta funcion
        nombre() {
            console.log('Cambio en el nombre');
        }
    },


}

</script>