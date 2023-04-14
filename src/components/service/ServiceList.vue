<template>
    <div>
        <!-- <div v-for="role in roles" :key="role.id">
            <role :role="role" />
        </div> -->
        <table border="2px" class="table table-striped">
            <thead>
                <tr>
                    <td>id</td>
                    <td>Nom</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in services" :key="service.id">
                    <td>{{ service.id }}</td>
                    <td>{{ service.nom }}</td>
                    
                    <td>
                        <button class="btn btn-danger" @click="removeService(service.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-role/${service.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-service')" class="btn btn-primary">
                Add new service
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Service from "./Services.vue";
import useService from "../../services/serviceServices";
import { useRouter } from "vue-router";

const { getServiceList, serviceRole } = useService();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des roles venant de la base de donnee
let services = ref([]);

const removeService = (id) => {
    //Appel de la route de suppression d'un role (depuis express)
    deleteService(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des services pour raffraichir l'ecran
            console.log("Service supprime");

            //Lecture de la liste complete depuis express
            getServiceList()
                .then((res) => {
                    console.log("Les resultats", res);
                    services.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des roles", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du role", err)
        );
};

// Cette fonction permet de charger la liste des services avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des services depuis le backend (express)
    getServiceList()
        .then((res) => {
            console.log("Les resultats", res);
            roles.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des services", err))
});
</script>

<style lang="scss" scoped>
</style>