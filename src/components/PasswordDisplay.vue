<template>
  <div class="display">
    <div class="input-group text-input">
      <input v-model="password" readonly />
      <div @click="animateTooltip" class="tooltip-wrapper">
        <button @click="copyPass" class="copy-button">
          <icon-copy />
        </button>
        <span class="tooltip" ref="tooltip">Copied!</span>
      </div>
    </div>
    <password-difficulty />
  </div>
</template>

<script>
import PasswordDifficulty from "./PasswordDifficulty.vue";
import IconCopy from "./Icons/IconCopy.vue";
export default {
  components: {
    PasswordDifficulty,
    IconCopy,
  },
  props: {
    password: { type: String, required: true },
  },
  methods: {
    copyPass() {
      navigator.clipboard.writeText(this.password);
    },
    animateTooltip() {
      let tooltip = this.$refs.tooltip;
      tooltip.classList.add("anim");
      tooltip.addEventListener("animationend", () => {
        tooltip.classList.remove("anim");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  .input-group {
    display: flex;
    width: 100%;
    position: relative;
    input {
      flex: 1;
      padding: 20px 85px 20px 20px;
    }
    .tooltip-wrapper {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translate(-50%, -50%);
    }
    .copy-button {
      padding: 2px;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
}
</style>
