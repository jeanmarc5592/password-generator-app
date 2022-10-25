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
        max="32"
        class="slider"
      />
    </div>
    <!-- Checkboxes -->

    <!-- Strength Display -->

    <!-- CTA Button -->
  </form>
</template>

<script>
export default {
  inject: ["generatePassword"],
  data() {
    return {
      passwordLength: 0,
    };
  },
  // mounted() {
  //   const slider = document.getElementById("password-length-slider");
  //   slider.addEventListener("mousemove", () => {
  //     const value = this.passwordLength;
  //     const backgroundColor = `linear-gradient(90deg, #A4FFAF) ${value}%, #18171F ${value}%`;
  //     slider.style.backgroundColor = backgroundColor;
  //   });
  // },
  methods: {
    submitForm() {
      const formData = {
        passwordLength: this.passwordLength,
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
</style>
