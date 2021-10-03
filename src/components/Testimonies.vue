<template>
  <div class="w-container w-mx-auto">
    <div class="<sm:(w-flex w-flex-nowrap) sm:(w-grid w-grid-cols-3) w-overflow-auto">
      <div v-for="(kol, key) in kols" :key="kol" class="<sm:(w-flex-shrink-0) kol-width w-flex w-flex-col <sm:odd:w-bg-gray-100">
        <div class="w-aspect-w-16 w-aspect-h-9 sm:(w-aspect-w-1 w-aspect-h-1) w-bg-gray-500">
          <!--KOL圖片-->
          <img class="w-object-cover" :src="getSrc(kol.avatar)" />
        </div>
        <div
          :class="{
            'sm:w-bg-gray-100': key == 1 || key == 4,
          }"
          class="
            w-flex-1
            w-p-8
            sm:w-px-10
            w-relative
            w-pb-12
            w-flex
            w-flex-col
            w-justify-between
          "
        >
          <!--KOL資訊-->
          <div>
            <h2 class="<sm:w-text-xl w-font-normal">
              {{ kol.name }}<span class="w-text-sm sm:w-text-lg">／{{ kol.job }}</span>
            </h2>
            <p v-html="kol.content" class="w-text-justify sm:(w-text-base w-leading-7)"></p>
          </div>
          <div class="w-flex <sm:w-flex-col w-relative w-z-1">
            <!--推薦-->
            <div class="<sm:w-text-center">
              <h4
                class="
                <sm:w-text-sm
                  w-text-base
                  w-inline-block
                  w-text-white
                  w-bg-black
                  w-rounded-full
                  w-py-1
                  w-px-3
                "
              >
                我最推薦
              </h4>
              <ul
                v-for="fav in kol.favorites"
                :key="fav"
                class="w-list-none w-p-0 w-m-0 w-text-base <sm:w-hidden"
              >
                <li>
                  <a :href="`#fm_pr${fav.slug}`" v-smooth-scroll>{{ fav.name }}</a>
                </li>
              </ul>
            </div>
            <div class="w-flex w-flex-1 w-justify-center sm:w-justify-end">
              <!--包裝圖片-->
              <div class="sm:w-pl-4 w-flex">
                <template v-for="fav in kol.favorites" :key="fav">
                  <div class="w-max-w-[72px]">
                  <a :href="`#fm_pr${fav.slug}`" v-smooth-scroll>
                    <img class="w-block w-w-24" :src="getSrc(fav.img)" />
                  </a>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="w-absolute w-px-4 w-inset-x-0 w-bottom-0 w-z-0">
            <img src="../assets/fm_sec6_logo.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
//import getImg from '../mixin/getImg';
import DB from "../db/db.json";
</script>

<script>
export default {
  //mixins: [getImg],
  data: function () {
    return {
      kols: DB.kols
    };
  },
};
</script>
<style scoped>
@media (max-width: 639.9px){

  .kol-width{
    width: calc(100% - 30px);
  }

}
</style>
