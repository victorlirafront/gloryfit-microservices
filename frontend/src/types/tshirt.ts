export type Product = {
  id: number
  name: string
  price: number
  quantity: number
  size: {
    code: string
    stock: number
  }[]
  image: string
}
