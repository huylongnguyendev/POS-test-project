import { ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { createCart, fetchCart } from "../../lib/services/cart.service"

export default function CartBtn() {
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const id = localStorage.getItem("id")
    console.log(id)
    if (!id) {
      dispatch(createCart()).then((action) => {
        const newCart = action.payload
        if (newCart?.id)
          localStorage.setItem("id", newCart.id)
      })
    } else dispatch(fetchCart(id))
  }, [dispatch])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative"
      >
        <ShoppingBag />
        <Badge
          variant="destructive"
          className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 tabular-nums"
        >
          {cart?.items.length}
        </Badge>
      </Button>
    </>
  )
}
