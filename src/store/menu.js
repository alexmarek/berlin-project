import Vapi from "vuex-rest-api"

const menu = new Vapi({
  baseURL: "http://localhost:8888/wp-json/myroutes/menu",
  state: {
    menu: []
  }
})
.get({
  action: "getMenu",
  property: "menu",
  path: "/"
})
.getStore()


export default menu