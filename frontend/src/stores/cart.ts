import { defineStore } from 'pinia'
import products from '../data/mock_products.json'
import type { Product } from '@/types/tshirt'
import { calculateProductAvailability } from '@/utils/products'

export const useCartStore = defineStore('cart', {
  state: () => {
    const storedCartItems = localStorage.getItem('cartItems')
    const cartItems: Product[] = storedCartItems ? JSON.parse(storedCartItems) : []

    return {
      cartItems,
      products,
      quantity: 1,
    }
  },
  actions: {
    addToCart(productId: number) {
      const product = this.products.find((item) => item.id === productId)

      if (!product) return

      const productsWithAvailability = calculateProductAvailability([product])

      if (!productsWithAvailability.find(product => product.id === productId)?.available) {
        alert('O produto não está disponível');
        return;
      }

      if (this.cartItems.find((item) => item.id === productId)) {
        alert('O produto já existe no carrinho')
        return
      }

      if (product) {
        const existingProduct = this.cartItems.find((item) => item.id === product.id)
        if (existingProduct) {
          existingProduct.quantity++
        } else {
          this.cartItems.push({ ...product, quantity: 1 })
        }
        this.saveToLocalStorage()
        console.log('Produto adicionado ao carrinho...')
      } else {
        console.log('Produto não encontrado')
      }
    },

    removeFromCart(productId: number) {
      this.quantity--
      const productIndex = this.cartItems.findIndex((item) => item.id === productId)
      if (productIndex !== -1) {
        const item = this.cartItems[productIndex]
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.cartItems.splice(productIndex, 1)
        }
        this.saveToLocalStorage()
        console.log('Produto removido do carrinho...')
      }
    },

    getTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },

    saveToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },
  },
})
