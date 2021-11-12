<template>
  <div id="app">
    <h1>Password Generator</h1>
    <password-generator />
  </div>
</template>

<script>
import PasswordGenerator from "./components/PasswordGenerator.vue";
export default {
  name: "App",
  components: {
    PasswordGenerator,
  },
};
</script>

<style lang="scss">
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 10px;
}
p {
  margin: 0 0 5px;
}
ul,
li {
  padding: 0;
  list-style: none;
}
#app {
  padding: 30px 15px;
}
h1 {
  text-align: center;
}
.text-input input {
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
}
.icon {
  width: 30px;
  height: 30px;
}
.tooltip-wrapper {
  position: relative;
  .tooltip {
    position: absolute;
    opacity: 0;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    &.anim {
      animation: upAndDisappear 1s ease-in-out forwards;
    }
  }
}

@keyframes upAndDisappear {
  0% {
    top: -5px;
  }
  10% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    top: -25px;
    opacity: 0;
  }
}
</style>
