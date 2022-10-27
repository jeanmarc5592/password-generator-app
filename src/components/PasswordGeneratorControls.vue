<template>
  <form class="controls-container" @submit.prevent="submitForm">
    <!-- Length Slider -->
    <div class="slider-container">
      <div class="slider-head-container">
        <base-typography>Character Length</base-typography>
        <base-typography class="slider-value" variant="heading-large">
          {{ passwordLength }}
        </base-typography>
      </div>
      <input
        id="password-length-slider"
        v-model="passwordLength"
        type="range"
        min="0"
        :max="maxPasswordLength"
        class="slider"
      />
    </div>
    <!-- Checkboxes -->
    <div class="checkboxes-container">
      <div class="checkbox-group">
        <input
          v-model="passwordContent"
          type="checkbox"
          value="hasUppercaseLetters"
          name="hasUppercaseLetters"
        />
        <base-typography>Include Uppercase Letters</base-typography>
      </div>
      <div class="checkbox-group">
        <input
          v-model="passwordContent"
          type="checkbox"
          value="hasLowercaseLetters"
          name="hasLowercaseLetters"
        />
        <base-typography>Include Lowercase Letters</base-typography>
      </div>
      <div class="checkbox-group">
        <input
          v-model="passwordContent"
          type="checkbox"
          value="hasNumbers"
          name="hasNumbers"
        />
        <base-typography>Include Numbers</base-typography>
      </div>
      <div class="checkbox-group">
        <input
          v-model="passwordContent"
          type="checkbox"
          value="hasSymbols"
          name="hasSymbols"
        />
        <base-typography>Include Symbols</base-typography>
      </div>
    </div>

    <!-- Strength Display -->

    <!-- CTA Button -->
  </form>
</template>

<script>
export default {
  inject: ["generatePassword"],
  data() {
    return {
      maxPasswordLength: 32,
      passwordLength: 0,
      passwordContent: [],
    };
  },
  watch: {
    passwordLength(newLength) {
      const slider = document.getElementById("password-length-slider");
      const percent = (newLength / this.maxPasswordLength) * 100;
      slider.style.background = `linear-gradient(to right, #A4FFAF ${percent}%, #18171F ${percent}%)`;
    },
  },
  methods: {
    submitForm() {
      const formData = {
        passwordLength: this.passwordLength,
        passwordContent: this.passwordContent,
      };
      this.generatePassword(formData);
      console.log(formData.passwordContent);
    },
  },
};
</script>

<style lang="scss" scoped>
.controls-container {
  background-color: $color-black-light;
  padding: 1rem 2rem;
}

.slider-head-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }

  .slider-value {
    color: $color-green;
  }
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: $color-black-dark;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: $color-grey-light;
    cursor: pointer;
    transition: all 0.3s ease-out;
    border: 2px solid transparent;

    &:hover {
      background: $color-black-dark;
      border: 2px solid $color-green;
      transition: all 0.3s ease-out;
    }
  }

  &::-moz-range-progress {
    background: $color-green;
  }
}

.checkboxes-container {
  margin: 2rem 0;

  & .checkbox-group {
    display: flex;

    & input {
      margin-right: 1.5rem;
      height: 20px;
      width: 20px;
      accent-color: $color-green;
      cursor: pointer;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        margin-bottom: 1.25rem;
      }
    }
  }
}
</style>
