<template>
   <div
    class="w-bg-[#b8daea] w-overflow-hidden"
   >
     <div
        class="w-pt-[75px] sm:w-pt-[95px] w-pb-10 w-relative w-container w-mx-auto @2xl:w-max-w-screen-xl <sm:w-min-h-screen"
      >
      <!--背景-->
        <img
          class="w-absolute w-w-full w-h-full w-inset-0 w-z-0 w-object-cover <sm:w-hidden"
          src="../assets/fm_sec1_bg_color_strip_frame.png"
        />
        <!--mobile-->
        <img
          class="w-absolute w-w-full w-h-full w-inset-0 w-z-0 w-object-cover sm:w-hidden"
          src="../assets/fm_sec1_bg_color_strip_frame_m.png"
        />
        <!--主視覺-->
        <div
          class="
            w-flex w-justify-center w-items-center w-flex-wrap
           <sm:(w-flex-col)
            w-relative w-z-1
          "
        >
          <div class="w-w-full">
            <!--全家獨家、發票抽獎-->
              <div class="w-flex w-mb-[-1rem] sm:w-mb-[-2rem]">
                <div class="w-w-1/2 w-px-6 sm:w-px-2 sm:(w-w-1/6 w-px-0)">
                  <img src="../assets/fm_sec1_fm-exclusive.png" />
                </div>

                <div class="w-w-1/2 sm:(w-w-1/6) w-flex w-items-center sm:w-ml-4">
                  <div class="w-w-1/3 sm:w-w-2/5"><img src="../assets/fm_sec1_aw.png" /></div>
                  <h2
                    class="w-w-2/3 sm:w-w-3/5  
                    w-text-xs sm:w-text-base 
                    w-whitespace-nowrap 
                    w-m-0 w-font-bold"
                  >
                    登錄發票月月抽<br />Apple Watch 7、<br class="sm:w-hidden" />vívosmart 4
                  </h2>
                </div>

        </div>
          </div>


        <!--logo-->
          <div class="sm:(w-w-2/5)">

            <div class="w-px-20 <sm:w-mr-[-2rem] sm:(w-px-6 w-mb-16)">
              <kvLogo />
            </div> 

          </div>

        <!--產品-->

          <div class="w-relative sm:w-w-3/5 <sm:w-mt-[-1.5rem]">
            <img class="<sm:w-hidden" src="../assets/fm_sec1_p1_h.png" />
            <img class="sm:w-hidden" src="../assets/fm_sec1_p1_h_m.png" />

            <div class="w-absolute w-inset-0">
              <img class="<sm:w-hidden" src="../assets/fm_sec1_p2_h.png" />
              <img class="sm:w-hidden" src="../assets/fm_sec1_p2_h_m.png" />
            </div>

            <div class="w-absolute w-inset-0">
              <img class="w-ml-[7vw] <sm:w-hidden" src="../assets/fm_sec1_p3_h.png" />
              <img class="sm:w-hidden" src="../assets/fm_sec1_p3_h_m.png" />
            </div>

          </div>

        <!--小標題-->
        <div
          class="w-w-full <sm:w-mr-[-3rem] w-mt-[-1rem] sm:w-mt-[-8rem]"
        >
          <div class="w-w-2/5 sm:w-w-3/5">
          <kvSubtitle />
          </div>
        </div>

        </div>

      </div>
   </div>
</template>
<script setup>
import kvLogo from "./svg/kv_logo.vue";
import kvSubtitle from "./svg/kv_subtitle.vue";
</script>
<script>
export default {

  component:{
    kvLogo,
    kvSubtitle
  }
    
}
</script>
<style lang="">
    
</style>