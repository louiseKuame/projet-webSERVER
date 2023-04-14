<template>
    <div>
        <!-- <div v-for="rendezvous in rendezvous" :key="rendezvous.id">
            <Rendezvous :rendezvous="rendezvous" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>types</td>
                    
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="rendezvous in rendezvous" :key="rendezvous.id">
                    <td>{{ rendezvous.id }}</td>
                    <td>{{ rendezvous.type }}</td>
                    
                    <td>
                        <button class="btn btn-danger" @click="removeRendezvous(rendezvous.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-rendezvous/${rendezvous.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-rendezvous')" class="btn btn-primary">
                Add new rendezvous
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Rendezvous from "./Rendezvous.vue";
import useRendezvous from "../../services/rendezvousServices";
import { useRouter } from "vue-router";

const { getRendezvousList, deleteRendezvousList } = useRendezvous();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des departements venant de la base de donnee
let rendezvous = ref([]);

const removeRendezvous = (id) => {
    //Appel de la route de suppression d'un departement (depuis express)
    deleteRendezvous(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des departements pour raffraichir l'ecran
            console.log("Rendezvous supprime");

            //Lecture de la liste complete depuis express
            getRendezvousList()
                .then((res) => {
                    console.log("Les resultats", res);
                    rendezvous.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des rendezvous", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du rendezvous", err)
        );
};

// Cette fonction permet de charger la liste des departements avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des departements depuis le backend (express)
    getRendezvousList()
        .then((res) => {
            console.log("Les resultats", res);
            rendezvous.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des rendezvous", err))
});
</script>

<style lang="scss" scoped>
</style>