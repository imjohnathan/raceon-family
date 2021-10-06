<template>
  <div>
    <Form class="fm_invoice-form w-grid w-gap-y-4 md:(w-grid-cols-2 w-gap-y-4 w-gap-x-10)"
    v-slot="{ isSubmitting, errors }" @submit="submitInvoice">

      <div class="md:w-col-span-2 w-flex w-flex-col w-justify-center">
        <div class="form-title">
            <div>購買商品</div>
            <ErrorMessage class="form-error" name="products" as="div"/>
            </div>
         <div 
         :class="{ '!w-bg-red-100' : errors.products }"
         class="
         w-transition-all
         w-flex 
         w-justify-between
         md:w-items-center
         <md:(w-flex-col w-items-start) 
         w-px-8 <md:w-py-2 form-row">
            <div class="form-box">
                <label>
                <Field
                name="products"
                type="checkbox"
                value="爆汗１小時神補給包"
                v-model="products"
                class="checkbox"
                rules="checkbox"
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
                rules="checkbox"
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
                rules="checkbox"
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
         <div 
         :class="{ '!w-bg-red-100' : errors.referral }"
         class="
         w-transition-all
         w-flex 
        w-flex-wrap w-items-start
         md:(w-items-center w-justify-between)
         w-px-8 <md:w-py-2 form-row">
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
        <div 
        :class="{ '!w-bg-red-100' : errors.name }"
        class="w-transition-all w-flex w-justify-center w-items-center form-row">
            <Field 
            :class="{ '!w-bg-red-100' : errors.name }"
            class="w-transition-all"
            placeholder="與身分證相同之姓名，需與領獎人一致"
            type="text" name="name" v-model="invoice.name" 
            rules="required" required />
        </div>
      </div>

<!----
       <Field class="w-flex w-flex-col w-justify-center" 
       name="name" 
       v-model="invoice.name" 
       rules="required"
       as="div" v-slot="{ field, meta }">
        <div class="form-title">
          <div>姓名</div>
          <ErrorMessage class="form-error" name="name" as="div"/>
          </div>
        <div class="w-flex w-justify-center w-items-center form-row" :class="{'!w-bg-red-300': !meta.valid  }">
            <input 
            type="text"  required v-bind="field" :class="{'!w-bg-red-300': !meta.valid  }">
        </div>
      </Field>
---->

      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>手機號碼</div>
          <ErrorMessage class="form-error" name="phone" as="div"/>
          </div>
        <div 
        :class="{ '!w-bg-red-100' : errors.phone }"
        class="w-transition-all w-flex w-justify-center w-items-center form-row">
            <Field type="text" name="phone" v-model="invoice.phone" 
            :class="{ '!w-bg-red-100' : errors.phone }"
            class="w-transition-all"
            placeholder="請輸入正確手機號碼，範例: 09XXXXXXXX"
            :rules="{ regex: /^09[0-9]{8}$/, required }"
            required />
            </div>
      </div>

      <div class="md:w-col-span-2 w-flex w-flex-col w-justify-center">
         <div class="form-title">
           <div>Email</div>
           <ErrorMessage class="form-error" name="email" as="div"/>
           </div>
         <div 
         :class="{ '!w-bg-red-100' : errors.email }"
         class="w-transition-all w-flex w-justify-center w-items-center form-row">
        <Field type="email" 
        :class="{ '!w-bg-red-100' : errors.email }"
        class="w-transition-all"
        placeholder="請輸入有效Email，中獎將寄送通知到此Email"
        name="email" v-model="invoice.email" rules="required|email" required />
         </div>
      </div>

      <div class="w-flex w-flex-col w-justify-center">
        <div class="form-title">
          <div>發票號碼</div>
          <ErrorMessage class="form-error" name="invoice_number" as="div"/>
          </div>
        <div 
        :class="{ '!w-bg-red-100' : errors.invoice_number }"
        class="w-transition-all w-flex w-justify-center w-items-center form-row">
        <Field
          :class="{ '!w-bg-red-100' : errors.invoice_number }"
          class="w-transition-all"
          type="text"
          name="invoice_number"
          placeholder="英文加數字共10碼，範例: RO16816816"
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
          <DatePicker 
          :class="{ '!w-bg-red-100' : errors.invoice_date }" 
          class="w-transition-all w-flex w-justify-center w-items-center form-row" 
          v-model="invoice.invoice_date" 
          :model-config="{ type: 'string', mask: 'YYYY/MM/DD'}"
            :available-dates='{
                start: new Date(2021, 9, 5),
                end: new Date(2022, 0, 0)
            }'>
            <template v-slot="{ inputValue, togglePopover }">
           <Field
          :class="{ '!w-bg-red-100' : errors.invoice_date }" 
          class="w-transition-all"
          placeholder="僅接受活動日期內的發票"
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
        <div 
        :class="{ '!w-bg-red-100' : errors.invoice_code }" 
        class="w-transition-all w-flex w-justify-center w-items-center form-row">
        <Field
          :class="{ '!w-bg-red-100' : errors.invoice_code }" 
          class="w-transition-all"
          placeholder="共4碼數字，範例: 1688"
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
      <div class="md:w-col-span-2 w-flex w-items-center <md:(w-justify-center w-flex-col w-space-y-4) w-mt-4 md:w-space-x-4">
         <button 
            class="
            w-border-1 w-border-solid w-border-black
            w-bg-transparent
            w-rounded-full 
            w-py-1 w-px-6 w-text-2xl
            md:(w-py-2) 
            w-transition-all"
            type="submit"

            :class="
            {'!w-bg-white w-cursor-not-allowed w-animate-pulse' : isSubmitting,
            'hover:(w-bg-white) w-animate-none' : !isSubmitting
            }
            "
            @click="messages = []"
            :disabled="isSubmitting"
           >送出資料</button>
         <div>
             <i v-show="isSubmitting" class="gg-spinner"></i>
             </div>

      <div 
      class="w-font-bold"
      :class="{
        'w-text-red-500' : messages.result == 'error' || Object.keys(errors).length,  
        'w-text-green-500' : messages.result == 'success'}" 
      v-show="Object.keys(messages).length||Object.keys(errors).length">{{messages.msg}}<span v-if="!Object.keys(messages).length&&Object.keys(errors).length">表單有錯誤，請確認。</span></div>

      </div>
    </Form>
    <!--
  <button 
            type="submit"
            @click="submitInvoice">測試送出</button>
    <pre>{{$data}} </pre>-->
  </div>
</template>
<script setup>
import { configure, Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import { required, email, regex, digits } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { DatePicker } from 'v-calendar';


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
              "invoice_date": {
                "regex" : '日期不在活動範圍內',
              },
              "terms": {
                "required" : '需同意活動政策才可參與',
              }
            },
        "messages": {
          "digits": "須為 0:{length} 位數字",
          "email": "須為有效的電子信箱",
          "regex": "格式錯誤",
          "required": "{field}為必填",
            },
  }),
});

defineRule('required', required);
defineRule('email', email);
defineRule('regex', regex);
defineRule('digits', digits);

defineRule('checkbox', value => {

    if (value && value.length) {
    return true;
    }

  return '需至少選擇一項產品';
});

</script>
<script>
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
    DatePicker,
  },
  data: () => ({
    userinfo: [],
    products: [],
    invoice: {
      cyb_id:'',
      cyb_email: '',
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
    formID:"AKfycbz4TFwUcW2kZnxVT5tgTLOoMZa2KyCsOCWhLCRcsHlaSoaHSqgViiz91L3100gbmjwb"
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
      async GetCybUser(){
            const cyb_response = await this.axios.get("https://www.raceon.com.tw/pages/api_customer_detail.json?"+Math.random());
            this.invoice.cyb_id = cyb_response.data.ExternalId;
            this.invoice.cyb_email = cyb_response.data.email;
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
                 //console.log(response)
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
                this.messages = {'result' : 'success', msg: '資料成功送出！若有多張發票請繼續登錄。'} ;


          }catch(err){
              this.messages = err
              this.loading = false
          }
            
        },
  },
  mounted:function() {
    this.GetUserInfo()
    this.GetCybUser()
  },
  beforeMount: function() {
    if (typeof fm_data.formID !== 'undefined') {
        this.formID = fm_data.formID;
    }

  }  
};
</script>
<style scoped>
.fm_invoice-form label {
  margin: 0;
}

.fm_invoice-form .form-title {
 @apply w-text-base w-mb-1 w-flex w-justify-between;
}
.fm_invoice-form .form-row {
 min-height: 50px;
 @apply w-bg-white w-rounded-4xl;
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
     @apply  w-text-base ;
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

.gg-spinner {
    transform: scale(var(--ggs,1))
}
.gg-spinner,
.gg-spinner::after,
.gg-spinner::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px
}
.gg-spinner::after,
.gg-spinner::before {
    content: "";
    position: absolute;
    border-radius: 100px
}
.gg-spinner::before {
    animation: spinner 1s
    cubic-bezier(.6,0,.4,1) infinite;
    border: 3px solid transparent;
    border-top-color: currentColor
}
.gg-spinner::after {
    border: 3px solid;
    opacity: .2
}
@keyframes spinner {
    0% { transform: rotate(0deg) }
    to { transform: rotate(359deg) }
}

@media (max-width: 639.9px){

    .fm_invoice-form .form-title {
    @apply w-text-base;
    }

    .fm_invoice-form .label-text {
        @apply  w-text-sm ;
        line-height: 1.25rem;
    }

.fm_invoice-form input[type='text'],
.fm_invoice-form input[type='email'] {
     @apply  w-p-0 w-h-full w-w-full w-mx-6 w-border-0 w-text-base;
}

}

</style>
