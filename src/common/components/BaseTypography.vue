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
}
.heading-large {
  font-size: $heading-medium;
  line-height: 31px;

  @media (min-width: 768px) {
    font-size: $heading-large;
    line-height: 43px;
  }
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
