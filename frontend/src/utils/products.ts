import type { Product } from '@/types/product'

export const calculateProductAvailability = (products: Product[]) => {
  return products.map((product) => {
    if (product.size) {
      const totalStock = product.size.reduce((sum, size) => sum + size.stock, 0)
      return { ...product, available: totalStock > 0 }
    } else {
      return { ...product, available: product.quantity > 0 }
    }
  })
}
