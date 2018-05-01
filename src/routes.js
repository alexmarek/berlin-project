import home from './components/Home.vue'
import products from './components/Products.vue'
import locations from './components/Locations.vue'
import concept from './components/Concept.vue'
import mission from './components/Mission.vue'
import contact from './components/Contact.vue'

export default [
    {path: '/', component: home},
    {path: '/products', component: products},
    {path: '/locations', component: locations},
    {path: '/concept', component: concept},
    {path: '/mission', component: mission},
    {path: '/contact', component: contact},
]