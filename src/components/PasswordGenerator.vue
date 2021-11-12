<template>
  <div class="generator">
    <password-display :password.sync="generatedPassword" />
    <password-options @options="getOptions" />
  </div>
</template>

<script>
import PasswordDisplay from "./PasswordDisplay.vue";
import PasswordOptions from "./PasswordOptions.vue";
import Password from "../utils/password";
export default {
  components: {
    PasswordDisplay,
    PasswordOptions,
  },
  data() {
    return {
      options: null,
      generatedPassword: "",
    };
  },
  methods: {
    getOptions(options) {
      this.options = options;
      this.generatePass();
    },
    generatePass() {
      this.generatedPassword = new Password(
        this.options.passLength,
        this.options.patterns
      ).generate();
    },
  },
};
</script>

<style lang="scss" scoped>
.generator {
  max-width: 600px;
  margin: 30px auto;
}
</style>
