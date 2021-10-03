<template>
    <div>
    <nav class="w-bg-black">
        <div class="w-container w-mx-auto w-flex w-justify-center w-items-center">
            <ul
            class="
                w-list-none
                w-m-0
                w-p-0
                w-text-base
                sm:w-text-xl
                w-text-white
                w-italic
                w-py-4
                sm:w-py-6
                w-font-medium
                w-whitespace-nowrap
                <sm:w-overflow-auto
            "
            >

            <li v-for="nav in navs" :key="nav" class="w-inline-block">
                <a 
                class="w-text-white w-px-2 w-py-3 sm:(w-px-4 w-py-6) hover:w-text-gray-400" 
                :href="nav.link"
                >{{nav.title}}</a
                >
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>
<script setup>
//Data
import DB from "../db/db.json";

</script>
<script>
export default {
  data: () => ({
      navs : DB.nav
  }),
}
</script>
<style lang="">
    
</style>