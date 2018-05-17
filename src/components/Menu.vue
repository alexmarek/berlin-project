<template>
  <nav class="container" :class="{ 'scrolled' : $store.state.scolled, 'black-menu' : $store.state.blackMenuText }">
      <div class="row">
          <div class="container container--boxed" >
            <ul class="row">
                <li class="main-logo">
                    <router-link to="/" @click.native="$store.state.blackMenuText = false">
                        <img v-if="$store.state.blackMenuText" :src="logoBlack" alt="Infarm Logo" title="Back to Infarm Homepage"/>
                        <img v-if="!$store.state.blackMenuText" :src="logoWhite" alt="Infarm Logo" title="Back to Infarm Homepage"/> 
                    </router-link>
                </li>
                <li v-for="item in menu" :key="item.id" ><router-link @click.native="menuColor(item)" :to='item.url' exact>{{ item.title }}</router-link></li>
            </ul>
          </div>
          <div class="language-switch">
              <a href="#">DE <img :src="chevronDown" alt="switch language" title="Switch Language"/> </a>
          </div>
      </div>
  </nav>
</template>

<script>
    import { mapState, mapActions } from  'vuex'
    import logoWhite from '../assets/images/infarm-logo-white.svg'
    import logoBlack from '../assets/images/infarm-logo-black.svg'
    import chevronDown from '../assets/images/chevron-white.svg'
        export default {
        data () {
            return {
                logoWhite: logoWhite,
                logoBlack: logoBlack,
                chevronDown: chevronDown
            }
        },
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
            menuColor: function (item) {
                if (item.classes[0] == 'black-menu-text'){
                    this.$store.state.blackMenuText = true;
                } else  {
                    this.$store.state.blackMenuText = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>