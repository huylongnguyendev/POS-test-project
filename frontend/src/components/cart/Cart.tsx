import { PackageOpen } from "lucide-react"
import CartItem from "./CartItem"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import type { Cart } from "../../lib/types/cart.type"
import { createCart, fetchCart } from "../../lib/services/cart.service"


export default function CartBox() {
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()

  const saveId = (payload: Cart) => {
    const newCart = payload
    if (newCart?.id)
      localStorage.setItem("id", newCart.id)
  }

  useEffect(() => {
    const id = localStorage.getItem("id")
    console.log(id)
    if (!id) {
      dispatch(createCart()).then((action) => {
        saveId(action.payload)
      })
    } else {
      dispatch(fetchCart(id))
    }
  }, [dispatch])

  return (
    <>
      <div className="absolute top-4 right-0 z-50 w-sm bg-background rounded-md border shadow-md opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible p-4 space-y-2">
        <h2 className="font-semibold">Giỏ hàng</h2>
        <ul className="space-y-1 rounded-md border p-1 [&>*:nth-child(even)]:bg-secondary">
          {
            !cart || cart.items.length === 0 ? (
              <li className="py-2 w-full flex justify-center items-center gap-2 ">
                <PackageOpen />
                <p className="font-semibold">Giỏ hàng trống</p>
              </li>
            )
              : (
                cart?.items.map(item => (
                  <CartItem key={item.productId} item={item} />
                )))
          }
        </ul>
      </div>
    </>
  )
}
