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
                        <div class="col-md-6 d-flex align-items-start">
                            <h3>{{ item.heading }}</h3>
                        </div>
                        <div class="col-md-6 d-flex align-items-start">
                            <p v-html="item.content"></p>
                        </div>
                        <div class="col-md-6 offset-md-6" >
                            <span class="content-item__icons" v-for="(item, id) in pages[1].acf.icons" :key="id">
                                <img :src="item.icon" />
                                <h5>{{ item.title }}</h5>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container taste-box">
            <div class="row">
                <div class="container--boxed content-item">
                    <div class="row" v-for="(item, index) in pages[1].acf.taste_home" :key="index">
                        <h3 class="col-md-6" > {{ item.title }} </h3>
                        <div class="col-md-6"></div>
                    </div>
                    <slider ref="flickity" :options="tasteSliderOptions">
                        <div class="slider slider--home-taste" v-for="(slider, index) in pages[1].acf.taste_home[0].taste_selector" :key="index">
                            <div class="slider__image">
                                <div class="container container--boxed">
                                    <div class="row">
                                        <h2 class="slider__title">{{ slider.post_title }}</h2>
                                        
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </slider>
                    <router-link class="button black__button" :to="item.button_link" v-for="(item, index) in pages[1].acf.taste_home" :key="index">
                        {{ item.button_text }}
                    </router-link>
                </div>
            </div>
        </div>
         <div class="container how-box">
            <div class="row">
                <div class=" content-item">
                    <div class="row" v-for="(item, index) in pages[1].acf.box" :key="index">
                        <div class="col-md-6 background-black" >
                            <h3> {{ item.box_title }} </h3>
                            <p> {{ item.box_text }} </p>
                            <router-link class="button white__button" :to="item.box_button_link">
                                {{ item.box_button_text }}
                            </router-link>
                        </div>
                        <div class="col-md-6"></div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <cookie-law class="cookie-notice">
                <div slot="message" class="cookie-notice__text">
                    This website uses cookies to ensure you get the best experience on our website. <router-link to="legal">Learn more</router-link>
                </div>
            </cookie-law>
        </footer>
    </div>    
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Slider from 'vue-flickity';
import CookieLaw from 'vue-cookie-law'

export default {
    data(){
        return {
            menuScrolled: false,
            isReady: false,
            sliderOptions: {
                groupCells: 1,
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true
            },
            tasteSliderOptions: {
                groupCells: 3,
                prevNextButtons: true,
                pageDots: false,
                freeScroll: true,
                wrapAround: false
            },
        }
    },
    created() {
        this.getPosts(), 
        this.isReady = true
    },
    computed: mapState({
        pages: state => state.posts.pages
    }),
    components: {
       slider: Slider,
       CookieLaw,
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

