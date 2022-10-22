<template>
  <div class="result-container" :class="resultContainerClasses">
    <base-typography variant="heading-large">
      {{ password }}
    </base-typography>
  </div>
</template>

<script>
export default {
  inject: ["generatedPassword"],
  computed: {
    password() {
      return this.generatedPassword.length > 0
        ? this.generatedPassword
        : "P4$5W0rD!";
    },
    resultContainerClasses() {
      return {
        "no-result": this.generatedPassword.length === 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  background-color: $color-black-light;
  padding: 1rem 2rem;
}

.no-result {
  color: $color-grey-dark;
}
</style>
