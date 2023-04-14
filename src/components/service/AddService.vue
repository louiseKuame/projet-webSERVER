<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title mb-3">Ajout d'un nouveau service</h3>

            <form @submit.prevent="addNewRole">
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
import { ref } from "vue";
import useService from "../../services/serviceServices";
import { useRouter } from "vue-router";

// Cette fonction est utilisee pour rediriger vers une page
const router = useRouter();

const { addService } = useService();
let role = ref({
    nom: "",
    
});
function addNewService() {
    //Appel de notre route dans le backend (express) pour ajouter un service
    addService(service.value)
        .then((res) => {
            //Si tout se passe bien ce message apparait dans la console
            console.log("Nouveau service", res);
            //On va etre redirige vers la table des services
            router.push("/");
        })
        .catch((err) => console.log("Erreur lors de l'ajout", err));
}
</script>

<style lang="scss" scoped>
</style>