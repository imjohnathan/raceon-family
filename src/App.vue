
<template>
  <main class="family-series w-min-h-screen">
    <section class="w-relative">
      <KV />
      <Navbar />
    </section>

    <section>
      <BreifVideo />
    </section>

    <div v-scroll-spy="{offset: 80}">


        <section>
          <Title title="產品組合"/>
            <ProductSection />
          <Title title="內容物說明" />
        <SamllProductsSection />
        </section>
 

      <section>
        <Title title="好評推薦" />
      <Testimonies />
      </section>


        <section>
        <Title title="適用族群" />
        <Suitable />

        <Title title="使用時機" />
        <Timing />
        </section>


      <section>
        <Title title="購買通路" />
      <SalesVendor />
      </section>

      <section id="invoice">
        <Title title="發票登錄抽獎活動" />
        <Invoice />
      </section>

    </div>

    <section class="w-bg-black">
      <div class="w-container w-mx-auto w-py-30 w-flex w-justify-center w-items-center">
        <img class="w-w-60" src="https://cdn.cybassets.com/s/files/12556/theme/38737/assets/logo-animate_white.svg" />
      </div>
    </section>
  </main>
</template>
<script setup>
//component
import KV from "./components/KV.vue";
import Navbar from "./components/Navbar.vue";
import BreifVideo from "./components/BreifVideo.vue";
import ProductSection from "./components/ProductSection.vue";
import Title from "./components/Title.vue";
import SamllProductsSection from "./components/SamllProductsSection.vue";
import Testimonies from "./components/Testimonies.vue";
import Suitable from "./components/Suitable.vue";
import Timing from "./components/Timing.vue";
import SalesVendor from "./components/SalesVendor.vue";
import Invoice from "./components/Invoice.vue";
</script>

<script>
export default {
  component: {
    KV,
    Navbar,
    BreifVideo,
    Title,
    ProductSection,
    SamllProductsSection,
    Testimonies,
    Suitable,
    Timing,
    SalesVendor,
    Invoice
  },
  data: function () {
    return {
      youtube: '',
    };
  },
  beforeMount: function() {
    //this.youtube = document.querySelector('#app').getAttribute('data-youtube');
  }  
};
</script>

<style>
.site-page{
  padding-bottom: 0 ;
}
/*
.family-series svg:not(:root) {
    width:100%;
    height: auto;
}
*/
.footer-nav{
  display: none;
}
</style>