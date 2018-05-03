import Vapi from "vuex-rest-api"

const posts = new Vapi({
  baseURL: "http://localhost:8888/wp-json/wp/v2",
  state: {
    posts: []
  }
})
  .get({
    action: "getPosts",
    property: "posts",
    path: "/pages"
  })
  .getStore()


export default posts