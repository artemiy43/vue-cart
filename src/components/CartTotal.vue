<template>
  <div class="cart__total">
    <h3 class="cart__total__header">Итого</h3>
    <ul class="cart__total__list">
      <li class="cart__total__list__item">
        <p>Сумма заказа</p>
        <p>{{ cartStore.totalPrice + " ₽" }}</p>
      </li>
      <li class="cart__total__list__item">
        <p>Количество</p>
        <p>{{ cartStore.totalCount + " шт" }}</p>
      </li>
    </ul>
    <div class="cart__total__price">
      <p class="cart__total__price__name">Стоимость товаров</p>
      <p class="cart__total__price__value">{{ cartStore.totalPrice + " ₽" }}</p>
    </div>
    <button class="cart__total__button cart__total__button_buy">
      Оплатить
    </button>
  </div>
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

<style lang="css" scoped>
.cart__total {
  width: 425px;
  background-color: #f6f8fa;
  padding: 35px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  color: #1f2432;
  border-radius: 10px;
}

.cart__total__header {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Lato";
  font-size: 24px;
  font-weight: 600;
}

.cart__total__list {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #aeb0b6;
}

.cart__total__list__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cart__total__price {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.cart__total__price__name {
  font-family: "Lato";
  font-size: 18px;
  line-height: 26px;
  font-weight: 600px;
  margin: 0;
}
.cart__total__price__value {
  font-size: 26px;
  line-height: 33px;
  font-weight: 700;
  margin: 0;
}

.cart__total__button {
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  font-size: 18px;
  line-height: 26px;
  font-weight: 600px;
  border: none;
  padding: 14px;
  margin-bottom: 12px;
  box-sizing: border-box;
}
.cart__total__button:hover {
  cursor: pointer;
}

.cart__total__button_buy {
  color: white;
  background-color: #0069b4;
}
.cart__total__button_click {
  color: #0069b4;
  background-color: white;
  border: 1px solid #0069b4;
}
</style>
