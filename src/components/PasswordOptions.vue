<template>
  <div class="options">
    <h2 class="options-title">Customize your password:</h2>
    <div class="options__wrapper">
      <div class="option option--length">
        <p>Password length</p>
        <input
          type="number"
          v-model="passLength"
          @input="
            checkLength($event.target.value);
            passOptions();
          "
        />
        <input
          type="range"
          min="0"
          :max="maxPassLength"
          v-model="passLength"
          @input="passOptions"
        />
      </div>
      <div class="option option--symbols">
        <div v-for="option in switchers" :key="option.id" class="input-group">
          <input
            type="checkbox"
            name="option"
            :id="option.id"
            :disabled="checkSwitcher(option)"
            v-model="option.checked"
            @change="passOptions"
          />
          <label :for="option.id">{{ option.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  MAX_PASS_LENGTH,
  DEFAULT_PASS_LENGTH,
  LOWER_CASE_REGEX,
  UPPER_CASE_REGEX,
  NUMBERS_REGEX,
  SYMBOLS_REGEX,
} from "../consts.js";
export default {
  data() {
    return {
      passLength: DEFAULT_PASS_LENGTH,
      maxPassLength: MAX_PASS_LENGTH,
      switchers: [
        {
          id: "uppercase",
          label: "Uppercase",
          pattern: UPPER_CASE_REGEX,
          checked: true,
        },
        {
          id: "lowercase",
          label: "Lowercase",
          pattern: LOWER_CASE_REGEX,
          checked: true,
        },
        {
          id: "numbers",
          label: "Numbers",
          pattern: NUMBERS_REGEX,
          checked: true,
        },
        {
          id: "symbols",
          label: "Symbols",
          pattern: SYMBOLS_REGEX,
          checked: true,
        },
      ],
    };
  },
  mounted() {
    this.passOptions();
  },
  methods: {
    passOptions() {
      this.$emit("options", {
        passLength: this.passLength,
        patterns: this.checkedPatterns,
      });
    },
    checkSwitcher(switcher) {
      return this.checkedPatterns.length === 1 && switcher.checked === true;
    },
    checkLength(length) {
      if (length > this.maxPassLength) {
        this.passLength = this.maxPassLength;
      }
    },
  },
  computed: {
    checkedPatterns() {
      return this.switchers
        .filter((switcher) => switcher.checked)
        .map((switcher) => switcher.pattern);
    },
  },
};
</script>

<style lang="scss" scoped>
.options {
  margin: 30px auto;
  &-title {
    text-align: center;
    margin-bottom: 20px;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }
  .option {
    &--length {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      input:not([type="range"]) {
        width: 40px;
        text-align: center;
      }
    }
  }
}
</style>
