<template>
  <div id="app">
    <app-header></app-header>
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
import header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    home,
    products,
    locations,
    concept,
    mission,
    contact,
    appHeader : header,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

$white : #f6f6f6;

@font-face {
  font-family: 'FedraSansStd';
  src: url('./assets/fonts/FedraSansStd-Light.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'FedraSansStd';
  src: url('./assets/fonts/FedraSansStd-Bold.otf') format('opentype');
  font-weight: 800;
  font-style: normal;
}

#app {
  font-family: 'FedraSansStd', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .container {
    max-width: 100%;

    &--boxed {
      max-width: 1440px;
    }
  }
  button.btn-outline-success {
    color: $white;
    border: solid 2px $white;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.8em;
    background-color: transparent;
    &:not(:disabled):not(.disabled):active, &:not(:disabled):not(.disabled):focus{
      box-shadow: none;
    }
  }
}



h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 5px;
  }
}

a {
  color: #000;
}
</style>
