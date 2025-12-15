
import { createSlice, type ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { fetchAllProducts } from "../../lib/services/product.service"
import type { ProductType } from "../../lib/types/product.type"


interface ProductState {
  products: ProductType[]
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
  products: [],
  loading: "idle"
} satisfies ProductState as ProductState

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ProductState>) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.products = action.payload
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = "failed"
      })

  }
})

const productReducer = productSlice.reducer
export default productReducer