import Vapi from "vuex-rest-api"

const taste = new Vapi({
  baseURL: "http://localhost:8888/wp-json/wp/v2",
  state: {
    taste: []
  }
})
.get({
  action: "getPosts",
  property: "taste",
  path: "/taste"
})
.getStore()


export default taste