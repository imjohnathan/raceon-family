<template lang="">
  <div>
    <div class="w-relative">
      <img
        class="w-absolute w-w-full w-h-full w-inset-0 w-z-0 w-object-cover"
        src="../assets/fm_sec2_bg.png"
      />
      <article class="w-text-center w-py-30">
        <p class="w-m-0 w-text-2xl w-leading-loose w-font-normal">
          戶外室內運動、燒腦高壓工作、親子教養活動、城市通勤奔波……<br />
          每一天的生活就是一場場耐力賽，<br />
          <strong
            >你身體所需的 <span class="w-text-color-[#f0d500]">保水力</span>、
            <span class="w-text-color-[#0096df]">專注力</span>、
            <span class="w-text-color-[#e50012]">修護力</span>足夠嗎？<br />
            讓科學的醫學級補給，給你最有力的即時救援，</strong
          ><br />
          為上場前的你快補快充，成就每一天的出色表現！
        </p>
      </article>
    </div>
    <div class="w-bg-black">
      <div class="w-container w-mx-auto w-flex">
        <div class="w-w-1/12">
          <img
            class="w-pt-8 w-px-6"
            src="../assets/fm_sec3_logo.png"
            alt="RACE ON 鋭速運動醫學"
          />
        </div>
        <div class="w-w-11/12">
          <div class="w-aspect-w-16 w-aspect-h-9">
            <iframe
              width="100%"
              :src="video"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        video: String
    }
};
</script>
<style lang=""></style>
