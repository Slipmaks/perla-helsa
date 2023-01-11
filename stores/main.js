import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => ({
    cart: 0,
  }),
});
