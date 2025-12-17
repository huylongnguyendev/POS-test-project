import React, { Suspense } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function MainScreen() {

  const ProductList = React.lazy(() => import("../components/products/ProductList"))

  return (
    <>
      <div className="relative w-2/3 border rounded-md h-fit">
        <Header />
        <div className="h-calc space-y-2 overflow-auto p-4">
          <h2 className="font-semibold">Danh sách sản phẩm</h2>

          <Suspense fallback={<div>loading...</div>}>
            <ProductList />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  )
}
