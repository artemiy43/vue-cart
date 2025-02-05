<template>
  <main class="main">
    <header class="header">
      <div class="header__container">
        <p class="header__title">Ваша корзина</p>
        <p class="header__subtitle">
          {{ cartStore.totalCount + " " + "товара" }}
        </p>
      </div>
      <p class="header__clear" @click="cartStore.clear()">Очистить корзину</p>
    </header>
    <ul class="cartList" v-if="cartStore.items.length">
      <li v-for="item in cartStore.items" class="cartList__item">
        <img :src="item.pic" alt="image" class="cartList__item-img" />
        <div class="cartList__item-container">
          <p class="cartList__item-name">{{ item.title }}</p>
          <p class="cartList__item-description">
            {{ item.description }}
          </p>
          <p class="cartList__item-article">Артикул: {{ item.article }}</p>
        </div>
        <div class="cartList__counter">
          <div class="cartList__counter-buttons">
            <button
              class="cartList__counter-button"
              @click="cartStore.deleteItem(item)"
            >
              -
            </button>
            <p class="cartList__counter-number">
              {{ item.count }}
            </p>
            <button
              @click="cartStore.addItem(item)"
              class="cartList__counter-button"
            >
              +
            </button>
          </div>
          <p v-if="item.count > 1" class="cartList__counter-price">
            {{ item.price + "/" + "шт." }}
          </p>
        </div>
        <p class="cartList__item-totalPrice">
          {{ item.price * item.count + " ₽" }}
        </p>
        <button
          class="cartList__item-delete"
          @click="cartStore.deleteTotalItem(item)"
        ></button>
      </li>
    </ul>
    <div v-else>Нет товаров</div>
  </main>
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
.main {
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  text-align: end;
  justify-content: center;
  align-items: end;
  margin: 0;
}
.header__title {
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
}
.header__subtitle {
  color: #797b86;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-bottom: 5px;
}
.header__clear {
  color: #797b86;
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: 10px;
}
.header__clear:hover {
  cursor: pointer;
}

.cartList {
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0;
}

.cartList__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
}

.cartList__item:last-child {
  border-bottom: none;
}

.cartList__item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

.cartList__item__totalPrice {
  font-weight: 600;
}

.cartList__item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 7px;
  margin: 0 80px 0 30px;
  max-width: 270px;
  text-wrap: wrap;
  text-align: left;
}

.cartList__counter {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 94px;
}

.cartList__counter-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cartList__counter-button {
  padding: 10px;
  margin: 10px;
}

.cartList__counter-price {
  position: absolute;
  bottom: -8px;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  transform: translate(-50%, 0);
  text-wrap: nowrap;
}

.cartList__item-delete {
  background-image: url(../assets/close.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  border: none;
  align-self: flex-start;
  padding: 0;
}
.cartList__item-delete:hover {
  cursor: pointer;
}

.cartList__item-name {
  color: #1f2432;
  font-family: "Lato";
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  padding: 0;
}

.cartList__item-description {
  color: #2c3242;
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  margin: 0;
  padding: 0;
}

.cartList__item-article {
  color: #797b86;
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding: 0;
}

.cartList__item-counter {
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-radius: 5px;
  border: none;
  color: #33374e;
  font-size: 20px;
}

.cartList__item-totalPrice {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
  color: #1f2432;
}
</style>
