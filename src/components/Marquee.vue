<template>
        <div class="w-h-[30px] sm:w-h-[60px] w-flex w-justify-center w-items-center w-overflow-hidden w-relative">
            <div 
            :class="{ 'w-filter w-grayscale-100 w-invert-100' : white }"
            class="w-absolute w-inset-x-0 w-left-0 w-h-[10px] sm:w-h-[20px] w-flex">
              <img class="w-object-cover sm:w-object-contain" :src="getSrc(img)" />
              <img class="w-ml-20 w-object-cover sm:w-object-contain" :src="getSrc(img)" />
            </div>
        </div>
</template>

<script>
export default {

    props:{
        img: String,
        white: Boolean
    }
    
}
</script>