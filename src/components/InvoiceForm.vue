<template>
  <div>
    <form class="fm_invoice-form w-grid w-grid-cols-2 w-grid-rows-7">
      <div class="w-col-span-2">
        <div>購買商品：</div>
        <div class="w-flex w-justify-evenly w-items-center w-bg-white w-rounded-full w-py-2">
            <div>
                <input
                type="checkbox"
                id="fm1"
                value="爆汗１小時神補給包"
                v-model="products"
                class="w-mr-1"
                />
                <label class="w-text-lg" for="fm1">爆汗１小時神補給包</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="fm6"
                value="流汗６小時神捕水包"
                v-model="products"
                class="w-mr-1"
                />
                <label class="w-text-lg" for="fm6">流汗６小時神捕水包</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="fm8"
                value="耐力８小時神充電包"
                v-model="products"
                class="w-mr-1"
                />
                <label class="w-text-lg" for="fm8">耐力８小時神充電包</label>
            </div>
        </div>
      </div>

      <div class="w-col-span-2">
        從哪裡得知抽獎資訊：
        <input
          type="radio"
          id="rf1"
          value="社群平台"
          v-model="invoice.referral"
        />
        <label for="rf1">社群平台</label>
        <input
          type="radio"
          id="rf2"
          value="Youtube"
          v-model="invoice.referral"
        />
        <label for="rf2">Youtube</label>
        <input
          type="radio"
          id="rf3"
          value="網路廣告"
          v-model="invoice.referral"
        />
        <label for="rf3">網路廣告</label>
        <input
          type="radio"
          id="rf4"
          value="通路佈置物"
          v-model="invoice.referral"
        />
        <label for="rf4">通路佈置物</label>
        <input
          type="radio"
          id="rf5"
          value="官方網站"
          v-model="invoice.referral"
        />
        <label for="rf5">官方網站</label>
      </div>

      <div>
        姓名：
        <input type="text" name="name" v-model="invoice.name" required />
      </div>
      <div>
        手機號碼：
        <input type="text" name="phone" v-model="invoice.phone" required />
      </div>

      <div class="w-col-span-2">
        Email：
        <input type="email" name="email" v-model="invoice.email" required />
      </div>

      <div>
        發票號碼：
        <input
          type="text"
          name="invoice_number"
          v-model="invoice.invoice_number"
          required
        />
      </div>

      <div>
        發票日期：
        <input
          type="text"
          name="name"
          v-model="invoice.invoice_date"
          required
        />
      </div>

      <div>
        發票隨機碼：
        <input
          type="text"
          name="invoice_code"
          v-model="invoice.invoice_code"
          required
        />
      </div>

      <div>同意隱私權聲明</div>
      <div class="w-col-span-2">送出按鈕</div>
    </form>
  </div>
</template>
<script>
export default {
  data: () => ({
    userinfo: [],
    products: [],
    invoice: {
      cyb_id: "{{ customer.id  }}",
      cyb_email: "{{ customer.email  }}",
      products: "",
      referral: "",
      name: "",
      idcard: "",
      phone: "",
      email: "",
      invoice_number: "",
      invoice_date: "",
      invoice_code: "",
      token: "",
      userIP: "",
      userinfo: "",
    },
    noLogin: false,
    loading: false,
    errors: [],
  }),
};
</script>
<style scoped>
.fm_invoice-form input {
  width: auto;
}
.fm_invoice-form label {
  margin: 0;
}
</style>
