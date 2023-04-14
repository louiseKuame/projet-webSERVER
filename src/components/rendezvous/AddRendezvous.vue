<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau rendezvous</h3>

            <form @submit.prevent="addNewRendezvous">
                <div class="mb-3">
                    <label for="nom" class="form-label">nom</label>
                    <input
                        v-model="rendezvous.id"
                        type="text"
                        class="form-control"
                        id="nom"
                        placeholder="Entrer le nom"
                    />
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label"
                        >Description</label
                    >
                    <input
                        v-model="rendezvous.type"
                        type="text"
                        class="form-control"
                        id="description"
                        placeholder="Donner une description"
                    />
                </div>
                
                    
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useRendezvous from "../../services/rendezvousServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addRendezvous } = useRendezvous();
let rendezvous = ref({
    id: "",
    type: "",
    
});
function addNewRendezvous() {
    //Appel de notre route dans le backend (express) pour ajouter un departement
    addRendezvous(rendezvous.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau rendezvous", res);
            //On va etre redirige vers la table des rendezvous
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>