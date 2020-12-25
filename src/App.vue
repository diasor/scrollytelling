<template>
  <div id="app">
    <header>
      <h1 class="title">Scrollytelling Map</h1>
    </header>
    <div class="introduction">
      <h1>
        The advance into (1812) and retreat from (1813) Russia by Napoleon’s
        Grande Armée
      </h1>
    </div>
    <Steps />
    <router-view></router-view>
  </div>
</template>

<script>
import Steps from "@/components/Steps";

export default {
  name: "App",
  components: {
    Steps
  }
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  background: #ffffff url("/assets/img/fabric.png");
}

// header
.title {
  margin: 0.5em auto 0 0.5em;
  background: #ffffff url("/assets/img/fabric.png");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #ffffff url("/assets/img/fabric.png");
}

.introduction {
  text-align: center;
  padding: 0;
  height: 5vh;
}
</style>
