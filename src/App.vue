
<template>
  <main class="family-series w-min-h-screen">
    <section>
      <KV />
    </section>

    <section>
      <Navbar />
    </section>

    <section>
      <BreifVideo video="https://www.youtube.com/embed/gZEBDahq7F0?controls=0&autoplay=1&mute=1" />
    </section>

    <section>
      <Title title="產品組合"/>
      <template v-for="product in products" :key="product">
        <ProductSection
          :pr-bg="product.bg"
          :pr-id="product.id"
          :pr-tags="product.tags"
          :pr-title="product.title"
          :pr-subtitle="product.subtitle"
          :pr-price="product.price"
          :pr-promoprice="product.promoprice"
          :pr-insides="product.insides"
        />
      </template>
    </section>

    <section>
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
    </section>

    <section>
      <Title title="使用時機" />
    <Timing />
    </section>

    <section>
      <Title title="購買通路" />
    <SalesVendor />
    </section>

    <section>
      <Title title="發票登錄抽獎活動" />
      <Invoice />
    </section>

    <section>
      <div class="w-container w-mx-auto w-py-30 w-flex w-justify-center w-items-center w-bg-black">
        <img class="w-w-60" src="//cdn.cybassets.com/s/files/12556/theme/38737/assets/./1630560740_4a5da051_logo-animate_white.svg?" />
      </div>
    </section>


  </main>

</template>
<script setup>
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

import DB from "./db/db.json";
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
      products: DB.products
    };
  },
};
</script>

<style>
.site-page{
  padding-bottom: 0 ;
}
</style>