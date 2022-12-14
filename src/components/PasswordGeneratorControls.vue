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
    <button
      class="submit-button"
      type="submit"
      :disabled="isSubmitBtnDisabled"
      @mouseover="submitBtnMouseOver"
      @mouseleave="submitBtnMouseLeave"
    >
      <span>GENERATE</span>
      <base-arrow-right-icon
        :fill="arrowRightIconColor"
      ></base-arrow-right-icon>
    </button>
  </form>
</template>

<script>
const PASSWORD_STRENGHTS = Object.freeze({
  "TOO WEAK!": "TOO WEAK!",
  WEAK: "WEAK",
  MEDIUM: "MEDIUM",
  STRONG: "STRONG",
});

export default {
  props: {
    generate: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isMobile: false,
      isGenerateHovered: false,
      maxPasswordLength: 16,
      passwordLength: 0,
      passwordContent: [],
      passwordStrength: null,
    };
  },
  computed: {
    arrowRightIconColor() {
      if (this.isGenerateHovered) {
        return "#A4FFAF";
      }
      return "#18171F";
    },
    isSubmitBtnDisabled() {
      if (this.passwordStrength === null) {
        return true;
      }
      return false;
    },
    strengthLevelOneClass() {
      return {
        "red-bg": this.passwordStrength === PASSWORD_STRENGHTS["TOO WEAK!"],
        "orange-bg": this.passwordStrength === PASSWORD_STRENGHTS.WEAK,
        "yellow-bg": this.passwordStrength === PASSWORD_STRENGHTS.MEDIUM,
        "green-bg": this.passwordStrength === PASSWORD_STRENGHTS.STRONG,
      };
    },
    strengthLevelTwoClass() {
      return {
        "orange-bg": this.passwordStrength === PASSWORD_STRENGHTS.WEAK,
        "yellow-bg": this.passwordStrength === PASSWORD_STRENGHTS.MEDIUM,
        "green-bg": this.passwordStrength === PASSWORD_STRENGHTS.STRONG,
      };
    },
    strengthLevelThreeClass() {
      return {
        "yellow-bg": this.passwordStrength === PASSWORD_STRENGHTS.MEDIUM,
        "green-bg": this.passwordStrength === PASSWORD_STRENGHTS.STRONG,
      };
    },
    strengthLevelFourlass() {
      return {
        "green-bg": this.passwordStrength === PASSWORD_STRENGHTS.STRONG,
      };
    },
  },
  watch: {
    passwordLength(newLength) {
      const slider = document.getElementById("password-length-slider");
      const percent = (newLength / this.maxPasswordLength) * 100;
      slider.style.background = `linear-gradient(to right, #A4FFAF ${percent}%, #18171F ${percent}%)`;
      this.calcPasswordStrength();
    },
    passwordContent() {
      this.calcPasswordStrength();
    },
  },
  created() {
    window.addEventListener("resize", this.checkMobileBreakpoint);
    this.checkMobileBreakpoint();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobileBreakpoint);
    this.checkMobileBreakpoint();
  },
  methods: {
    submitBtnMouseOver() {
      return this.isMobile ? null : (this.isGenerateHovered = true);
    },
    submitBtnMouseLeave() {
      return this.isMobile ? null : (this.isGenerateHovered = false);
    },
    checkMobileBreakpoint() {
      this.isMobile = window.matchMedia("(max-width: 412px)").matches;
    },
    submitForm() {
      const formData = {
        passwordLength: this.passwordLength,
        passwordContent: this.passwordContent,
        passwordStrength: this.passwordStrength,
      };
      this.generate(formData);
    },
    calcPasswordStrength() {
      const passwordLengthAsInt = parseInt(this.passwordLength);
      if (this.passwordContent.length == 0 || passwordLengthAsInt == 0) {
        this.passwordStrength = null;
        return;
      }
      if (this.passwordContent.length == 1 || passwordLengthAsInt <= 6) {
        this.passwordStrength = PASSWORD_STRENGHTS["TOO WEAK!"];
        return;
      }
      if (this.passwordContent.length == 2 || passwordLengthAsInt <= 8) {
        this.passwordStrength = PASSWORD_STRENGHTS.WEAK;
        return;
      }
      if (this.passwordContent.length == 3 || passwordLengthAsInt <= 12) {
        this.passwordStrength = PASSWORD_STRENGHTS.MEDIUM;
        return;
      }
      if (this.passwordContent.length == 4 || passwordLengthAsInt <= 16) {
        this.passwordStrength = PASSWORD_STRENGHTS.STRONG;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.controls-container {
  background-color: $color-black-light;
  padding: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 1rem 2rem;
  }
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
      margin-right: 1rem;
      height: 20px;
      width: 20px;
      accent-color: $color-green;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      margin-right: 1.5rem;
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
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & > p {
    color: $color-grey-dark;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    padding: 1rem 2rem;
  }

  .strength-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin-right: 0.5rem;
      font-size: $body;

      @media (min-width: 768px) {
        margin-right: 1rem;
        font-size: $heading-medium;
      }
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
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-out;

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  span {
    margin-right: 1.5rem;
  }

  &:hover {
    @media (hover: hover) {
      background: $color-black-dark;
      border: 2px solid $color-green;
      color: $color-green;
      transition: all 0.3s ease-out;
    }
  }

  &:disabled {
    cursor: default;
    background: rgba($color-green, 0.2);

    &:hover {
      color: $color-black-dark;
      background: rgba($color-green, 0.2);
      border: 2px solid transparent;
    }
  }
}
</style>
