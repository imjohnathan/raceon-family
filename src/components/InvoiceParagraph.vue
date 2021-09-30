<template>
    <div v-for="(rule,key) in invoiceRules" :key="rule" 
    :class="{'w-mb-8': key+1 != invoiceRules.length}">
        <h4>{{rule.title}}</h4>
        <ul 
        :class="{
            'w-list-none': !rule.style ,
            'w-list-decimal': rule.style == 'decimal',
            'w-list-disc': rule.style == 'disc'
            }"
        class="w-text-base w-leading-loose">
            <template v-for="content in rule.content" :key="content">
            <li class="w-mb-1" v-html="content"></li>
            </template>
        </ul>

    </div>
</template>
<script>
export default {
    props: {
      invoiceRules: Array
  },
}
</script>
<style lang="">
    
</style>