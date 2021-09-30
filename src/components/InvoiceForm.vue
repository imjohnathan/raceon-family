<template>
  <div>
    <form class="fm_invoice-form w-grid w-grid-cols-2 w-grid-rows-7">
      <div class="w-col-span-2">
        <div>購買商品：</div>
        <div class="w-flex w-justify-evenly w-items-center w-bg-white w-rounded-full w-py-2 w-text-lg">
            <div>
                <input
                type="checkbox"
                id="fm1"
                value="爆汗１小時神補給包"
                v-model="products"
                class="checkbox w-mr-1"
                />
                <label for="fm1">爆汗１小時神補給包</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="fm6"
                value="流汗６小時神捕水包"
                v-model="products"
                class="w-mr-1"
                />
                <label for="fm6">流汗６小時神捕水包</label>
            </div>
            <div>
                <input
                type="checkbox"
                id="fm8"
                value="耐力８小時神充電包"
                v-model="products"
                class="w-mr-1"
                />
                <label for="fm8">耐力８小時神充電包</label>
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
:root {
    --pc: 0 0% 100%;
    --s: 314 100% 47.1%;
    --sf: 314 100% 37.1%;
    --sc: 0 0% 100%;
    --a: 174 60% 51%;
    --af: 174 59.8% 41%;
    --ac: 0 0% 100%;
    --nc: 0 0% 100%;
}
:root {
    --p: 259 94.4% 51.2%;
    --pf: 259 94.3% 41%;
    --n: 219 14.1% 27.8%;
    --nf: 222 13.4% 19%;
    --b1: 0 0% 100%;
    --b2: 210 20% 98%;
    --b3: 216 12.2% 83.9%;
    --bc: 215 27.9% 16.9%;
    --in: 207 89.8% 53.9%;
    --su: 174 100% 29%;
    --wa: 36 100% 50%;
    --er: 14 100% 57.1%;
    --rounded-box: 1rem;
    --rounded-btn: 0.5rem;
    --rounded-badge: 1.9rem;
    --animation-btn: 0.25s;
    --animation-input: .2s;
    --padding-card: 2rem;
    --btn-text-case: uppercase;
    --btn-focus-scale: 0.95;
    --navbar-padding: .5rem;
    --border-btn: 1px;
    --tab-border: 1px;
    --tab-radius: 0.5rem;
    --tab-spacer: 0.5rem;
    --focus-ring: 2px;
    --focus-ring-offset: 2px;
    --glass-opacity: 30%;
    --glass-border-opacity: 10%;
    --glass-reflex-degree: 100deg;
    --glass-reflex-opacity: 10%;
    --glass-blur: 40px;
    --glass-text-shadow-opacity: 5%;
}
.fm_invoice-form input {
  width: auto;
}
.fm_invoice-form label {
  margin: 0;
}

.fm_invoice-form .checkbox {
    --bc: 215 27.9% 16.9%;
    --fg: 0 0% 100%;
    --chkbg: 215 27.9% 16.9%;
    --chkfg: 0 0% 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    --tw-border-opacity: 1;
    --tw-border-opacity: 0.2;
    border-color: hsla(var(--bc)/var(--tw-border-opacity,1));
    border-width: 1px;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: .5rem;
    border-style: solid;
}

</style>
