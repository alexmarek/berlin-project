<template>
  <nav class="container">
      <div class="row">
          <div class="container container--boxed">
            <ul class="row">
                <li><router-link to='/' exact>Home</router-link></li>
                <li><router-link to='/products' exact>Products</router-link></li>
                <li><router-link to='/locations' exact>Locations</router-link></li>
                <li><router-link to='/concept' exact>Concept</router-link></li>
                <li><router-link to='/mission' exact>Mission</router-link></li>
                <li><router-link to='/contact' exact>Contact</router-link></li>
            </ul>
          </div>
      </div>
  </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    nav {
        a {
            text-transform: uppercase;
            &.router-link-exact-active {
                text-decoration: underline;
            }
        }
    }
    
</style>