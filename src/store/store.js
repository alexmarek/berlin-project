import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./posts"
import menu from "./menu"

Vue.use(Vuex)

export const state = {
    count: 0,
    scrolled: false
  }
  
  export const mutations = {
    
  }
  
  const store = new Vuex.Store({
    state,
    mutations,
    modules: {
      posts,
      menu
    }
  })
  
  export default store