import React, { Suspense } from "react"

export default function MainScreen() {

  const ProductList = React.lazy(() => import("../components/products/ProductList"))

  return (
    <>
      <div className="w-full border rounded-md p-4 h-dvh overflow-auto mt-16">
        <h2>Danh sách sản phẩm</h2>

        <Suspense fallback={<div>loading...</div>}>
          <ProductList />
        </Suspense>
      </div>
    </>
  )
}
