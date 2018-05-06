<template>
    <div class="container header header--home">
        <div class="row">
            <div class="container container--boxed">
                <div class="row">
                    
                    <slider ref="flickity" :options="sliderOptions">
                        <div class="slider" v-for="(item, index) in pages[0].acf.header_section" :key="index">
                            <div class="slider__image" :style='{ backgroundImage: "url(" + item.slide_image + ")", }'>
                                <h2 class="slider__title">{{ item.slide_title }}</h2>
                                <button class="slider__button"><a :href="item.slide_button_link">{{ item.slide_button_text }}</a></button>
                            </div>
                            
                        </div>
                    </slider>
                </div>
            </div>
        </div>
        <div v-waypoint="{ active : true, callback : onWaypoint }"></div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Slider from 'vue-flickity';

export default {
    data(){
        return {
            menuScrolled: false,
            sliderOptions: {
                groupCells: 1,
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true
            },
        }
    },
    created() {
        this.getPosts()
    },
    computed: mapState({
        pages: state => state.posts.pages,
    }),
    components: {
       slider: Slider,
    },
    methods: {
    ...mapActions([
      "getPosts"
    ]),
    onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
         
      }
       if (going === this.$waypointMap.GOING_OUT) {
           
       }
    }
  }
}

</script>

<style lang="scss" scoped>
    
</style>

