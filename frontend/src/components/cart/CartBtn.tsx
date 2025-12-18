import { ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import CartBox from "./Cart"
import { useAppSelector } from "../../lib/hooks/redux.hook"

export default function CartBtn() {
  const cart = useAppSelector((state) => state.cart.cart)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative group"
      >
        <ShoppingBag />
        <Badge
          variant="destructive"
          className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 tabular-nums"
        >
          {cart?.items.length}
        </Badge>
        <CartBox />
      </Button>
    </>
  )
}
