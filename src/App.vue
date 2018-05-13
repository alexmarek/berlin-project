<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './components/Home.vue'
import grow from './components/Grow.vue'
import taste from './components/Taste.vue'
import impact from './components/Impact.vue'
import findUs from './components/FindUs.vue'
import contact from './components/Contact.vue'
import menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    home,
    grow,
    taste,
    impact,
    findUs,
    contact,
    appMenu : menu,
  },
  data () {
    return {
      
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">

@import './assets/scss/main'

</style>
