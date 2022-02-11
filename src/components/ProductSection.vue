
<template>
  <template v-for="product in products" :key="product">
    <div :class="{'w-bg-[#b8daea]': product.bg}" class="w-overflow-hidden" :id="`fm_pr${product.id}`">
            <div class="w-max-w-screen-lg w-mx-auto w-px-6 md:w-px-16 w-pb-10">
                <div class="w-flex <sm:w-justify-center">
                  <div class="<sm:w-hidden w-w-2/5"></div>
                  <div  class="w-flex sm:w-w-3/5">
                    <template v-for="(prTag,key) in product.tags.split(',')"  :key="prTag">
                    <div 
                    :class="{ 
                      'w-ml-4': key == product.tags.split(',').length - 1,
                      'w-bg-[#f0d500]': product.id == 1, 
                      'w-bg-[#0096df] w-text-white': product.id == 2, 
                      'w-bg-[#e50012] w-text-white': product.id == 3 }" 
                    class="w-py-1 w-px-2 w-text-xl sm:w-text-3xl w-rounded-b-lg">{{prTag}}</div>
                  </template>
                  <!--分類標籤--></div>
                  </div>
              <div class="w-flex <sm:w-flex-col">
                <div class="<sm:w-px-10 sm:w-w-2/5">
                  <img 
                  class="<sm:w-ml-8"
                  :src="getSrc(`fm_sec4_pr${product.id}.png`)" :alt="product.title">
                  <!--包裝-->
                  <div class="w-text-center sm:w-w-[75%] w-mt-6 <sm:w-my-3"> 
                    <!--包裝規格按鈕-->
                    <div 
                    @click="showImg(getSrc(`fm_sec4_pr${product.id}_info.jpg`))"
                    :class="{ 'hover:w-bg-[#f0d500]': product.id == 1, 'hover:w-bg-[#0096df] hover:w-text-white hover:w-border-black': product.id == 2, 'hover:w-bg-[#e50012] hover:w-text-white hover:w-border-black': product.id == 3 }" 
                    class="
                    w-border-1 w-border-solid
                    w-inline-block 
                    w-text-sm
                    w-px-3 w-py-1
                    sm:(w-px-6 w-py-2 w-text-xl)
                    w-rounded-full
                    w-transition-all 
                    w-cursor-pointer">成分規格</div>
                    </div>
                  </div>
              <div class="sm:w-w-3/5 w-flex w-flex-col">
                <div class="w-flex-1 w-flex w-flex-col">
                  <!--商品標題-->
                  <div class="w-flex-1 w-flex w-flex-col w-justify-center <sm:w-text-center">
                    <h2 class="w-text-3xl sm:w-text-4xl w-font-normal">{{product.title}}</h2>
                    <h3 class="w-text-lg sm:w-text-2xl w-font-normal">{{product.subtitle}}</h3>
                  </div>
                  <div class="w-mb-2 w-text-sm sm:w-text-lg <sm:(w-text-center w-my-4)">
                    售價：<span :class="{ 'w-line-through' : product.promoprice < product.price}">${{product.price}}</span>
                    <template v-if="product.promoprice < product.price">&emsp;&emsp;優惠價：${{product.promoprice}}</template>
                    </div>
                  </div>
                <div class="w-flex w-mb-5 w-border-0 w-border-b-1 w-border-t-1 w-border-solid">
                  <div class="w-w-1/2 sm:w-w-2/5">
                  <!--小包裝圖片-->
                    <img :src="getSrc(`fm_sec4_pr${product.id}_inside.png`)" :alt="product.title">
                    </div>
                  <div class="w-flex w-flex-col w-justify-around w-my-8 w-pl-2 sm:w-pl-8">
                    <h4 class="<sm:w-text-base">內容物：</h4>
                    <template v-for="prInside in product.insides" :key="prInside">
                      <a 
                      :href="prInside.link" 
                      :class="{ 
                        'hover:w-bg-[#f0d500]': product.id == 1, 
                        'hover:(w-bg-[#0096df] w-text-white w-border-black)': product.id == 2, 
                        'hover:(w-bg-[#e50012] w-text-white w-border-black)': product.id == 3 }" 
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
                    <!--加入購物車-->
                    <div class="w-flex w-justify-center">
                      <div 
                      @click="showImg(getSrc(`fm_sec4_pr${product.id}_info.jpg`))"
                      :class="{ 'hover:w-bg-[#f0d500]': product.id == 1, 'hover:w-bg-[#0096df] hover:w-text-white hover:w-border-black': product.id == 2, 'hover:w-bg-[#e50012] hover:w-text-white hover:w-border-black': product.id == 3 }" 
                      class="
                      w-border-1 w-border-solid
                      w-inline-block 
                      w-w-2/5
                      w-text-center
                      w-text-sm
                      w-px-3 w-py-1
                      sm:(w-px-6 w-py-2 w-text-xl)
                      w-rounded-full
                      w-transition-all 
                      w-cursor-pointer">加入購物車</div>
                    </div>

                </div>
        
              </div>
            </div>
        </div>
  </template>

    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    >
    </vue-easy-lightbox>

</template>

<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import DB from "../db/db.json";
</script>


<script>
export default{
  components:{
    VueEasyLightbox
  },
 data() {
    return {
      products: DB.products,
      imgs: '', // Img Url , string or Array of string
      visible: false,
    }
  },
 methods:{
      showImg(src) {
        this.imgs = src
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
 },

  beforeMount: function() {
    if (typeof fm_data?.products !== 'undefined') {
        this.products = fm_data.products;
    }

  }  


}

</script>
<style lang="">
    
</style>