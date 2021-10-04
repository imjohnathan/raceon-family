<template>
<div class="w-bg-[#b8daea] w-overflow-hidden">
   <Marquee img="fm_sec7_logo.png" class="w-py-6 sm:w-py-12" />
   <div class="w-max-w-screen-lg w-px-4 w-mx-auto
   <sm:(w-flex w-flex-nowrap w-space-x-4 w-overflow-x-auto) 
   sm:(w-grid w-grid-cols-3 w-gap-x-6 w-gap-y-10 w-px-6) 
   ">
       <template v-for="(act,key) in activities" :key="act" >
        <div 
        class="<sm:(w-flex-shrink-0) suite-width w-px-8 w-py-6 w-bg-white w-rounded-5xl w-flex w-flex-col">
            <h2 class="w-text-center w-bg-[#b8daea] w-py-2 w-rounded-4xl w-font-normal w-text-xl sm:w-text-2xl">{{act.name}}</h2>
            <div class="w-flex-1">
                <!--icon+說明-->
                    <!--icon-->
                    <div v-html="act.icon" class="w-px-8 w-pb-4">
                    </div>
    
                <div class="w-border-0 w-border-t-1 w-border-solid w-border-[#bababa] w-pt-6">
                    <!--內容-->
                    <p v-html="act.content" class="w-text-justify sm:(w-text-base w-leading-7)"></p>
                </div>
                </div>
            <div>
                <!--建議搭配-->
                <h3 class="w-text-center w-bg-black w-text-white w-py-1 w-rounded-4xl w-font-normal w-text-sm sm:w-text-lg">建議搭配</h3>
                <div class="w-flex w-justify-evenly w-p-4">
                    <div v-for="product in act.products" :key="product" 
                    class="w-max-w-[60px]">
                        <a :href="`#fm_pr${product}`" v-smooth-scroll>
                        <img :src="getSrc(`fm_pr${product}_sm.png`)" />
                        </a>
                        </div>
                </div>
            
            </div>
            </div>
        <div v-if=" key == 2 " class="<sm:w-hidden w-col-span-full w-relative">
        <Marquee img="fm_sec7_logo.png" class="w-w-[100vw] w-ml-[-50vw] w-left-[50.7%]" />
        </div>
        </template>
    </div>
      <Marquee img="fm_sec7_logo.png" class="w-py-6 sm:w-py-12" />
 </div>   
</template>
<script setup>
import DB from "../db/db.json";
import Marquee from "./Marquee.vue";
</script>
<script>
export default {
  component: { Marquee },
  data: function () {
    return {
      activities: DB.activities,
    };
  },
}
</script>
<style scoped>
@media (max-width: 639.9px){

  .suite-width{
    width: calc(100% - 30px);
  }

}
</style>