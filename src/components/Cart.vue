<script>
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";
export default {
  components: {
    CartList,
    CartTotal,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="cart">
    <CartList />
    <CartTotal />
  </div>
</template>

<style lang="css" scoped>
.cart {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 55px;
  margin-top: 60px;
}
</style>
