<template>
  <div class="result-container" :class="resultContainerClasses">
    <div class="result">
      <base-typography variant="heading-large">
        {{ password }}
      </base-typography>
    </div>
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
  props: {
    result: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCopied: false,
    };
  },
  computed: {
    password() {
      return this.result.length > 0 ? this.result : "P4$5W0rD!";
    },
    resultContainerClasses() {
      return {
        "no-result": this.result.length === 0,
      };
    },
  },
  methods: {
    copyPassword() {
      if (this.result.length === 0) {
        // TODO: Implement Error Message
        return;
      }
      navigator.clipboard.writeText(this.result);
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
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }

  .result {
    max-width: 55%;
    @media (min-width: 768px) {
      max-width: 70%;
    }
  }
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
