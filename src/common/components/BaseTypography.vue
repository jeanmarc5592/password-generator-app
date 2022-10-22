<template>
  <p class="paragraph" :class="variant">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "body",
    },
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  font-weight: bold;
  text-overflow: clip;
  overflow: auto;
  white-space: nowrap;
}

::-webkit-scrollbar {
  height: 6px;
}

::-webkit-scrollbar-track {
  background: $color-black-dark;
}

::-webkit-scrollbar-thumb {
  background: $color-grey-dark;
}
.heading-large {
  font-size: $heading-large;
  line-height: 43px;
}

.heading-medium {
  font-size: $heading-medium;
  line-height: 31px;
}

.body {
  font-size: $body;
  line-height: 23px;
}
</style>
