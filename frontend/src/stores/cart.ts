import { defineStore } from 'pinia'
import products from '../data/mock_products.json';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as { id: number; name: string; price: number; quantity: number; image: string }[],
    products,
    quantity: 1
  }),
  actions: {
    addToCart(productId: number) {
      const product = this.products.find(item => item.id === productId);

      if (product) {
        const existingProduct = this.cartItems.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          this.cartItems.push({ ...product, quantity: 1 });
        }
        console.log('Produto adicionado ao carrinho...');
      } else {
        console.log('Produto não encontrado');
      }
    },

    removeFromCart(productId: number) {
      this.quantity--
      const productIndex = this.cartItems.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        const item = this.cartItems[productIndex];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cartItems.splice(productIndex, 1);
        }
      }
      console.log('Produto removido do carrinho...');
    },
    getTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
});
