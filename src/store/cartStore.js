import { defineStore } from "pinia";
import data from "../mocks/mocks.json";
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    items: data.data,
  }),
  getters: {
    totalPrice: (state) =>
      state.items.reduce((acc, value) => acc + value.count * value.price, 0),
    totalCount: (state) =>
      state.items.reduce((acc, value) => acc + value.count, 0),
  },
  actions: {
    addItem(newItem) {
      const itemExist =
        this.items.find((item) => item?.id === newItem?.id) ?? -1;
      if (itemExist === -1) {
        this.items.push({ ...newItem, count: 1 });
      } else {
        itemExist.count += 1;
      }
    },
    deleteItem(newItem) {
      const itemExist =
        this.items.find((item) => item?.id === newItem?.id) ?? -1;
      if (itemExist === -1) {
        return;
      } else {
        itemExist.count -= 1;
        if (itemExist.count === 0) {
          this.items = this.items.filter((item) => item.id !== itemExist.id);
        }
      }
    },
    deleteTotalItem(newItem) {
      this.items = this.items.filter((item) => item.id !== newItem.id);
    },
    clear() {
      this.items = [];
    },
  },
});
