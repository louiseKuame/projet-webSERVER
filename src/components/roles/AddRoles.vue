<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau role</h3>

            <form @submit.prevent="addNewRole">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="role.nom"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useRole from "../../services/roleServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addRole } = useRole();
let role = ref({
    nom: "",
    
});
function addNewRole() {
    //Appel de notre route dans le backend (express) pour ajouter un role
    addRole(role.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau role", res);
            //On va etre redirige vers la table des roles
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>