import home from './components/Home.vue'
import grow from './components/Grow.vue'
import taste from './components/Taste.vue'
import impact from './components/Impact.vue'
import findUs from './components/FindUs.vue'
import contact from './components/Contact.vue'

export default [
    {path: '/', component: home},
    {path: '/grow', component: grow},
    {path: '/taste', component: taste},
    {path: '/impact', component: impact},
    {path: '/find-us', component: findUs},
    {path: '/contact', component: contact},
]