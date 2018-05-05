<template>
    <div class="container header header--home">
        <div class="row">
            <div class="container container--boxed">
                <div class="row">
                    <div class="col-sm ">
                        <b-button variant="outline-success">Find Out More</b-button>
                        <h2 v-for="item in title" :key="item.id" v-html="item"></h2>
                        <p v-for="item in content" :key="item.id" v-html="item"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getPosts()
  },
  computed: mapState({
    content: state => state.posts.pages[0].content,
    title: state => state.posts.pages[0].title,
  }),
  methods: {
    ...mapActions([
      "getPosts"
    ])
  }
}

</script>

<style lang="scss" scoped>
    .header {
        &--home {
            height: 810px;
            background-color: limegreen;
        }
        h1 {
            font-size: 4em;
            font-weight: bold;
            line-height: 1;
            letter-spacing: 0.5px;
            text-align: left;
            color: white;
            max-width: 750px;
        }
    }
</style>

