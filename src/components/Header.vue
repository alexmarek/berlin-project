<template>
  <nav class="container">
      <div class="row">
          <div class="container container--boxed">
            <ul class="row">
                <li v-for="item in menu" :key="item.id" ><router-link :to='item.url' exact>{{ item.title }}</router-link></li>
            </ul>
          </div>
      </div>
  </nav>
</template>

<script>
    import { mapState, mapActions } from  'vuex'
        export default {
        created() {
            this.getMenu() 
        },
        computed: mapState({
            menu: state => state.menu.menu,
        }),
        methods: {
            ...mapActions([
            "getMenu"
            ])
        }
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