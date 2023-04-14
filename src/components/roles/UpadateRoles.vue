<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un role</h3>

            <form @submit.prevent="updateARole">
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
import { onBeforeMount, ref } from "vue";
import useRole from "../../roles/rolesServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateRole, getRoleById } = useRole();
let role = ref({
    nom: "",
    
});

function updateARole() {
    updateARole(role.value)
        .then((res) => {
            console.log("Role mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour du role", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du role avant l'affichage a l'ecran
    if (id) {
        getRoleById(id)
            .then((res) => {role.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du role", err))
    }
})
</script>

<style lang="scss" scoped>
</style>