import OrderList from "../components/orders/OrderList"

export default function SubScreen() {
  return (
    <>
      <div className="border h-dvh overflow-auto p-4 rounded-md space-y-2">
        <h2 className="font-semibold">Lịch sử mua hàng</h2>
        <OrderList />
      </div>
    </>
  )
}
