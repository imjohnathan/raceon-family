<template>
    <div class="w-bg-black w-py-2">
    <nav 
    :class="{
    'fm-hold': !isIntersectingElement,
    }"
    class="fm-nav w-transition-all w-duration-500">
        <div class="w-container w-mx-auto w-flex w-justify-between sm:w-justify-center w-items-center">
            <ul
            :class="{
            '<sm:w-space-x-0': !isIntersectingElement,
            '<sm:w-space-x-4': isIntersectingElement
            }"
            class="
                w-list-none
                w-m-0
                w-p-0
                <sm:(w-overflow-auto)
                w-py-4
                w-flex
                w-space-x-6
                w-px-4
            "
            v-scroll-spy-active v-scroll-spy-link>

            <li v-for="nav in navs" :key="nav"
                :class="{
                '<sm:w-hidden': !isIntersectingElement,
                }">
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
            <div class="sm:w-hidden">
            <span class="fm-toggle-nav" ><span class="fm-icon-nav"></span></span>
            </div>
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
<style scoped>
.fm-toggle-nav {
	color: #fff;
	display: inline-block;
	position: relative;
	width: 30px;
	height: 30px;
	cursor: pointer;
	vertical-align: top;
}

.fm-toggle-nav .fm-icon-nav {
	position: absolute;
	border-bottom: 2px solid;
	top: 50%;
	left: 0;
	width: 18px;
	height: 2px;
	margin-top: -1px;
}

.fm-toggle-nav .fm-icon-nav:before {
	content: '';
	position: absolute;
	top: -6px;
	left: 0;
	width: 100%;
	height: 2px;
	border-bottom: 2px solid;

}

.fm-toggle-nav .fm-icon-nav:after {
	content: '';
	position: absolute;
	top: 6px;
	left: 0;
	width: 100%;
	height: 2px;
	border-bottom: 2px solid;
}
</style>
<style>
.fm-hold{
    position: fixed;
    z-index: 9997;
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

@media (max-width: 639.9px){
    .fm-nav li.active {
        display: block;
    }
}
</style>