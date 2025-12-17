import { createAsyncThunk } from "@reduxjs/toolkit"
import type { CartItemType } from "../types/cart.type"
import { api } from "../api"

export const createOrder = createAsyncThunk("createOrder/order",
  async (items: CartItemType[]) => {
    const res = await api.post("/orders/create", items)
    return res.data
  }
)