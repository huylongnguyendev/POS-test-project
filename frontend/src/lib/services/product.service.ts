import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"

export const fetchAllProducts = createAsyncThunk("getAll/product",
  async () => {
    const res = await api.get("/products")
    return res.data
  }
)