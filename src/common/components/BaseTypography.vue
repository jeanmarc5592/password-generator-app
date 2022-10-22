<template>
  <p :class="variant">
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
.heading-large {
  font-size: $heading-large;
  line-height: 43px;
  font-weight: bold;
}

.heading-medium {
  font-size: $heading-medium;
  line-height: 31px;
  font-weight: bold;
}

.body {
  font-size: $body;
  line-height: 23px;
  font-weight: bold;
}
</style>
