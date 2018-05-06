<template>
  <nav class="container" :class="{ 'scrolled' : $store.state.scolled }">
      <div class="row">
          <div class="container container--boxed" >
            <ul class="row">
                <li v-for="item in menu" :key="item.id" ><router-link :to='item.url' exact>{{ item.title }}</router-link></li>
                <li class="language-switch"><a href="#">DE</a></li>
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
            ]),
        }
    }
</script>

<style lang="scss" scoped>
    
</style>