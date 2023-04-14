import { createRouter, createWebHistory } from 'vue-router'
import DepartmentList from '../components/departments/DepartmentList.vue'
import AddDepartment from '../components/departments/AddDepartment.vue'
import UpdateDepartment from '../components/departments/UpdateDepartment.vue'

import RendezvousList from '../components/rendezvous/RendezvousList.vue'
import AddRendezvous from '../components/rendezvous/AddRendezvous.vue'
import UpdateRendezvous from '../components/rendezvous/UpdateRendezvous.vue'

import RoleList from '../components/roles/RoleList.vue'
import AddRole from '../components/Roles/AddRole.vue'
import UpdateRole from '../components/roles/UpdateRole.vue'

import ServiceList from '../components/services/ServiceList.vue'
import AddService from '../components/services/AddService.vue'
import UpdateService from '../components/services/UpdateService.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DepartmentList
    },
    {
      path: '/nouveau-departement',
      name: 'nouveau',
      component: AddDepartment
    },

    {
      path: '/mise-a-jour-departement/:id',
      name: 'mise-a-jour',
      component: UpdateDepartment
    },

  

    {
      path: '/',
      name: 'home',
      component: RendezvousList
    },

    {
      path: '/nouveau-Rendezvous',
      name: 'nouveau',
      component: AddRendezvous
    },

    {
      path: '/mise-a-jour-rendezvous/:id',
      name: 'mise-a-jour',
      component: UpdateRendezvous
    },

    {
      path: '/',
      name: 'home',
      component: RoleList
    },
    
    {
      path: '/nouveau-role',
      name: 'nouveau',
      component: AddRole
    },

    {
      path: '/mise-a-jour-role/:id',
      name: 'mise-a-jour',
      component: UpdateRole
    },

    
    {
      path: '/',
      name: 'home',
      component: ServiceList
    },
    
    {
      path: '/nouveau-service',
      name: 'nouveau',
      component: AddService
    },

    {
      path: '/mise-a-jour-service/:id',
      name: 'mise-a-jour',
      component: UpdateService
    },

    
    {
      path: '/',
      name: 'home',
      component: UserList
    },
    
    {
      path: '/nouveau-User',
      name: 'nouveau',
      component: AddUser
    },

    {
      path: '/mise-a-jour-User/:id',
      name: 'mise-a-jour',
      component: UpdateUser
    },

    
    {
      path: '/utilisateurs',
      name: 'utilisateurs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
