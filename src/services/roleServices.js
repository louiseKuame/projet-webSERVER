import axios from 'axios'
const useRole = () => {

    async function getRoleList() {
        const resultat = await axios.get('http://localhost:5002/role')
        return resultat.data

    }

    async function addRole(role) {
        const resultat = await axios.post('http://localhost:5002/role', role)
        return resultat

    }

    async function updateRole(id, updatedRole) {
        const resultat = await axios.put(`http://localhost:5002/role/${id}`, updatedRole)
        return resultat

    }

    async function deleteRole(id) {
        const resultat = await axios.delete(`http://localhost:5002/role/${id}`)
        return resultat

    }

    async function getRoleById(id) {
        const resultat = await axios.get(`http://localhost:5002/role/${id}`)
        return resultat.data

    }


    return { getRoleList, addRole, updateRole, deleteRole, getRoleById }

}

export default useRole