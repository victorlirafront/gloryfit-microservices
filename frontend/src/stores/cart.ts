import { defineStore } from 'pinia'

const products = [
  {
    name: 'Camiseta Ignite Lab',
    price: 79.99,
    image:
      'https://thunder-shop.vercel.app/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTVg0RERBMVZLWjlIWjFUfGZsX3Rlc3RfVlJJUTdwNUpsY1R5VmtWYmdRSXNwc2Y100Afouqsdr&w=1080&q=75',
  },
  {
    name: 'Camiseta Ignite Lab',
    price: 79.99,
    image:
      'https://thunder-shop.vercel.app/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTVg0RERBMVZLWjlIWjFUfGZsX3Rlc3RfVlJJUTdwNUpsY1R5VmtWYmdRSXNwc2Y100Afouqsdr&w=1080&q=75',
  },
  {
    name: 'Camiseta Ignite Lab',
    price: 79.99,
    image:
      'https://thunder-shop.vercel.app/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTVg0RERBMVZLWjlIWjFUfGZsX3Rlc3RfVlJJUTdwNUpsY1R5VmtWYmdRSXNwc2Y100Afouqsdr&w=1080&q=75',
  },
]

export const useCartStore = defineStore('cart', {
  state: () => ({
    products,
    quantity: 1,
  }),
  actions: {
    addToCart() {
      console.log('Adicionando ao carrinho...')
      this.quantity++
    },
    removeFromCart() {
      if (this.quantity > 0) {
        console.log('Removendo do carrinho...')
        this.quantity--
      }
    },
    getTotal() {
      return this.products.length > 0 ? this.products[0].price * this.quantity : 0
    },
  },
})
