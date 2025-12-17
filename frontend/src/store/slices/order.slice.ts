import { createSlice } from "@reduxjs/toolkit"
import { createOrder } from "../../lib/services/order.service"

interface OrderState {
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
  loading: "idle"
} satisfies OrderState as OrderState

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = "succeeded"
      })
      .addCase(createOrder.rejected, (state) => {
        state.loading = "failed"
      })

  }
})

const orderReducer = orderSlice.reducer
export default orderReducer