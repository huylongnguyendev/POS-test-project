import React, { Suspense } from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import { Toaster } from "sonner"

export default function MainScreen() {

  const ProductList = React.lazy(() => import("../components/products/ProductList"))

  return (
    <>
      <div className="border rounded-md px-4 h-dvh">
        <Header />
        <div className="h-calc space-y-2 overflow-auto p-4">
          <h2 className="font-semibold">Danh sách sản phẩm</h2>

          <Suspense fallback={<div>loading...</div>}>
            <ProductList />
          </Suspense>
        </div>
        <Footer />
        <Toaster richColors closeButton position="bottom-center" />
      </div>
    </>
  )
}
