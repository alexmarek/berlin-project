import Vapi from "vuex-rest-api"

const pages = new Vapi({
  baseURL: "http://localhost:8888/wp-json/wp/v2",
  state: {
    pages: []
  }
})
.get({
  action: "getPosts",
  property: "pages",
  path: "/pages"
})
.getStore()


export default pages