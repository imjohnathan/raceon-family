<template>
    <div class="timing-bg">

        <div class="sm:(w-grid w-grid-cols-22) w-max-w-screen-xl w-mx-auto">
            <div class="sm:w-col-span-10 w-flex w-flex-col w-bg-[#b4cedd] sm:w-px-6 w-pt-10"><!--前-->
                <div class="w-flex w-justify-center w-pb-6"><!--標題-->
                <h2 class="timeing-title">行程前</h2>
                </div>

                <div class="w-flex w-flex-1 w-text-center <sm:w-px-4"><!--產品-->
                    <div class="w-grid w-grid-cols-2">
                        <div class="w-pr-3 sm:w-pr-6 w-border-0 w-border-r-1 w-border-solid w-border-black">
                            <h3 class="w-text-lg sm:w-text-2xl w-font-normal w-whitespace-nowrap">水動能電解質液</h3>
                            <p class="sm:(w-text-base w-leading-7) w-m-0">每包以250ml冷水或溫水沖泡，於行程、運動前30分鐘開始飲用。</p>
                        </div>
                        <div class="w-pl-3 sm:w-pl-6">
                            <h3 class="w-text-lg sm:w-text-2xl w-font-normal w-whitespace-nowrap">雙速咖啡因雙層錠</h3>
                            <p class="sm:(w-text-base w-leading-7) w-m-0">行程、運動前30-60分鐘補充，每次1錠，直接配水吞服，不建議咬碎。每錠最長維持8小時。</p>
                        </div>
                    </div>
                </div>

                <div class="sm:(w-grid w-grid-cols-2)"><!--包裝-->
                    <div class="<sm:w-hidden w-pr-6"><img src="../assets/fm_sec8_lcs.png" /></div>
                    <div class="<sm:w-hidden w-pl-6"><img src="../assets/fm_sec8_dc.png" /></div>
                    <div class="sm:w-hidden w-mt-12"><img src="../assets/fm_sec8_before_m.png" /></div>
                </div>

            </div>

            <div class="<sm:w-hidden w-bg-[#9dc1d5]"><img class="!w-h-full" src="../assets/fm_sec8_divide_1.png" /></div>

            <div class="sm:w-col-span-5 w-flex w-flex-col w-bg-[#9dc1d5] sm:w-px-6 w-pt-10 <sm:w-mt-[-1px]"><!--中-->

                <div class="w-flex w-justify-center w-pb-6"><!--標題-->
                <h2 class="timeing-title">行程中</h2>
                </div>

                <div class="w-flex w-flex-1 w-text-center <sm:w-px-4"><!--產品-->
                    <div>
                    <h3 class="w-text-lg sm:w-text-2xl w-font-normal w-whitespace-nowrap">水動能電解質液</h3>
                    <p class="sm:(w-text-base w-leading-7) w-m-0">每包以250ml冷水或溫水沖泡，每1-2小時使用1包，可依照行程或運動強度調整使用頻率。</p>
                    </div>
                </div>

                <div><!--包裝-->
                <img class="<sm:w-hidden" src="../assets/fm_sec8_lcs.png" />
                <img class="sm:w-hidden w-mt-12" src="../assets/fm_sec8_ongoing_m.png" />
                </div>
            </div>

            <div class="<sm:w-hidden w-bg-[#80a7bd]"><img class="!w-h-full" src="../assets/fm_sec8_divide_2.png" /></div>

            <div class="sm:w-col-span-5 w-flex w-flex-col w-bg-[#80a7bd] sm:w-px-6 w-pt-10 <sm:w-mt-[-1px]"><!--後-->

                <div class="w-flex w-justify-center w-pb-6"><!--標題-->
                <h2 class="timeing-title">行程後</h2>
                </div>

                <div class="w-flex w-flex-1 w-text-center <sm:w-px-4"><!--產品-->
                    <div>
                        <h3 class="w-text-lg sm:w-text-2xl w-font-normal w-whitespace-nowrap">環原力維生素C</h3>
                        <p class="sm:(w-text-base w-leading-7) w-m-0">行程、運動後或日常使用，每包以200-400ml水，可依照個人口感調整水量。</p>
                    </div>
                </div>

                <div><!--包裝-->
                <img class="<sm:w-hidden" src="../assets/fm_sec8_vc.png" />
                <img class="sm:w-hidden w-mt-12" src="../assets/fm_sec8_after_m.png" />
                </div>


            </div>

        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.timing-bg{
    background-image:  linear-gradient(to right, #b4cedd 50%, #80a7bd 50%);
}
.timeing-title{
    @apply w-inline-block w-text-4xl w-font-bold w-transform w--skew-x-12 ;
    border: 0;
    border-bottom: 6px solid;
    border-image: linear-gradient(to right, #f9dd11 33%,#0084cd 33%,#0084cd 66%, #d30012 66%)5;
}
</style>