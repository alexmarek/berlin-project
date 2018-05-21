<template>
  <nav class="container" id="navigation" :class="{ 'black-menu' : $store.state.blackMenuText }" :bind="stickyNav()">
      <div class="row">
          <div class="container container--boxed" >
            <ul class="row">
                <li class="main-logo">
                    <router-link to="/" @click.native="$store.state.blackMenuText = false">
                        Infarm
                    </router-link>
                </li>
                <li v-for="item in menu" :key="item.id" ><router-link @click.native="menuColor(item)" :to='item.url' exact>{{ item.title }}</router-link></li>
            </ul>
          </div>
          <div class="language-switch">
              <a href="#">DE</a>
          </div>
      </div>
  </nav>
</template>

<script>
    import { mapState, mapActions } from  'vuex'
        export default {
        data () {
            return {
            }
        },
        created() {
            this.getMenu();
        },
        computed: mapState({
            menu: state => state.menu.menu,
        }),
        methods: {
            ...mapActions([
            "getMenu"
            ]),
            menuColor: function (item) {
                if (item.classes[0] == 'black-menu-text'){
                    this.$store.state.blackMenuText = true;
                } else  {
                    this.$store.state.blackMenuText = false;
                }
            },
            stickyNav: function(){
                function stickyNavigation() {
                    if (window.scrollY >= 200) {
                        document.body.classList.add('fixed-nav');
                    } else {
                        document.body.classList.remove('fixed-nav');
                    }
                }
                window.addEventListener('scroll', stickyNavigation);
            }
        },
    }
</script>

<style lang="scss" scoped>
    
</style>