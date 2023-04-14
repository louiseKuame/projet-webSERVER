import axios from 'axios'
const useService = () => {

    async function getServiceList() {
        const resultat = await axios.get('http://localhost:5002/service')
        return resultat.data

    }

    async function addService(service) {
        const resultat = await axios.post('http://localhost:5002/role', service)
        return resultat

    }

    async function updateService(id, updatedService) {
        const resultat = await axios.put(`http://localhost:5002/role/${id}`, updatedService)
        return resultat

    }

    async function deleteService(id) {
        const resultat = await axios.delete(`http://localhost:5002/service/${id}`)
        return resultat

    }

    async function getServiceById(id) {
        const resultat = await axios.get(`http://localhost:5002/service/${id}`)
        return resultat.data

    }


    return { getServiceList, addService, updateService, deleteService, getServiceById }

}

export default useService