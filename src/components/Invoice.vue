<template>
  <div>
    <div class="w-bg-[#e0e0e0]">
        <div class="w-container w-mx-auto w-flex <md:w-flex-col w-p-6 md:w-p-10">
          <InvoiceForm class="md:(w-w-3/4 w-px-8) <md:w-py-6" />
          <div class="md:w-w-1/4">
            <!--發票示意-->
            <div class="w-px-6 <sm:(w-pt-6 w-px-8)">
              <img src="../assets/fm_invoice_sample.png" />
              <div class="w-text-center w-text-lg w-pt-4">發票示意</div>
              <p>於實體通路購買並使用載具者請向業者索取交易明細。<br>建議可將購買發票拍照留存。</p>
            </div>
            <hr class="w-mx-4 w-bg-black" />
            <div>
              <h4 class="w-text-center w-text-xl w-font-normal">
                月月抽 Apple Watch 7
              </h4>
              <img class="w-px-12 sm:w-px-6" src="../assets/fm_sec1_aw.png" />
            </div>
          </div>
        </div>
    </div>

    <div class="w-container w-mx-auto"><!--活動辦法-->
        <div class="w-py-10 w-px-6 sm:(w-py-20 w-px-24)">

            <h3 class="w-text-2xl sm:w-text-4xl w-mb-8">活動辦法</h3>

            <InvoiceParagraph :invoice-rules="invoice_rule.rules" />


        </div>          
    </div>

   <div class="prize-bg"><!--活動獎品-->
        <div class="w-container w-mx-auto w-grid sm:w-grid-cols-4">
            <div class="<sm:w-hidden"></div>
                <div class="w-bg-[#b4cedd] w-p-6 <sm:w-col-span-2">
                    <div class="w-text-center w-text-3xl">頭獎</div>
                    <img class="<sm:w-px-20" src="../assets/fm_sec1_aw.png"/>
                    <div class="w-text-center">
                        <span class="w-text-xs w-whitespace-nowrap w-bg-white w-rounded-full w-py-1 w-px-3 w-font-medium">Apple Watch 7 40mm GPS</span>
                    </div>
                </div>
                <div class="w-bg-[#9dc1d5] w-p-6 <sm:w-col-span-2">
                    <div class="w-text-center w-text-3xl">貳獎</div>
                    <img class="<sm:w-px-20" src="../assets/fm_vivosmart4.png"/>
                    <div class="w-text-center">
                        <span class="w-text-xs w-whitespace-nowrap w-bg-white w-rounded-full w-py-1 w-px-3 w-font-medium">Garmin vívosmart 4</span>
                    </div>
                </div>
        
                <div class="<sm:w-hidden"></div>
        </div>
    </div>

    <Marquee img="fm_sec7_logo.png" />

    <div class="w-bg-[#e0e0e0]"><!--抽獎說明、注意事項-->
        <div class="w-container w-mx-auto w-py-10 w-px-6 sm:(w-py-20 w-px-24)">

            <h4 class="<sm:w-text-xl">抽獎說明</h4>
            <p class="w-text-sm sm:w-text-base">發票登錄期間以及抽獎日期（登錄發票截止時間以本網站系統主機時間為準）：</p>

                <div class="w-overflow-x-auto">
                    <table class="table table-striped w-text-center sm:w-text-base">
                    <thead>
                    <tr>
                        <th scope="col">抽獎</th>
                        <th scope="col">發票最後登錄時間</th>
                        <th scope="col">抽獎日期</th>
                        <th scope="col">得獎者回覆日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="w-font-bold">第一抽</td>
                        <td>110/10/31(一) 23:59</td>
                        <td>110/11/09(二)</td>
                        <td>110/11/16(二)前</td>
                    </tr>
                    <tr>
                        <td class="w-font-bold">第二抽</td>
                        <td>110/11/30(二) 23:59</td>
                        <td>110/12/08(三)</td>
                        <td>110/12/15(三)前</td>
                    </tr>
                    <tr>
                        <td class="w-font-bold">第三抽</td>
                        <td>111/01/03(一) 23:59</td>
                        <td>111/01/11(二)</td>
                        <td>111/01/18(二)前</td>
                    </tr>
                    </tbody>
                    </table>
                </div>

                <p class="w-text-sm sm:w-text-base">得獎名單於抽獎後3日內於本頁公佈。</p>

            <InvoiceParagraph :invoice-rules="invoice_rule.notices" />


        </div>        
    </div>
   <div class="w-container w-mx-auto">
        

        <div class="w-py-10 w-px-6 sm:(w-py-20 w-px-24)">

             <h3 class="w-text-2xl sm:w-text-4xl w-mb-8">中獎名單</h3>



                <h4 class="<sm:w-text-lg w-text-center w-p-8  w-italic w-text-gray-500">
                    尚未公布敬請期待。
                    </h4>




            <div class="w-overflow-x-auto">
                <table class="winner-table w-table w-border-collapse w-w-full w-text-center sm:w-text-base w-mb-8">
                <thead class="sm:w-text-lg">
                <tr>
                    <th>第一抽</th>
                    <th>姓名</th>
                    <th>電話</th>
                    <th>發票號碼</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Apple Watch 7 40mm GPS 1組</td>
                    <td>陳OO</td>
                    <td>09XXXXXXXX</td>
                    <td>TU383585</td>
                </tr>
                </tbody>
                 </table>
            </div>


         </div>   



    </div>
  </div>
</template>
<script setup>
import InvoiceForm from "./InvoiceForm.vue";
import InvoiceParagraph from "./InvoiceParagraph.vue";
import Marquee from "./Marquee.vue";
import DB from "../db/db.json";
</script>

<script>
export default {
  data: () => ({
      invoice_rule : DB.invoice
  }),
  component: {
    InvoiceForm,
    InvoiceParagraph,
    Marquee
  },
};
</script>
<style scoped>
.table-striped tbody tr:nth-of-type(odd) {
    background-color: transparent;
}
.table-striped tbody tr:nth-of-type(even),
.table-striped thead {
    background-color: #fff;
}

.table th, .table td {
    border-top: 1px solid #bababa;
}
.table thead th {
    border-bottom: 1px solid #bababa;
}
table.table{
    border: #bababa solid 1px;
}
.winner-table td,
.winner-table th
{
    @apply w-p-4 ;
}

.winner-table tbody tr{
    border-top: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
}

.winner-table tbody td{
    @apply w-py-8
}
.prize-bg{
    background-image: linear-gradient(to right, #b4cedd 50%, #9dc1d5 50%);
}

@media (max-width: 639.9px){
    .table th, .table td {
        padding: .4rem;
    }
}
</style>