<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un service</h3>

            <form @submit.prevent="updateAService">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="service.nom"
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

//L'id du service que l'on doit mettre a jour
const id = route.params.id;

const { updateService, getServiceById } = useService();
let role = ref({
    nom: "",
    
});

function updateAService() {
    updateAService(service.value)
        .then((res) => {
            console.log("Service mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour du service", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du role avant l'affichage a l'ecran
    if (id) {
        getServiceById(id)
            .then((res) => {role.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du service", err))
    }
})
</script>

<style lang="scss" scoped>
</style>