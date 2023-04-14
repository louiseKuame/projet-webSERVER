<template>
    <div>
        <p>Nom: {{ rendezvous.id }}</p>
        <p>type: {{ rendezvous.type }}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Nous allons utiliser les props pour passer l'element courant de la liste a notre composant
const props = defineProps({
    rendezvous: {
        type: Object,
        default: () => ({
            nom: "",
            type: "",
            
        }),
    },
});
</script>

<style lang="scss" scoped>
</style>