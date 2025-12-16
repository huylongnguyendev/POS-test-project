
export type CartItemType = {
  productId: string
  name: string
  quantity: number
  price: number
}

export type Cart = {
  id: string
  items: CartItemType[]
}