<template>
  <header class="header">
    <div class="header-up">
      <div class="header__line"></div>
      <div class="header__cart">
        <img src="../assets/cart.svg" alt="cart" />
        <div class="header__container">
          <p class="header__text">Ваша корзина</p>
          <p class="header__text header__text_count">
            {{ cartStore.totalCount + " " + "товара" }}
          </p>
          <p class="header__text">{{ cartStore.totalPrice + " ₽" }}</p>
        </div>
      </div>
    </div>
    <div class="header-down">
      <p class="header__text-unactive">Главная</p>
      <img src="../assets/arrow.png" alt="arrow" />
      <p class="header__text-active">Корзина</p>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "../store/cartStore";
export default {
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
};
</script>

<style lang="css">
.header {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 49px;
}

.header-up {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
}

.header-down {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.header__line {
  display: inline-block;
  width: 100%;
  background-color: #0069b4;
  opacity: 0.2;
  border-radius: 4px;
  height: 60px;
}

.header__text-active {
  color: #797b86;
}

.header__text-unactive {
  color: #33374e;
}

.header__cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.header__container {
  margin-left: 10px;
  text-wrap: nowrap;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.header__text {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
}

.header__text_count {
  color: #797b86;
}
</style>
