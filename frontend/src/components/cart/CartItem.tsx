import type { CartItemType } from "../../lib/types/cart.type"

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <>
      <li className="p-2 border rounded-md">
        <p className="text-left">{item.name}</p>
        <div className="flex justify-between items-center">
          <p className="text-chart-2">x{item.quantity}</p>
          <p>{(item.price).toLocaleString("vi-VN")}đ</p>
        </div>
      </li>
    </>
  )
}
