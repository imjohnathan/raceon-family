
<template>
  <div :class="{'w-bg-[#b8daea]': prBg}" class="w-overflow-hidden" :id="`fm_pr${prId}`">
          <div class="w-max-w-screen-lg w-mx-auto w-px-6 w-pb-10">
              <div class="w-flex <sm:w-justify-center">
                <div class="<sm:w-hidden w-w-2/5"></div>
                <div  class="w-flex sm:w-w-3/5">
                  <template v-for="(prTag,key) in prTags.split(',')"  :key="prTag">
                  <div 
                  :class="{ 
                    'w-ml-4': key == prTags.split(',').length - 1,
                    'w-bg-[#f0d500]': prId == 1, 
                    'w-bg-[#0096df] w-text-white': prId == 2, 
                    'w-bg-[#e50012] w-text-white': prId == 3 }" 
                  class="w-py-1 w-px-2 w-text-xl sm:w-text-3xl w-rounded-b-lg">{{prTag}}</div>
                </template>
                <!--分類標籤--></div>
                </div>
            <div class="w-flex <sm:w-flex-col">
              <div class="<sm:w-px-10 sm:w-w-2/5">
                <img 
                class="<sm:w-ml-8"
                :src="getSrc(`fm_sec4_pr${prId}.png`)" :alt="prTitle">
                <!--包裝-->
                <div class="w-text-center sm:w-w-[75%] w-mt-6 <sm:w-my-3"> 
                  <!--包裝規格按鈕-->
                  <div 
                  :class="{ 'hover:w-bg-[#f0d500]': prId == 1, 'hover:w-bg-[#0096df] hover:w-text-white hover:w-border-black': prId == 2, 'hover:w-bg-[#e50012] hover:w-text-white hover:w-border-black': prId == 3 }" 
                  class="
                  w-border-1 w-border-solid
                  w-inline-block 
                  w-text-sm
                  w-px-3 w-py-1
                  sm:(w-px-6 w-py-2 w-text-xl)
                  w-rounded-full
                  w-transition-all 
                  w-cursor-pointer">包裝規格</div>
                  </div>
                </div>
            <div class="sm:w-w-3/5 w-flex w-flex-col">
              <div class="w-flex-1 w-flex w-flex-col">
                <!--商品標題-->
                <div class="w-flex-1 w-flex w-flex-col w-justify-center <sm:w-text-center">
                  <h2 class="w-text-3xl sm:w-text-4xl w-font-normal">{{prTitle}}</h2>
                  <h3 class="w-text-lg sm:w-text-2xl w-font-normal">{{prSubtitle}}</h3>
                </div>
                <div class="w-mb-2 w-text-sm sm:w-text-lg <sm:(w-text-center w-my-4)">
                  定價：<span :class="{ 'w-line-through' : prPromoprice }">${{prPrice}}</span><template v-if="prPromoprice">&emsp;&emsp;新品優惠價：${{prPromoprice}}</template>
                  </div>
                </div>
              <div class="w-flex sm:w-mb-20 w-border-0 w-border-b-1 w-border-t-1 w-border-solid">
                <div class="w-w-1/2 sm:w-w-2/5">
                <!--小包裝圖片-->
                  <img :src="getSrc(`fm_sec4_pr${prId}_inside.png`)" :alt="prTitle">
                  </div>
                <div class="w-flex w-flex-col w-justify-around w-my-8 w-pl-2 sm:w-pl-8">
                  <h4 class="<sm:w-text-base">內容物：</h4>
                  <template v-for="prInside in prInsides" :key="prInside">
                    <a 
                    :href="prInside.link" 
                    :class="{ 
                      'hover:w-bg-[#f0d500]': prId == 1, 
                      'hover:(w-bg-[#0096df] w-text-white w-border-black)': prId == 2, 
                      'hover:(w-bg-[#e50012] w-text-white w-border-black)': prId == 3 }" 
                    class="
                    w-whitespace-nowrap
                    w-border-1 w-border-solid 
                    w-inline-block 
                    w-px-3 w-py-1 w-text-sm
                    sm:(w-py-2 w-px-6 w-text-xl)
                    w-rounded-full
                    w-transition-all"
                    v-smooth-scroll>
                    {{prInside.name}}</a>
                  </template>
                  <!--內容物按鈕--></div>
                </div>
              </div>

      
            </div>
          </div>
      </div>
</template>

<script>
export default{
    props: {
      prBg: Boolean,
      prId: Number,
      prTags: String,
      prTitle: String,
      prSubtitle: String,
      prPrice: Number,
      prPromoprice: Number,
      prInsides: Array
  },

}

</script>
<style lang="">
    
</style>