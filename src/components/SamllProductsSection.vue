<template>
    <template v-for="product in smproducts" :key="product">
        <div 
        :class="{ 
        'w-bg-[#0096df]': product.slug == 'lcs', 
        'w-bg-[#f0d500]': product.slug == 'vc', 
        'w-bg-[#e50012]': product.slug == 'dc' }">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                :pagination="pagination"
                class="w-container w-mx-auto w-flex <sm:w-pb-5"
                :id="product.slug"
            >
                <template v-for="(slide, key) in product.slides" :key="slide">
                <swiper-slide class="!w-h-auto">
                    <div 
                    :class="[product.slug == 'vc' ? 'w-text-black' : 'w-text-white']"
                    class="w-flex <sm:w-flex-col">
                    <div class="sm:w-w-3/5 <sm:w-order-last w-flex w-flex-col w-justify-center w-p-10 sm:w-p-20">
                        <div>
                        <!--文字內容-->
                        <h2 v-if="key == 0" v-html="product.title" class="sm:w-mb-8 <sm:(w-text-xl w-text-center)"></h2>
                        <h4 class="<sm:(w-text-base w-text-center)">{{ slide.title }}</h4>
                            <p 
                            v-for="(p,key) in slide.paragragh" :key="p"
                            v-html="p" 
                            :class="{ 'w-mb-0' : key+1 == slide.paragragh.length }"
                            class="w-mb-1 w-text-justify sm:w-text-lg">
                            </p>
                            <div v-if="key == product.slides.length - 1" class="<sm:w-text-center">
                            <a
                            :class="{ 'w-bg-white': product.slug == 'lcs' }"
                            class="
                                w-inline-block w-border-1 w-border-solid
                                sm:(w-py-2 w-px-6 w-text-xl w-mt-6)
                                w-py-1 w-px-3 w-text-base w-mt-4
                                w-transition-all
                                w-rounded-full
                                hover:w-bg-white
                            "
                            :href="product.url"
                            >瞭解更多</a
                            >
                            </div>
                        </div>
                    </div>
                    <div class="sm:w-w-2/5">
                        <!--圖片-->
                        <div class="w-aspect-w-4 w-aspect-h-3 sm:(w-aspect-w-1 w-aspect-h-1.3)">
                        <img
                        class="w-object-cover"
                        :src="getSrc(slide.image)"
                        />
                        </div>
                    </div>
                    </div>
                </swiper-slide>
                </template>
                <div class="
                fmswiper 
                w-w-full 
                bottom-5
                sm:(!w-w-3/5 !left-0 !bottom-12) 
                w-absolute w-text-center w-transition-opacity w-z-10"></div>
            </swiper>
        </div>
        <Marquee img="fm_sec5_sign.png" />
    </template>
</template>
<script setup>
//Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([EffectFade, Pagination]);

//component
import Marquee from "./Marquee.vue";

//DB
import DB from "../db/db.json";

</script>
<script>
export default {
  component: {
    Swiper,
    SwiperSlide,
    Marquee
  },
  data: function () {
    return {
      pagination: {
        clickable: true,
        bulletClass : 'fmswiper-bullet',
        bulletActiveClass : 'fmswiper-bullet-active w-bg-white',
        el:'.fmswiper',
        renderBullet: function (index, className) {
          return `
          <span class="
          w-border-1 w-border-solid w-rounded-full w-cursor-pointer w-inline-block
          w-text-lg w-w-[25px] w-h-[25px] w-mx-2 w-leading-[25px]
          sm:(w-text-3xl w-w-[40px] w-h-[40px] w-mx-4 w-leading-[40px])
          hover:w-bg-white 
          w-transition-all 
          ${className}">${index + 1}</span>`
        },
      },
      smproducts: DB.smproducts
    };
  },
};
</script>
<style>
/*
.swiper-fade .swiper-slide{opacity:0!important;}
.swiper-fade .swiper-slide-active{opacity:1!important;}
*/

</style>
