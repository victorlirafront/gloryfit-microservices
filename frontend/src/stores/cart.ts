// src/stores/cart.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    product: {
      name: 'Camiseta Ignite Lab',
      price: 79.99
    },
    quantity: 0
  }),
  actions: {
    addToCart() {
      console.log("casa")
      this.quantity++
    },
    removeFromCart() {
      if (this.quantity > 0) this.quantity--
    },
    getTotal() {
      return this.product.price * this.quantity
    }
  }
})
