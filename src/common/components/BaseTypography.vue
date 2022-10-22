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
  font-size: 2rem;
  line-height: 43px;
  font-weight: bold;
}

.heading-medium {
  font-size: 1.5rem;
  line-height: 31px;
  font-weight: bold;
}

.body {
  font-size: 1.125rem;
  line-height: 23px;
  font-weight: bold;
}
</style>
