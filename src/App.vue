<template>
  <div class="app-container">
    <password-generator></password-generator>
  </div>
</template>

<script>
import PasswordGenerator from "./components/PasswordGenerator.vue";

export default {
  components: { PasswordGenerator },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
