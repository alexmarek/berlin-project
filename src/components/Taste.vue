<template>
  <div>
      <div class="container header header--boxed header--taste">
            <div class="row">
                        
                <div class="col-sm-12 header__content header__content header--taste__content container--boxed content-item content-item--taste">
                  <div class="row" v-if="Object.keys(tastePage[0].acf.content).length > 0" v-for="(item, index) in tastePage[0].acf.content" :key="index">
                    <div class="col-md-5 d-flex align-items-center">
                        <h3>{{ item.heading }}</h3>
                    </div>
                    <div class="col-md-7 d-flex align-items-center">
                        <span v-html="item.content"></span>
                    </div>
                  </div>
                </div>
                    
            </div>
        </div>

        <div class="container ">
            <div class="row">
                        
                <div class="col-sm-12 container--boxed">
                  <div v-if="Object.keys(tastePage[0].acf.taste_selection).length > 0" class="row" v-for="(item, index) in tastePage[0].acf.taste_selection" :key="index">
                    <div class="col-md-5 d-flex align-items-center">
                        <h3>{{ item.post_title }}</h3>
                    </div>
                    <div class="col-md-7 d-flex align-items-center">
                        <span v-html="item.guid"></span>
                    </div>
                  </div>
                </div>
                    
            </div>
        </div>
  </div>
</template>

<script>
  
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState({
        tastePage: state => state.posts.pages
    }),
    created() {
        this.getPosts()
    },
    methods: {
      ...mapActions([
        "getPosts"
      ]),
    }
  }
  
</script>