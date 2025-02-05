<script>
import AppHeader from "./components/AppHeader.vue";
import Cart from "./components/Cart.vue";
export default {
  components: {
    AppHeader,
    Cart,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="app">
    <AppHeader />
    <Cart />
  </div>
</template>

<style>
@font-face {
  font-family: Lato;
  src: url(/assets/Lato/Lato-Regular.ttf);
}
.app {
  /* max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 80px; */
  font-family: "Lato", "Roboto";
}
</style>
