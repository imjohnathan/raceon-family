
<template lang="">
  <div :class="{'w-bg-[#b8daea]': prBg}">
          <div class="w-container w-mx-auto w-px-16 lg:w-px-24 w-pb-10">
              <div class="w-flex">
                <div class="w-w-2/5"></div>
                <div  class="w-flex w-w-3/5">
                  <template v-for="(prTag,key) in prTags.split(',')" >
                  <div 
                  :class="{ 'w-ml-4': key == prTags.split(',').length - 1, 'w-bg-[#f0d500]': prId == 1, 'w-bg-[#0096df] w-text-white': prId == 2, 'w-bg-[#e50012] w-text-white': prId == 3 }" 
                  class="w-py-1 w-px-2 w-text-3xl w-rounded-b-lg">{{prTag}}</div>
                </template>
                <!--分類標籤--></div>
                </div>
            <div class="w-flex">
              <div class="w-w-2/5">
                <img :src="'../assets/fm_sec3_pr'+prId+'.png'" />
                <!--包裝-->
                <div class="w-text-center w-w-[75%] w-mt-6"> 
                  <div 
                  :class="{ 'hover:w-bg-[#f0d500]': prId == 1, 'hover:w-bg-[#0096df] hover:w-text-white hover:w-border-black': prId == 2, 'hover:w-bg-[#e50012] hover:w-text-white hover:w-border-black': prId == 3 }" 
                  class="w-border-1 w-inline-block w-border-solid w-py-2 w-px-6 w-rounded-4xl w-text-xl w-transition-all w-cursor-pointer ">包裝規格</div>
                  <!--包裝規格按鈕--></div>
                </div>
            <div class="w-w-3/5 w-flex w-flex-col">
              <div class="w-flex-1 w-flex w-flex-col">
                <div class="w-flex-1 w-flex w-flex-col w-justify-center">
                  <h2 class="w-text-4xl w-font-normal">{{prTitle}}</h2>
                  <h3 class="w-text-2xl w-font-normal">{{prSubtitle}}</h3>
                </div>
                <div class="w-mb-2 w-text-lg">定價：<del>${{prPrice}}</del>&emsp;&emsp;新品優惠價：${{prPromoprice}}</div>
                <!--商品標題--></div>
              <div class="w-flex w-mb-20 w-border-0 w-border-b-1 w-border-t-1 w-border-solid">
                <div class="w-w-2/5">
                  <img :src="'../assets/fm_sec3_pr'+prId+'_inside.png'" />
                  <!--小包裝圖片-->
                  </div>
                <div class="w-flex w-flex-col w-justify-around w-pl-8 w-my-8">
                  <h4>內容物：</h4>
                  <template v-for="(prInside,key) in prInsides" >
                    <a 
                    :href="prInside.link" 
                    :class="{ 'hover:w-bg-[#f0d500]': prId == 1, 'hover:w-bg-[#0096df] hover:w-text-white hover:w-border-black': prId == 2, 'hover:w-bg-[#e50012] hover:w-text-white hover:w-border-black': prId == 3 }" 
                    class="w-block w-border-1 w-inline-block w-border-solid w-py-2 w-px-6 w-rounded-4xl w-text-xl w-transition-all">
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