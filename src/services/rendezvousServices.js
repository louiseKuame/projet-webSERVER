import axios from 'axios'
const useRendezvous = () => {

    async function getRendezvousList() {
        const resultat = await axios.get('http://localhost:5002/rendezvous')
        return resultat.data

    }

    async function addRendezvous(rendezvous) {
        const resultat = await axios.post('http://localhost:5002/rendezvous', rendezvous)
        return resultat

    }

    async function updateRendezvous(id, updatedRendezvous) {
        const resultat = await axios.put(`http://localhost:5002/rendezvous/${id}`, updatedRendezvous)
        return resultat

    }

    async function deleteRendezvous(id) {
        const resultat = await axios.delete(`http://localhost:5002/rendezvous/${id}`)
        return resultat

    }

    async function getRendezvousById(id) {
        const resultat = await axios.get(`http://localhost:5002/rendezvous/${id}`)
        return resultat.data

    }


    return { getRendezvousList, addRendezvous, updateRendezvous, deleteRendezvous, getRendezvousById }

}

export default useRendezvous