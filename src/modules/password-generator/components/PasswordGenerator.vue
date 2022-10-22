<template>
  <div class="main-container">
    <!-- HEADING -->
    <div class="heading-container">
      <base-typography>Password Generator</base-typography>
    </div>
    <!-- PASSWORD RESULT -->
    <div class="result-container">
      <base-typography variant="heading-large">
        {{ password }}
      </base-typography>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      generatedPassword: "",
    };
  },
  computed: {
    password() {
      return this.generatedPassword.length > 0
        ? this.generatedPassword
        : "P4$5W0rD!";
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

.result-container {
  background-color: $color-black-light;
  padding: 1rem 2rem;
}
</style>
