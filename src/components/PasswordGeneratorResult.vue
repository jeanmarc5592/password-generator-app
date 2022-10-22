<template>
  <div class="result-container" :class="resultContainerClasses">
    <base-typography variant="heading-large">
      {{ password }}
    </base-typography>
    <div class="copy-container">
      <base-typography v-if="isCopied">COPIED</base-typography>
      <button class="copy-button" @click="copyPassword">
        <base-copy-icon></base-copy-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["generatedPassword"],
  data() {
    return {
      isCopied: false,
    };
  },
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
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
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
  color: $color-green;
}

.copy-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
}
</style>
