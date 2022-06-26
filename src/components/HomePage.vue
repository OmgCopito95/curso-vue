<template>
    <div>
        <h1> Hola Mundo </h1>

        <HelloWorldVue />
    </div>

</template>

<script>

import HelloWorldVue from './HelloWorld.vue'
export default {
    name: 'HomePage',
    components: { // <-- Componentes que se usan en el componente
        HelloWorldVue,
    },
}

</script>