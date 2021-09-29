<template>
    <template v-for="product in smproducts" :key="product">
        <div 
        :class="{ 
        'w-bg-[#0096df]': product.slug == 'lcs', 
        'w-bg-[#f0d500]': product.slug == 'vc', 
        'w-bg-[#e50012]': product.slug == 'dc' }">
            <swiper
                :slides-per-view="1"
                :space-between="50"
                :pagination="pagination"
                class="w-container w-mx-auto w-flex"
                :id="product.slug"
            >
                <template v-for="(slide, key) in product.slides" :key="slide">
                <swiper-slide class="!w-h-auto">
                    <div 
                    :class="[product.slug == 'vc' ? 'w-text-black' : 'w-text-white']"
                    class="w-flex">
                    <div class="w-w-3/5 w-flex w-flex-col w-justify-center w-p-20">
                        <div class="">
                        <!--文字內容-->
                        <h2 v-if="key == 0" class="w-mb-8">{{ product.title }}</h2>
                        <h4>{{ slide.title }}</h4>
                        <template v-for="p in slide.paragragh" :key="p">
                            <p v-html="p" class="w-text-lg">
                            </p>
                        </template>
                            <a
                            v-if="key == product.slides.length - 1"
                            :class="{ 'w-bg-white': product.slug == 'lcs' }"
                            class="
                                w-block
                                w-border-1
                                w-inline-block
                                w-border-solid
                                w-py-2
                                w-px-6
                                w-rounded-4xl
                                w-text-xl
                                w-transition-all
                            "
                            :href="product.url"
                            >瞭解更多</a
                            >
                        </div>
                    </div>
                    <div class="w-w-2/5">
                        <!--圖片-->
                        <div class="w-aspect-w-1 w-aspect-h-1.3">
                        <img
                        class="w-object-cover"
                        :src="getSrc(slide.image)"
                        />
                        </div>
                    </div>
                    </div>
                </swiper-slide>
                </template>
                <div class="fmswiper !w-w-3/5 !left-0 !bottom-12  w-absolute w-text-center w-transition-opacity w-z-10"></div>
            </swiper>
        </div>
        <div class="w-container w-mx-auto w-h-[60px] w-flex w-justify-center w-items-center w-bg-repeat-x w-bg-contain w-bg-center">
            <img class="w-block" src="../assets/fm_sec5_sign.png" />
        </div>
    </template>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([EffectFade, Pagination]);
</script>
<script>
export default {
  component: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getSrc(name) {
      const path = `../assets/${name}`;
      const modules = import.meta.globEager("../assets/*");
      return modules[path].default;
    },
  },
  data: function () {
    return {
      pagination: {
        clickable: true,
        el:'.fmswiper',
        renderBullet: function (index, className) {
          return '<span class="fmswiper !w-mx-4 ' + className + '">' + (index + 1) + "</span>";
        },
      },
      smproducts: [
        {
          slug: "lcs",
          url: "/products/ors-sport-hydro",
          title: "水動能電解質液 (提升保水力)",
          slides: [
            {
              title: "足夠電解質，身體保留水分的關鍵",
              image: "fm_sec5_lcs_1.jpg",
              paragragh: [
                "汗流越多，選擇對的飲料越重要！『鈉』作為體內最主要電解質，能幫助吸收與保留水分，進而調節體溫。",
                "據《美國運動醫學會》建議，耐力運動每小時應補充300-600mg鈉，水動能電解質液每小包含有422mg鈉，相當於1.5瓶運動飲料。",
              ],
            },
            {
              title: "WHO醫學級配方，啟動體內輸水幫補",
              image: "fm_sec5_lcs_2.jpg",
              paragragh: [
                "WHO醫學級配方含有特定的鈉與葡萄糖比例，會打開身體吸收水分的快速管道；加上足夠的電解質，讓喝進去的水有效保留體內，而不是喝到膀胱被排掉。",
                "可以想成在身體內建一個蓄水池，當水份留得住，更能有助調節體溫、幫助散熱。",
              ],
            },
            {
              title: "科學實證，保水率最高增至127%",
              image: "fm_sec5_lcs_3.jpg",
              paragragh: [
                "喝水不光只是喝多少，被身體保留更重要。水動能電解質液經臨床實驗，結果顯示運動前飲用，能顯著提升身體保水率最高至127%。",
                "若用運動每小時普遍流失1L的汗水來算，代表能幫助身體省下270ml的水，大約是一般寶特瓶的半瓶水量！",
              ],
            },
          ],
        },
        {
          slug: "vc",
          url: "/products/reforce-vitamin-c",
          title: "環原力維生素C (修護力)",
          slides: [
            {
              title: "抗氧化修護力，給勞累後的身體大掃除",
              image: "fm_sec5_vc_1.jpg",
              paragragh: [
                "促進膠原蛋白形成、鐵質吸收與傷口癒合，維生素C對身體的好不只養顏美容，強大的抗氧化作用，更能降低劇烈運動、工作勞動或情緒壓力等對身體產生的壓力。",
                "可以把它想成每天幫身體進行掃除，清除過多、造成負擔的廢棄物。",
              ],
            },
            {
              title: "通過耐高溫測試，熱熱喝也ＯＫ",
              image: "fm_sec5_vc_2.jpg",
              paragragh: [
                "一般維生素C不耐熱、易受氧化破壞的問題，環原力也透過醫藥級技術成功克服，在80度高溫下仍能保持93-96%的維生素C含量，溫熱的喝同樣有效。",
              ],
            },
            {
              title: "一包等於600顆櫻桃，低卡無負擔",
              image: "fm_sec5_vc_3.jpg",
              paragragh: [
                "環原力每包含有600mg維生素C，約為600顆櫻桃，熱量卻僅27.6大卡！絕佳的酸甜莓果風味，補足每日C同時，更有助提升日常的水分補充。",
                "在工作外食、戶外活動不易攝取蔬果的情況下，環原力輕量好帶，快速把水變好喝。",
              ],
            },
          ],
        },
        {
          slug: "dc",
          url: "/products/double-caffeine",
          title: "雙速咖啡因雙層錠 (專注力）",
          slides: [
            {
              title: "快速提高專注力，一錠還你清晰思緒",
              image: "fm_sec5_dc_1.jpg",
              paragragh: [
                "台灣首創『兩段速咖啡因釋放』技術，只要1小錠，就能快速啟動＆穩定支援8小時專注力，中間不必再做補充。",
                "可以想成冰滴咖啡，在體內定速釋放微量咖啡因，達到整天專注，又不超過負荷。",
              ],
            },
            {
              title: "不用喝下大量水分，提高專注力不中斷",
              image: "fm_sec5_dc_2.jpg",
              paragragh: [
                "<strong>一般咖啡或能量飲普遍有個問題</strong>，就是來得快也去得快，因此往往半天後需要再來一杯，但這在運動、開車過程或工作忙碌時，不是那麼方便！",
                "雙速咖啡因每1錠約為2小杯咖啡，定速微量釋放相對降低刺激，也不會攝取過多水分與熱量。"
              ],
            },
            {
              title: "天然綠茶萃取，溫和穩定不刺激",
              image: "fm_sec5_dc_3.jpg",
              paragragh: [
                "不喝咖啡的人也不用擔心，雙速的咖啡因取自天然綠茶，符合歐盟食品規範、且採用無毒的純淨水萃取方式。",
                "對於常喝茶飲的台灣人來說，身體的接受度自然好，溫和不刺激。",
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
/*
.swiper-fade .swiper-slide{opacity:0!important;}
.swiper-fade .swiper-slide-active{opacity:1!important;}
*/
.fmswiper.swiper-pagination-bullet {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0);
  border: #000 solid 1px;
}

.fmswiper.swiper-pagination-bullet-active {
  background: #fff;
}

</style>
