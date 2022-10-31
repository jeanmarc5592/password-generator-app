<template>
  <div class="main-container">
    <!-- HEADING -->
    <div class="heading-container">
      <base-typography>Password Generator</base-typography>
    </div>
    <!-- RESULT -->
    <password-generator-result :result="generatedPassword" />
    <!-- CONTROLS -->
    <password-generator-controls :generate="generatePassword" />
  </div>
</template>

<script>
import PasswordGeneratorResult from "./PasswordGeneratorResult.vue";
import PasswordGeneratorControls from "./PasswordGeneratorControls.vue";

const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!§$%&/()=?+*#";

export default {
  components: {
    PasswordGeneratorResult,
    PasswordGeneratorControls,
  },
  data() {
    return {
      generatedPassword: "",
    };
  },
  methods: {
    generatePassword(formData) {
      const userChoices = JSON.parse(JSON.stringify(formData.passwordContent));
      const passwordLength = parseInt(formData.passwordLength);
      let contents = "";
      let result = "";

      const hasUppercase = userChoices.includes("hasUppercaseLetters");
      const hasLowercase = userChoices.includes("hasLowercaseLetters");
      const haseNumbers = userChoices.includes("hasNumbers");
      const hasSymbols = userChoices.includes("hasSymbols");

      if (hasUppercase) contents += UPPERCASE_LETTERS;
      if (hasLowercase) contents += LOWERCASE_LETTERS;
      if (haseNumbers) contents += NUMBERS;
      if (hasSymbols) contents += SYMBOLS;

      while (result.length < passwordLength) {
        const randomIndex = Math.floor(Math.random() * contents.length);
        result += contents[randomIndex];
      }

      this.generatedPassword = result;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 343px;
  position: fixed;
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
