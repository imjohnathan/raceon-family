<template>
  <div class="w-grid w-grid-cols-3 w-container w-mx-auto">
    <div v-for="(kol, key) in kols" :key="kol" class="w-flex w-flex-col">
      <div class="w-aspect-w-1 w-aspect-h-1 w-bg-gray-500">
        <!--KOL圖片-->
        <img class="w-object-cover" :src="getSrc(kol.avatar)" />
      </div>
      <div
        :class="{
          'w-bg-gray-100': key == 1 || key == 4,
        }"
        class="
          w-flex-1
          w-p-8
          w-px-10
          w-relative
          w-pb-12
          w-flex
          w-flex-col
          w-justify-between
        "
      >
        <!--KOL資訊-->
        <div>
          <h2 class="w-font-normal">
            {{ kol.name }}<span class="w-text-lg">／{{ kol.job }}</span>
          </h2>
          <p v-html="kol.content" class="w-text-base w-leading-7"></p>
        </div>
        <div class="w-flex w-relative w-z-1">
          <!--推薦-->
          <div>
            <h4
              class="
                w-text-base
                w-inline-block
                w-text-white
                w-bg-black
                w-rounded-4xl
                w-py-1
                w-px-3
              "
            >
              我最推薦
            </h4>
            <ul
              v-for="fav in kol.favorites"
              :key="fav"
              class="w-list-none w-p-0 w-m-0 w-text-base"
            >
              <li>
                <a :href="`#fm_pr${fav.slug}`">{{ fav.name }}</a>
              </li>
            </ul>
          </div>
          <div class="w-flex w-flex-1 w-justify-end">
            <!--包裝圖片-->
            <div class="w-pl-4 w-flex">
              <template v-for="fav in kol.favorites" :key="fav">
                <div class="w-max-w-[72px]">
                <a :href="`#fm_pr${fav.slug}`">
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
</template>
<script setup>
//import getImg from '../mixin/getImg';
</script>

<script>
export default {
  //mixins: [getImg],
  data: function () {
    return {
      kols: [
        {
          avatar: "fm_sec5_vc_1.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "爆汗１小時神補給包",
              img: "fm_sec4_pr1.png",
              slug: "1",
            },
          ],
        },
        {
          avatar: "fm_sec5_dc_1.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，因為我的工作屬於服務業，因為我的工作屬於服務業，因為我的工作屬於服務業，因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "爆汗１小時神補給包",
              img: "fm_sec4_pr1.png",
              slug: "1",
            },
          ],
        },
        {
          avatar: "fm_sec5_lcs_1.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "爆汗１小時神補給包",
              img: "fm_sec4_pr1.png",
              slug: "1",
            },
          ],
        },
        {
          avatar: "fm_sec5_vc_2.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "耐力８小時神充電包",
              img: "fm_sec4_pr3.png",
              slug: "3",
            },
          ],
        },
        {
          avatar: "fm_sec5_dc_2.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "爆汗１小時神補給包",
              img: "fm_sec4_pr1.png",
              slug: "1",
            },
            {
              name: "流汗６小時神補水包",
              img: "fm_sec4_pr2.png",
              slug: "2",
            },
          ],
        },
        {
          avatar: "fm_sec5_vc_3.jpg",
          name: "吳睿恩",
          job: "跑者",
          content:
            "自從試用過鋭速的咖啡因錠後就從此愛上了！因為我的工作屬於服務業，工作時比較不能跑廁所，因此平常有喝咖啡習慣的我工作時比較不會喝太多咖啡",
          favorites: [
            {
              name: "爆汗１小時神補給包",
              img: "fm_sec4_pr1.png",
              slug: "1",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
