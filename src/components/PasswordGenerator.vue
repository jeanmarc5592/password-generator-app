<template>
  <div class="main-container">
    <!-- HEADING -->
    <div class="heading-container">
      <base-typography>Password Generator</base-typography>
    </div>
    <password-generator-result></password-generator-result>
  </div>
</template>

<script>
import PasswordGeneratorResult from "./PasswordGeneratorResult.vue";

export default {
  components: {
    PasswordGeneratorResult,
  },
  provide() {
    return {
      generatedPassword: this.generatedPassword,
    };
  },
  data() {
    return {
      generatedPassword: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 343px;
  @media (min-width: 768px) {
    width: 540px;
  }
}

.heading-container {
  margin-bottom: 2rem;
  text-align: center;
  color: $color-grey-dark;
}
</style>
