<!-- eslint-disable prettier/prettier -->
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
    <div class="strength-container">
      <base-typography>STRENGTH</base-typography>
      <div>
        <div class="strength-rating">
          <base-typography
            v-if="passwordStrength !== null"
            variant="heading-medium"
          >
            {{ passwordStrength }}
          </base-typography>
          <div class="strength-rating-box" :class="strengthLevelOneClass"></div>
          <div class="strength-rating-box" :class="strengthLevelTwoClass"></div>
          <div
            class="strength-rating-box"
            :class="strengthLevelThreeClass"
          ></div>
          <div class="strength-rating-box" :class="strengthLevelFourlass"></div>
        </div>
      </div>
    </div>
    <!-- CTA Button -->
    <button class="submit-button" type="submit">
      <span>GENERATE</span>
      <base-arrow-right-icon></base-arrow-right-icon>
    </button>
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
      passwordStrength: null,
    };
  },
  computed: {
    strengthLevelOneClass() {
      return {
        "red-bg": this.passwordStrength === "TOO WEAK!",
        "orange-bg": this.passwordStrength === "WEAK",
        "yellow-bg": this.passwordStrength === "MEDIUM",
        "green-bg": this.passwordStrength === "STRONG",
      };
    },
    strengthLevelTwoClass() {
      return {
        "orange-bg": this.passwordStrength === "WEAK",
        "yellow-bg": this.passwordStrength === "MEDIUM",
        "green-bg": this.passwordStrength === "STRONG",
      };
    },
    strengthLevelThreeClass() {
      return {
        "yellow-bg": this.passwordStrength === "MEDIUM",
        "green-bg": this.passwordStrength === "STRONG",
      };
    },
    strengthLevelFourlass() {
      return {
        "green-bg": this.passwordStrength === "STRONG",
      };
    },
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
        passwordStrength: this.passwordStrength,
      };
      this.generatePassword(formData);
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

.strength-container {
  background: $color-black-dark;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & > p {
    color: $color-grey-dark;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  .strength-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-right: 1rem;
    }
    .strength-rating-box {
      width: 10px;
      height: 28px;
      border: 2px solid $color-grey-dark;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
    .red-bg {
      background-color: $color-red;
      border: 2px solid $color-red;
    }
    .orange-bg {
      background-color: $color-orange;
      border: 2px solid $color-orange;
    }
    .yellow-bg {
      background-color: $color-yellow;
      border: 2px solid $color-yellow;
    }
    .green-bg {
      background-color: $color-green;
      border: 2px solid $color-green;
    }
  }
}

.submit-button {
  font-size: $body;
  color: $color-black-dark;
  background: $color-green;
  border: 2px solid transparent;
  border-radius: 0;
  padding: 1.25rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-out;

  span {
    margin-right: 1.5rem;
  }

  &:hover {
    background: $color-black-dark;
    border: 2px solid $color-green;
    color: $color-green;
    transition: all 0.3s ease-out;
  }
}
</style>
