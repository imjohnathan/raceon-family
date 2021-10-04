<template>
    <div class="w-bg-black w-py-2">
    <nav 
    :class="{
    'fm-hold': !isIntersectingElement,
    }"
    class="fm-nav w-transition-all w-duration-500">
        <div class="w-container w-mx-auto w-flex w-justify-center w-items-center">
            <ul
            class="
                w-list-none
                w-m-0
                w-p-0
                <sm:(w-overflow-auto w-space-x-2)
                w-py-4
                w-flex
                w-space-x-6
                w-px-4
            "
            v-scroll-spy-active v-scroll-spy-link>

            <li v-for="nav in navs" :key="nav">
                <a 
                class="
                w-text-base
                sm:w-text-xl
                w-italic
                w-font-medium
                w-whitespace-nowrap
                w-text-white
                hover:(w-text-[#b8daea])
                focus:w-text-white
                " 
                :href="nav.link"
                >{{nav.title}}</a
                >
            </li>
            </ul>
        </div>
        </nav>
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement"
      ></intersection-observer>
    </div>

</template>
<script setup>
import IntersectionObserver from "./IntersectionObserver.vue";
//Data
import DB from "../db/db.json";

</script>
<script>
export default {
  components: {
    IntersectionObserver,
  },
  data: () => ({
      navs : DB.nav,
      isIntersectingElement: false,
  }),
  methods: {
    onIntersectionElement(value) {
      this.isIntersectingElement = value;
    },
  },
}
</script>
<style>
.fm-hold{
    position: fixed;
    z-index: 9999;
    top: 0;
    width: 100%;
    @apply w-bg-black w-border-light-900 w-bg-opacity-80 w-backdrop-filter w-backdrop-saturate-[180%] w-backdrop-blur-xl;

}
.fm-nav li.active a{
 @apply w-text-[#b8daea];
}

.fm-nav ul li:hover a:after,
.fm-nav ul li.active a:after{
    width: 100%;
    left: 0;
}

.fm-nav ul li a:after {
    content: '';
    display: block;
    right: 0;
    bottom: -3px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    width: 0;
    border-bottom: 2px solid;
}
</style>