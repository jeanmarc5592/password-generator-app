<template>
  <div class="result-container" :class="resultContainerClasses">
    <base-typography variant="heading-large">
      {{ password }}
    </base-typography>
    <button @click="copyPassword" class="copy-container">
      <base-copy-icon></base-copy-icon>
    </button>
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
  methods: {
    copyPassword() {
      // TODO: Copy Password to clipboard
      if (this.generatedPassword.length === 0) {
        // TODO: Implement Error Message
        return;
      }
      alert(this.generatedPassword);
    },
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $color-black-light;
  padding: 1rem 2rem;
}

.no-result {
  color: $color-grey-dark;
}

.copy-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
}
</style>
