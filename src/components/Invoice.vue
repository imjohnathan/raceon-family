<template>
    <div class="w-container w-mx-auto">

        <div class="w-flex w-p-10 w-bg-[#e0e0e0]">
            <InvoiceForm class="w-w-3/4 w-p-8" />
            <div class="w-w-1/4"><!--發票示意-->

                <div>
                    <img src="../assets/fm_invoice_sample.png"/>
                    <div class="w-text-center w-text-lg w-pt-4">發票示意</div>
                </div>
                <hr class="w-mx-6 w-bg-black" />
                <div>
                    <h4 class="w-text-center w-text-xl w-font-normal">月月抽Apple Watch 7</h4>
                    <img class="w-px-6" src="../assets/fm_sec1_aw.png"/>
                </div>


            </div>
        </div>

        <div><!--活動辦法-->
        </div>

        <div><!--抽獎說明、注意事項-->
        </div>

        <div><!--中獎名單-->
        </div>
    </div>
</template>
<script setup>
import InvoiceForm from "./InvoiceForm.vue";
</script>

<script>
export default {
  component: {
   InvoiceForm
  },
}
</script>
<style>
    
</style>