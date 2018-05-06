<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/Home.vue'
import products from './components/Products.vue'
import locations from './components/Locations.vue'
import concept from './components/Concept.vue'
import mission from './components/Mission.vue'
import contact from './components/Contact.vue'
import menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    home,
    products,
    locations,
    concept,
    mission,
    contact,
    appMenu : menu,
  },
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

@import './assets/scss/main'

</style>
