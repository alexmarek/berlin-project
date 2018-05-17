<template>
    <div>
        <div class="container header header--home">
            <div class="row">
                        
                <slider v-if="Object.keys(pages[1].acf.header_section).length > 0" ref="flickity" :options="sliderOptions">
                    <div class="slider" v-for="(item, index) in pages[1].acf.header_section" :key="index">
                        <div class="slider__image" :style='{ backgroundImage: "url(" + item.slide_image + ")", }'>
                            <div class="container container--boxed">
                                <div class="row">
                                    <h2 class="slider__title">{{ item.slide_title }}</h2>
                                    <router-link class="button slider__button" :to="item.slide_button_link">
                                        {{ item.slide_button_text }}
                                        <img :src="arrowBlack" :alt="item.slide_button_text" :title="item.slide_button_text"/>
                                    </router-link>
                                </div>
                            </div>
                        </div> 
                    </div>
                </slider>

            </div>
            <div v-waypoint="{ active : true, callback : onWaypoint }"></div>
        </div>
        <div class="container black-box">
            <div class="row">
                <div class="container--boxed content-item ">
                    <div v-if="Object.keys(pages[1].acf.content).length > 0" class="row" v-for="(item, index) in pages[1].acf.content" :key="index">
                        <div class="col-md-6 d-flex align-items-center">
                            <h3>{{ item.heading }}</h3>
                        </div>
                        <div class="col-md-6 d-flex align-items-center">
                            <p v-html="item.content"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Slider from 'vue-flickity';
import arrowBlack from '../assets/images/arrow-black.svg'

export default {
    data(){
        return {
            menuScrolled: false,
            arrowBlack: arrowBlack,
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
        pages: state => state.posts.pages
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

