<template lang="">
  <div>
    <div class="w-relative w-container w-mx-auto">
      <img
        class="
        <sm:w-hidden
        w-absolute w-w-full w-h-full w-inset-0 w-z-0 w-object-cover"
        src="../assets/fm_sec2_bg.png"
      />
      <img
        class="
        sm:w-hidden
        w-absolute w-w-full w-h-full w-inset-0 w-z-0 w-object-cover"
        src="../assets/fm_sec2_bg_m.png"
      />
      <article class="
      w-text-center 
      w-py-10
      w-px-4
      sm:w-py-30 
      w-relative 
      w-z-1">
        <p class="
        w-m-0 
        !w-leading-loose
        w-text-base
        sm:w-text-2xl 
         w-font-normal">
          戶外室內運動、燒腦高壓工作、親子戶外活動、城市通勤奔波……<br />
          每一天的生活就是一場場耐力賽，<br />
          <strong
            >你身體所需的 <br class="sm:w-hidden"><span class="w-text-color-[#f0d500]">保水力</span>、
            <span class="w-text-color-[#0096df]">專注力</span>、
            <span class="w-text-color-[#e50012]">修護力</span>足夠嗎？<br />
            讓科學的醫學級補給，<br class="sm:w-hidden">給你最有力的即時救援，</strong
          ><br />
          為上場前的你快補快充，<br class="sm:w-hidden">成就每一天的出色表現！
        </p>
      </article>
    </div>
    <div class="w-bg-black">
      <div class="w-container w-mx-auto w-flex <sm:w-flex-col">
        <div class="sm:w-w-1/12">
          <img
            class="w-pt-8 w-px-6 <sm:w-hidden"
            src="../assets/fm_sec3_logo.png"
            alt="RACE ON 鋭速運動醫學"
          />
          <Marquee class="sm:w-hidden" :white="true" img="fm_sec7_logo.png" />
        </div>
        <div class="sm:w-w-11/12">
          <div class="w-aspect-w-16 w-aspect-h-9">
            <iframe
            v-if="youtube"
              width="100%"
              :src="`https://www.youtube.com/embed/${youtube}?controls=0&autoplay=1&mute=1`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <img v-if="!youtube" :src="img"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Marquee from "./Marquee.vue";
</script>

<script>
export default {
 component:{ Marquee },
 data() {
    return {
      youtube: '',
      img: ''
    }
  },
  beforeMount: function() {
    if (typeof fm_data?.brief !== 'undefined') {
        this.youtube = fm_data.brief.youtube
        this.img =  fm_data.brief.img
    }
  }  
};
</script>
<style lang=""></style>
