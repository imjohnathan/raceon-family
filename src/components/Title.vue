<template lang="">
  <div class="w-container w-mx-auto w-flex w-justify-between">
    <div class="w-w-1/4 w-bg-black w-h-auto w-flex w-justify-center w-items-center">
      <h1 class="w-bg-black w-text-4xl w-m-0 w-text-white w-font-normal w-italic">{{title}}</h1>
      </div>
    <div class="w-w-1/5"><img src="../assets/fm_sec_title.png" /></div>
    </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style lang="">
</style>