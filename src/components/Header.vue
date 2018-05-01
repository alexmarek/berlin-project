<template>
  <nav>
      <ul>
          <li><router-link to='/products' exact>Products</router-link></li>
          <li><router-link to='/locations' exact>Locations</router-link></li>
          <li><router-link to='/concept' exact>Concept</router-link></li>
          <li><router-link to='/mission' exact>Mission</router-link></li>
          <li><router-link to='/contact' exact>Contact</router-link></li>
      </ul>
  </nav>
</template>

<script>
    export default {

    }
</script>

<style <style lang="scss" scoped>
    .router-link-exact-active {
        text-decoration: underline;
    }
</style>