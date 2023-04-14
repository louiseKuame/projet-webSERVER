<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Mise a jour d'un rendezvous</h3>

            <form @submit.prevent="updateARendezvous">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input
                        v-model="rendezvous.id"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>

                <div class="mb-3">
                    <label for="type" class="form-label"
                        >Description</label
                    >
                    <input
                        v-model="departement.type"
                        type="text"
                        class="form-control"
                        id="description"
                        placeholder="Donner une description"
                    />
                </div>
                
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useRendezvous from "../../services/rendezvousServices";
import { useRouter, useRoute } from "vue-router";

// La fonction pour rediriger vers une autre page
const router = useRouter();

//Fonction pour recuperer l'id passe en parametre
const route = useRoute();

//L'id du departement que l'on doit mettre a jour
const id = route.params.id;

const { updateRendezvous, getRendezvousById } = useRendezvous();
let rendezvous = ref({
    id: "",
    type: "",
    
});

function updateARendezvous() {
    updateRendezvous(rendezvous.value)
        .then((res) => {
            console.log("rendezvous mis a jour", res);
            router.push("/")
        .catch((err) =>console.log("Erreur lors de la mise a jour du rendezvous", err));
        })
}

onBeforeMount(() => {
    //On charge les valeurs precedentes du rendezvous avant l'affichage a l'ecran
    if (id) {
        getRendezvousById(id)
            .then((res) => {rendezvous.value = res.data})
            .catch((err) =>console.log("Erreur lors de la lecture du departement", err))
    }
})
</script>

<style lang="scss" scoped>
</style>