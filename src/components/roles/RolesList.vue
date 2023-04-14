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
                <tr v-for="role in roles" :key="role.id">
                    <td>{{ role.id }}</td>
                    <td>{{ role.nom }}</td>
                    
                    <td>
                        <button class="btn btn-danger" @click="removeRole(role.id)">
                            Delete
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-success" @click=" router.push(`/mise-a-jour-role/${role.id}` )">
                            Update
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="router.push('/nouveau-role')" class="btn btn-primary">
                Add new role
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import Role from "./Roles.vue";
import useRole from "../../services/roleServices";
import { useRouter } from "vue-router";

const { getRoleList, deleteRole } = useRole();

//Fonction utilisee pour la redirection
const router = useRouter();

// Variable pour contenir la liste des roles venant de la base de donnee
let roles = ref([]);

const removeRole = (id) => {
    //Appel de la route de suppression d'un role (depuis express)
    deleteRole(id)
        .then((res) => {
            //Si tout se passe bien, on recharge la liste complete des roles pour raffraichir l'ecran
            console.log("Role supprime");

            //Lecture de la liste complete depuis express
            getRoleList()
                .then((res) => {
                    console.log("Les resultats", res);
                    roles.value = res.data;
                })
                .catch((err) =>console.log("Il ya erreur de lectures des roles", err));
        })
        .catch((err) =>
            console.log("Erreur lors de la suppression du role", err)
        );
};

// Cette fonction permet de charger la liste des roles avant que la page n'apparait a l'ecran
onBeforeMount(() => {
    //Chargement de la liste des roles depuis le backend (express)
    getRoleList()
        .then((res) => {
            console.log("Les resultats", res);
            roles.value = res.data;
        })
        .catch((err) =>console.log("Il y a erreur de lectures des roles", err))
});
</script>

<style lang="scss" scoped>
</style>