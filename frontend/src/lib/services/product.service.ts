import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"

export const fetchAllProducts = createAsyncThunk("getAll/product",
  async (params: {
    searchFilter: string
  }) => {
    const res = await api.get("/products", { params: { searchFilter: params.searchFilter } })
    return res.data
  }
)