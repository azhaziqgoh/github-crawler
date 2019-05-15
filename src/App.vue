<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background-color: #f1f3f6;
  min-height: 100vh;
  padding: 15px 0;
}

//Counter styling for bootstrap vue pagination component
.page-item {
  margin-left: 5px;
  margin-right: 5px;

  &[role=separator]{
    .page-link {
      border: none;
    }
  }
}

//Custom fluover alert
.alert.flyover-alert {
  position: absolute;
  z-index: 1;
  right: 15px;
}
</style>
