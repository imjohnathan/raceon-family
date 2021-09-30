<template>
  <div>
    <form class="fm_invoice-form w-grid w-grid-cols-2 w-grid-rows-7 w-gap-y-4 w-gap-x-10">
      <div class="w-col-span-2">
        <div class="form-title">
            <div>購買商品</div>
            <div class="w-text-red-500 w-font-bold">請選擇您購買的商品</div>
            </div>
        <div class="w-flex w-justify-between w-items-center w-flex-nowrap w-px-8 form-row ">
            <div class="form-box">
                <label>
                <input
                type="checkbox"
                value="爆汗１小時神補給包"
                v-model="products"
                class="checkbox"
                />
                <span class="label-text">爆汗１小時神補給包</span>
                </label>
            </div>
            <div class="form-box">
                <label>
                <input
                type="checkbox"
                value="流汗６小時神捕水包"
                v-model="products"
                class="checkbox"
                />
                <span class="label-text">流汗６小時神捕水包</span>
                </label>
            </div>
            <div class="form-box">
                <label>
                <input
                type="checkbox"
                value="耐力８小時神充電包"
                v-model="products"
                class="checkbox"
                />
                <span class="label-text">耐力８小時神充電包</span>
                </label>
            </div>
        </div>
      </div>

      <div class="w-col-span-2">
        <div class="form-title">從哪裡得知抽獎資訊</div>
         <div class="w-flex w-justify-between w-items-center w-flex-nowrap w-px-8 form-row">
             <div class="form-box">
                <label>
                <input
                  type="radio"
                  value="社群平台"
                  v-model="invoice.referral"
                  class="checkbox"
                />
                <span class="label-text">社群平台</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <input
                  type="radio"
                  value="Youtube"
                  v-model="invoice.referral"
                  class="checkbox"
                />
                <span class="label-text">Youtube</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <input
                  type="radio"
                  value="網路廣告"
                  v-model="invoice.referral"
                  class="checkbox"
                />
                <span class="label-text">網路廣告</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <input
                  type="radio"
                  value="通路佈置物"
                  v-model="invoice.referral"
                  class="checkbox"
                />
                <span class="label-text">通路佈置物</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <input
                  type="radio"
                  value="官方網站"
                  v-model="invoice.referral"
                  class="checkbox"
                />
                <span class="label-text">官方網站</span>
                </label>
            </div>
        </div>
      </div>

      <div>
        <div class="form-title">姓名</div>
        <div class="w-flex w-justify-center w-items-center form-row">
            <input type="text" name="name" v-model="invoice.name" required />
        </div>
      </div>


      <div>
        <div class="form-title">手機號碼</div>
        <div class="w-flex w-justify-center w-items-center form-row">
            <input type="text" name="phone" v-model="invoice.phone" required />
            </div>
      </div>

      <div class="w-col-span-2">
         <div class="form-title">Email</div>
         <div class="w-flex w-justify-center w-items-center form-row">
        <input type="email" name="email" v-model="invoice.email" required />
         </div>
      </div>

      <div>
        <div class="form-title">發票號碼</div>
        <div class="w-flex w-justify-center w-items-center form-row">
        <input
          type="text"
          name="invoice_number"
          v-model="invoice.invoice_number"
          required
        />
        </div>
      </div>

      <div>
          
        <div class="form-title">發票日期</div>
        <div class="w-flex w-justify-center w-items-center form-row">
            <input
          type="text"
          name="name"
          v-model="invoice.invoice_date"
          required
        /></div>
      </div>

      <div>
        <div class="form-title">發票隨機碼</div>
        <div class="w-flex w-justify-center w-items-center form-row">
        <input
          type="text"
          name="invoice_code"
          v-model="invoice.invoice_code"
          required
        />
        </div>
      </div>

      <div class="w-flex w-items-center">
            <div class="form-box w-mt-8">
                <label>
                <input
                type="checkbox"
                value="true"
                class="checkbox"
                />
                <span class="label-text">同意隱私權聲明以及活動規則辦法</span>
                </label>
            </div>
      </div>
      <div class="w-col-span-2 w-flex w-items-center">
         <button 
            class="
            hover:(w-bg-white) 
            w-border-1 w-border-solid w-border-black
            w-bg-transparent
            w-py-2 w-px-6 
            w-rounded-full 
            w-text-2xl 
            w-transition-all"
            type="submit" :disabled="loading || invalid"
            @click="submitCheck">送出資料</button>
      </div>
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
.fm_invoice-form label {
  margin: 0;
}

.fm_invoice-form .form-title {
 @apply w-text-lg w-mb-1 w-flex w-justify-between;
}
.fm_invoice-form .form-row {
 height: 60px;
 @apply w-bg-white w-rounded-full w-py-2;
}

.fm_invoice-form .form-box{
    display: flex;
    flex-direction: column;
}

.fm_invoice-form label {
    @apply 
    w-p-2
    w-flex w-cursor-pointer 
    w-items-center w-justify-center 
    w-select-none;
}
.fm_invoice-form .label-text {
     @apply  w-text-lg ;
    line-height: 1.25rem;
}
.fm_invoice-form .checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    --tw-border-opacity: 1;
    --tw-border-opacity: 0.2;
    border-color: #000;
    border-width: 1px;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    border-style: solid;
    @apply w-transition-all w-mr-2;
}
.fm_invoice-form .checkbox:checked{
    border-color: transparent;
    background-color: #000;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    @apply w-transition-all ;
}

.fm_invoice-form input[type='text'],
.fm_invoice-form input[type='email'] {
     @apply  w-p-0 w-h-full w-w-full w-mx-6 w-border-0 w-text-lg;
}

</style>
