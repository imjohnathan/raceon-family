<template>
  <div>
    <Form class="fm_invoice-form w-grid w-gap-y-4 md:(w-grid-cols-2 w-gap-y-4 w-gap-x-10)"
    v-slot="{ isSubmitting, meta }"
     @submit="submitInvoice">

      <div class="md:w-col-span-2 w-flex w-flex-col w-justify-center">
        <div class="form-title">
            <div>購買商品</div>
            <ErrorMessage class="form-error" name="products" as="div"/>
            </div>
         <div class="
         w-flex 
         w-justify-between
         md:w-items-center
         <md:(w-flex-col w-items-start) 
         w-px-8 form-row">
            <div class="form-box">
                <label>
                <Field
                name="products"
                type="checkbox"
                value="爆汗１小時神補給包"
                v-model="products"
                class="checkbox"
                rules="length:1"
                />
                <span class="label-text">爆汗１小時神補給包</span>
                </label>
            </div>
            <div class="form-box">
                <label>
                <Field
                name="products"
                type="checkbox"
                value="流汗６小時神捕水包"
                v-model="products"
                class="checkbox"
                rules="length:1"
                />
                <span class="label-text">流汗６小時神捕水包</span>
                </label>
            </div>
            <div class="form-box">
                <label>
                <Field
                name="products"
                type="checkbox"
                value="耐力８小時神充電包"
                v-model="products"
                class="checkbox"
                rules="length:1"
                />
                <span class="label-text">耐力８小時神充電包</span>
                </label>
            </div>
        </div>
      </div>

      <div class="md:w-col-span-2 w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>從哪裡得知抽獎資訊</div>
          <ErrorMessage class="form-error" name="referral" as="div"/></div>
         <div class="
         w-flex 
        w-flex-wrap w-items-start
         md:(w-items-center w-justify-between)
         w-px-8 form-row">
             <div class="form-box">
                <label>
                <Field
                  name="referral"
                  type="radio"
                  value="社群平台"
                  v-model="invoice.referral"
                  class="checkbox"
                  rules="required"
                />
                <span class="label-text">社群平台</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <Field
                  name="referral"
                  type="radio"
                  value="Youtube"
                  v-model="invoice.referral"
                  class="checkbox"
                  rules="required"
                />
                <span class="label-text">Youtube</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <Field
                  name="referral"
                  type="radio"
                  value="網路廣告"
                  v-model="invoice.referral"
                  class="checkbox"
                  rules="required"
                />
                <span class="label-text">網路廣告</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <Field
                  name="referral"
                  type="radio"
                  value="通路佈置物"
                  v-model="invoice.referral"
                  class="checkbox"
                  rules="required"
                />
                <span class="label-text">通路佈置物</span>
                </label>
            </div>
             <div class="form-box">
                <label>
                <Field
                  name="referral"
                  type="radio"
                  value="官方網站"
                  v-model="invoice.referral"
                  class="checkbox"
                  rules="required"
                />
                <span class="label-text">官方網站</span>
                </label>
            </div>
        </div>
      </div>

      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>姓名</div>
          <ErrorMessage class="form-error" name="name" as="div"/>
          </div>
        <div class="w-flex w-justify-center w-items-center form-row">
            <Field 
            type="text" name="name" v-model="invoice.name" 
            rules="required" required />
        </div>
      </div>


      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>手機號碼</div>
          <ErrorMessage class="form-error" name="phone" as="div"/>
          </div>
        <div class="w-flex w-justify-center w-items-center form-row">
            <Field type="text" name="phone" v-model="invoice.phone" 
            :rules="{ regex: /^09[0-9]{8}$/, required }"
            required />
            </div>
      </div>

      <div class="md:w-col-span-2 w-flex w-flex-col w-justify-center">
         <div class="form-title">
           <div>Email</div>
           <ErrorMessage class="form-error" name="email" as="div"/>
           </div>
         <div class="w-flex w-justify-center w-items-center form-row">
        <Field type="email" name="email" v-model="invoice.email" rules="required|email" required />
         </div>
      </div>

      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>發票號碼<small>（範例: TT11223344）</small></div>
          <ErrorMessage class="form-error" name="invoice_number" as="div"/>
          </div>
        <div class="w-flex w-justify-center w-items-center form-row">
        <Field
          type="text"
          name="invoice_number"
          v-model="invoice.invoice_number"
          :rules="{ regex: /^[A-Z]{2}[0-9]{8}$/, required }"
          :value="invoice.invoice_number.toUpperCase()"
          @input="invoice.invoice_number = $event.target.value.toUpperCase()"
          required
        />
        </div>
      </div>

      <div class="w-flex w-flex-col w-justify-center">
          
        <div class="form-title">
          <div>發票日期</div>
          <ErrorMessage class="form-error" name="invoice_date" as="div"/>
          </div>
          <DatePicker class="w-flex w-justify-center w-items-center form-row" v-model="invoice.invoice_date" :model-config="{ type: 'string', mask: 'YYYY/MM/DD'}">
            <template v-slot="{ inputValue, togglePopover }">
           <Field
          type="text"
          name="invoice_date"
          v-model="invoice.invoice_date"
          :rules="{ regex: /^2021\/(10|11|12)\/[0-3]{1}[0-9]{1}$/, required }"
           @click="togglePopover()"
           :value="inputValue"
          readonly required
        />
            </template>
        </DatePicker>
      </div>

      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>發票隨機碼</div>
          <ErrorMessage class="form-error" name="invoice_code" as="div"/>
        </div>
        <div class="w-flex w-justify-center w-items-center form-row">
        <Field
          type="text"
          name="invoice_code"
          v-model="invoice.invoice_code"
          rules="digits:4|required"
          required
        />
        </div>
      </div>

      <div class="w-flex w-items-center <md:w-justify-center">
            <div class="form-box md:w-mt-8">
                <label>
                <Field
                name="terms"
                type="checkbox"
                value="1"
                class="checkbox"
                rules="required"
                />
                <span class="label-text">同意隱私權聲明以及活動規則辦法</span>
                </label>
                <ErrorMessage class="form-error" name="terms" />
            </div>
      </div>
      <div class="md:w-col-span-2 w-flex w-items-center <md:(w-justify-center w-flex-col)">
         <button 
            class="
            w-border-1 w-border-solid w-border-black
            w-bg-transparent
            w-rounded-full 
            w-py-1 w-px-6 w-text-lg 
            md:(w-py-2 w-text-2xl) 
            w-transition-all"
            type="submit"

            :class="
            {'w-animate-pulse' : isSubmitting,
            '!w-bg-white w-cursor-not-allowed' : isSubmitting||!meta.valid,
            'hover:(w-bg-white) w-animate-none' : !isSubmitting||meta.valid
            }
            "
            :disabled="isSubmitting||!meta.valid"
           >送出資料</button>
      <div 
      class="w-ml-6 w-transition-all w-duration-500 <md:w-mt-6"
      :class="{
        'w-opacity-0' : !messages.lenth,  
        'w-text-red-500 w-font-bold w-opacity-100' : messages.result == 'error',  
        'w-text-green-500 w-font-bold w-opacity-100' : messages.result == 'success'}" 
      v-show="messages">{{messages.msg}}</div>

      </div>

    </Form>
             <button 
            type="submit"
            @click="submitInvoice">測試送出</button>
    <pre>{{$data}} </pre>
  </div>
</template>
<script setup>
import { configure, Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import { required, email, length, regex, digits } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

configure({
  // Generates an English message locale generator
  generateMessage: localize('zh_TW', {
        "names": {
          "products": '購買商品',
          "referral": "從哪裡得知抽獎資訊",
          "name": '姓名',
          "phone": "手機號碼",
          "email": 'E-mail',
          "invoice_number": '發票號碼',
          "invoice_date": '發票日期',
          "invoice_code": '發票隨機碼',
          "terms": '活動政策',
          
        },
        "fields": {
              "invoice_number": {
                "regex" : '請填入正確10碼（範例: TT11223344）',
              }
            },
        "messages": {
          "digits": "須為 0:{length} 位數字",
          "email": "須為有效的電子信箱",
          "length": "{field}為必填",
          "regex": "格式錯誤",
          "required": "{field}為必填",
            },
  }),
});

defineRule('required', required);
defineRule('email', email);
defineRule('length', length);
defineRule('regex', regex);
defineRule('digits', digits);
</script>
<script>
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data: () => ({
    userinfo: [],
    products: [],
    invoice: {
      products: "",
      referral: "",
      name: "",
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
    messages: [],
    formID:"AKfycbxx6GorDN-3CnZFCH193jinDAXMwB5PXMQfHgGdJA4WzpRAahKtvqmQKpdCF3rPnh6N"
  }),
  methods:{
      async GetUserInfo(){
            // GET request using fetch with async/await
            const userinfo = {};
            const response = await this.axios.get("https://www.cloudflare.com/cdn-cgi/trace");
            const resultArr = response.data.split('\n');
              for(var i = 0, len = resultArr.length; i < len; i++)	{
                var tempArr = resultArr[i].split('=');
                userinfo[tempArr[0]] = tempArr[1];
              }
              this.userinfo = userinfo;
      },
       async submitInvoice(){

          try{
                this.messages = [] //清空訊息
                this.loading = true
                //等 recaptcha 載入
                await this.$recaptchaLoaded()

                //資料處理
                const select_products = this.products.join(',')
                this.invoice.userinfo = JSON.stringify(this.userinfo)
                this.invoice.products = JSON.stringify(select_products).replaceAll('"', '')
                this.invoice.userIP = this.userinfo.ip
                
                // 獲取recaptcha V3 token
                const token = await this.$recaptcha('submit')
                this.invoice.token = token

            
                const optionAxios = {headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Accept' : '*/*'
                            }
                        }
                /*
                const formData = new FormData()
                Object.keys(this.invoice).forEach(key => {
                  formData.append(key, this.invoice[key])
                })
                const parameter = {'parameter' : this.invoice}
                */
               
                //送出表單
                const response = await this.axios.post(`https://script.google.com/macros/s/${this.formID}/exec`, this.invoice, optionAxios)
                 console.log(response)
                 this.loading = false    
                 this.invoice.products = '';
                 this.invoice.token = '';
                if(response.data.result == 'error'){
                  throw response.data // 產生例外
                }
                //成功送出
                this.products = []
                this.invoice.invoice_number = ''
                this.invoice.invoice_code = ''
                this.invoice.invoice_date = ''
                this.messages = {'result' : 'success', msg: '資料成功送出！'} ;


          }catch(err){
              this.messages = err
              this.loading = false
          }
            
        },
  },
  mounted:function() {
    this.GetUserInfo()
  }

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
 min-height: 60px;
 @apply w-bg-white w-rounded-4xl w-py-2;
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

.fm_invoice-form .form-error{
  font-size: 12px;
 @apply w-text-red-500 w-font-bold w-transition-all;
}

@media (max-width: 639.9px){

    .fm_invoice-form .form-title {
    @apply w-text-base;
    }

    .fm_invoice-form .label-text {
        @apply  w-text-sm ;
        line-height: 1.25rem;
    }

}

</style>
