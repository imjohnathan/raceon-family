<template>
  <div :ref="sentinalName" class="w-w-full w-h-full w-absolute w-inset-0 w-opacity-0 w--z-1" />
</template>

<script>
export default {
  name: "IntersectionObserver",
  props: {
    sentinalName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isIntersectingElement: false,
    };
  },
  watch: {
    isIntersectingElement: function (value) {
      this.$emit("on-intersection-element", value);
    },
  },
  mounted() {
    const sentinal = this.$refs[this.sentinalName];

    const handler = (entries) => {
      if (entries[0].isIntersecting) {
        this.isIntersectingElement = true;
      } else {
        this.isIntersectingElement = false;
      }
    };

    const observer = new window.IntersectionObserver(handler);

    observer.observe(sentinal);
  },
};
</script>
