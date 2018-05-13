import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./posts"
import menu from "./menu"
import taste from "./taste"

Vue.use(Vuex)

export const state = {
    count: 0,
    scrolled: false,
    blackMenuText: false
  }
  
  export const mutations = {
    
  }
  
  const store = new Vuex.Store({
    state,
    mutations,
    modules: {
      posts,
      menu,
      taste
    }
  })
  
  export default store