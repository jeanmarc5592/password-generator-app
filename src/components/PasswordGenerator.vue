<template>
  <div class="main-container">
    <!-- HEADING -->
    <div class="heading-container">
      <base-typography>Password Generator</base-typography>
    </div>
    <!-- RESULT -->
    <password-generator-result />
    <!-- CONTROLS -->
    <password-generator-controls />
  </div>
</template>

<script>
import PasswordGeneratorResult from "./PasswordGeneratorResult.vue";
import PasswordGeneratorControls from "./PasswordGeneratorControls.vue";

export default {
  components: {
    PasswordGeneratorResult,
    PasswordGeneratorControls,
  },
  provide() {
    return {
      generatedPassword: this.generatedPassword,
      generatePassword: this.generatePassword,
    };
  },
  data() {
    return {
      generatedPassword: "",
    };
  },
  methods: {
    generatePassword(formData) {
      // TODO: Generate Password
      console.log(formData);
    },
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
